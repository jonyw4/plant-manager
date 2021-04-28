import { Plant, WaterTimeIntervals } from "../domain";

export interface PlantService {
  getPlants(environment?: string): Promise<Plant[]>;
  getPlant(id: number): Promise<Plant | undefined>;
  getWaterTimeIntervals(): Promise<WaterTimeIntervals[]>;
}