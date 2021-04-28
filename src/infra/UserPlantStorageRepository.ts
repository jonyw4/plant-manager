import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlantService, UserPlantRepository } from "../data";
import { UserPlant } from "../domain";
import { UserPlantModel } from "./models";

export class UserPlantStorageRepository implements UserPlantRepository {
  constructor(private plantService: PlantService) {}
  async addPlantToCurrentUser(
    plantID: number,
    nextNotificationDate: Date
  ): Promise<UserPlant> {
    const data = await AsyncStorage.getItem("@plantmanager:userPlants");
    const userPlantModels = data ? (JSON.parse(data) as UserPlantModel[]) : [];

    const newUserPlantModel: UserPlantModel = {
      id: 1,
      nextNotification: nextNotificationDate.toString(),
      plantID,
    };

    const newUserPlantModels: UserPlantModel[] = [
      ...userPlantModels,
      newUserPlantModel,
    ];

    await AsyncStorage.setItem(
      "@plantmanager:plants",
      JSON.stringify(newUserPlantModels)
    );

    return this.mapUserPlantModelToDomain(newUserPlantModel);
  }
  async removePlantToCurrentUser(id: number): Promise<void> {
    const data = await AsyncStorage.getItem("@plantmanager:userPlants");
    const userPlantModels = data ? (JSON.parse(data) as UserPlantModel[]) : [];
    const newUserPlantModels = userPlantModels.filter(
      (userPlantModel) => userPlantModel.id === id
    );
    await AsyncStorage.setItem(
      "@plantmanager:plants",
      JSON.stringify(newUserPlantModels)
    );
  }
  async getCurrentUserPlants(): Promise<UserPlant[]> {
    const jsonStringUserPlantsIDs = await AsyncStorage.getItem(
      "@plantmanager:userPlants"
    );
    if (!jsonStringUserPlantsIDs) {
      return [];
    }
    const userPlantModels = JSON.parse(
      jsonStringUserPlantsIDs
    ) as UserPlantModel[];

    const userPlants: UserPlant[] = [];

    for await (const userPlantModel of userPlantModels) {
      const userPlant = await this.mapUserPlantModelToDomain(userPlantModel);
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
      throw new Error("Não foi encontrado planta");
    }
    return {
      id,
      plant,
      nextNotification: new Date(nextNotification),
    };
  }
}