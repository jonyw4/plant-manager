import { PlantService } from "../data";
import { Plant, TimeInterval, WaterTimeIntervals } from "../domain";
import * as data from "./fakeData";

export class PlantServiceInMemory implements PlantService {
  async getPlant(id: number): Promise<Plant | undefined> {
    const apiPlant = data.plants.find((plant) => plant.id === id)
    if(!apiPlant){
      return undefined;
    }
    return this.mapApiPlantToDomain(apiPlant);
  }
  async getWaterTimeIntervals(): Promise<WaterTimeIntervals[]> {
    return data.plantsWaterFrequencies.map((frequency) => ({
      id: frequency.key as TimeInterval,
      title: frequency.title,
    }));
  }
  async getPlants(environment?: string): Promise<Plant[]> {
    let plants: Plant[] = data.plants.map((plant) =>
      this.mapApiPlantToDomain(plant)
    );

    if (environment) {
      plants = plants.filter((plant) =>
        plant.environments.find(
          (plantEnviroment) => plantEnviroment === environment
        )
      );
    }
    return plants;
  }
  private mapApiPlantToDomain(apiPlant: typeof data.plants[number]): Plant {
    return {
      ...apiPlant,
      waterTips: apiPlant.water_tips,
      waterFrequency: {
        value: apiPlant.frequency.times,
        interval: apiPlant.frequency.repeat_every as TimeInterval,
      },
    };
  }
}