import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlantService, UserPlantRepository } from '../data';
import { UserPlantNotificationService } from '../data/UserPlantNotificationService';
import { UserPlant } from '../domain';
import { UserPlantModel } from './models';
import { v4 as uuidv4 } from 'uuid';

export class UserPlantDeviceStorageRepository implements UserPlantRepository {
    constructor(
        private plantService: PlantService,
        private userPlantNotification: UserPlantNotificationService
    ) {}
    async addPlantToCurrentUser(
        plantID: number,
        nextNotificationDate: Date
    ): Promise<UserPlant> {
        const plant = await this.plantService.getPlant(plantID);
        if (!plant) {
            throw new Error('Plant not found');
        }

        const notificationID = await this.userPlantNotification.schedule(
            plant,
            nextNotificationDate
        );

        const data = await AsyncStorage.getItem('@plantmanager:userPlants');
        const userPlantModels = data
            ? (JSON.parse(data) as UserPlantModel[])
            : [];

        const newUserPlantModel: UserPlantModel = {
            id: uuidv4(),
            nextNotification: nextNotificationDate.toString(),
            notificationID,
            plantID
        };

        const newUserPlantModels: UserPlantModel[] = [
            ...userPlantModels,
            newUserPlantModel
        ];

        await AsyncStorage.setItem(
            '@plantmanager:userPlants',
            JSON.stringify(newUserPlantModels)
        );

        return this.mapUserPlantModelToDomain(newUserPlantModel);
    }
    async removePlantToCurrentUser(id: string): Promise<void> {
        const data = await AsyncStorage.getItem('@plantmanager:userPlants');
        const userPlantModels = data
            ? (JSON.parse(data) as UserPlantModel[])
            : [];
        const userPlantModel = userPlantModels.find(
            (userPlantModel) => userPlantModel.id === id
        );

        if (!userPlantModel) {
            throw new Error('Plant not found');
        }

        await this.userPlantNotification.cancelSchedule(
            userPlantModel.notificationID
        );

        const newUserPlantModels = userPlantModels.filter(
            (userPlantModel) => userPlantModel.id !== id
        );

        await AsyncStorage.setItem(
            '@plantmanager:userPlants',
            JSON.stringify(newUserPlantModels)
        );
    }
    async getCurrentUserPlants(): Promise<UserPlant[]> {
        const jsonStringUserPlantsIDs = await AsyncStorage.getItem(
            '@plantmanager:userPlants'
        );

        if (!jsonStringUserPlantsIDs) {
            return [];
        }
        const userPlantModels = JSON.parse(
            jsonStringUserPlantsIDs
        ) as UserPlantModel[];

        const userPlants: UserPlant[] = [];

        for await (const userPlantModel of userPlantModels) {
            const userPlant = await this.mapUserPlantModelToDomain(
                userPlantModel
            );
            userPlants.push(userPlant);
        }

        return userPlants;
    }
    private async mapUserPlantModelToDomain(
        userPlantModel: UserPlantModel
    ): Promise<UserPlant> {
        const { plantID, nextNotification, id } = userPlantModel;
        const plant = await this.plantService.getPlant(plantID);
        if (!plant) {
            throw new Error('Não foi encontrado planta');
        }
        return {
            id,
            plant,
            nextNotification: new Date(nextNotification)
        };
    }
}
