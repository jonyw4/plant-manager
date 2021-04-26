import { Plant, WaterTimeIntervals } from "../domain";

export interface PlantService {
  getPlants(environment?: string): Promise<Plant[]>
  getWaterTimeIntervals(): Promise<WaterTimeIntervals[]>
}