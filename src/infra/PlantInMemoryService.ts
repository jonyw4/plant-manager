import sleep from 'sleep-promise';
import { PlantService } from '../data';
import { Pagination, PaginationOptions } from '../data/protocols/Pagination';
import { Plant, TimeInterval, WaterTimeIntervals } from '../domain';
import { IN_MEMORY_AWAIT_TIME } from './consts';
import * as data from './fakeData';

export class PlantInMemoryService implements PlantService {
    async getPlant(id: number): Promise<Plant | undefined> {
        await sleep(IN_MEMORY_AWAIT_TIME);

        const apiPlant = data.plants.find((plant) => plant.id === id);
        if (!apiPlant) {
            return undefined;
        }
        return this.mapApiPlantToDomain(apiPlant);
    }
    async getWaterTimeIntervals(): Promise<WaterTimeIntervals[]> {
        await sleep(IN_MEMORY_AWAIT_TIME);

        return data.plantsWaterFrequencies.map((frequency) => ({
            id: frequency.key as TimeInterval,
            title: frequency.title
        }));
    }
    async getPlants(
        { limit = 1, page: currentPage = 1 }: PaginationOptions,
        environment?: string
    ): Promise<Pagination<Plant[]>> {
        await sleep(IN_MEMORY_AWAIT_TIME);

        let plants: Plant[] = data.plants.map((plant) =>
            this.mapApiPlantToDomain(plant)
        );

        const totalItems = plants.length;
        const totalPages = Math.round(totalItems / limit);
        const start = currentPage * limit - limit;
        const end = start + limit;

        plants = plants.slice(start, end);

        if (environment) {
            plants = plants.filter((plant) =>
                plant.environments.find(
                    (plantEnviroment) => plantEnviroment === environment
                )
            );
        }
        return {
            pagination: {
                total: totalItems,
                currentPage,
                totalPages
            },
            data: plants
        };
    }
    private mapApiPlantToDomain(apiPlant: typeof data.plants[number]): Plant {
        return {
            ...apiPlant,
            waterTips: apiPlant.water_tips,
            waterFrequency: {
                value: apiPlant.frequency.times,
                interval: apiPlant.frequency.repeat_every as TimeInterval
            }
        };
    }
}
