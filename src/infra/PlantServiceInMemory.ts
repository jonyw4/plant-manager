import { PlantService } from "../data";
import { Plant, TimeInterval, WaterTimeIntervals } from "../domain";
import * as data from "./fakeData";

export class PlantServiceInMemory implements PlantService {
  async getWaterTimeIntervals(): Promise<WaterTimeIntervals[]> {
    return data.plantsWaterFrequencies.map((frequency) => ({
      id: frequency.key as TimeInterval,
      title: frequency.title,
    }));
  }
  async getPlants(environment?: string): Promise<Plant[]> {
    let plants: Plant[] = data.plants.map((plant) => ({
      ...plant,
      waterTips: plant.water_tips,
      waterFrequency: {
        value: plant.frequency.times,
        interval: plant.frequency.repeat_every as TimeInterval,
      },
    }));
    
    if(environment){
      plants = plants.filter((plant) => 
        plant.environments.find(plantEnviroment => plantEnviroment === environment))
    }
    return plants
      
  }
  
}