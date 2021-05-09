import { Plant, WaterTimeIntervals } from '../domain';
import { Pagination, PaginationOptions } from './protocols/Pagination';

export interface PlantService {
  getPlants(
    paginationOptions: PaginationOptions,
    environment?: string
  ): Promise<Pagination<Plant[]>>;
  getPlant(id: number): Promise<Plant | undefined>;
  getWaterTimeIntervals(): Promise<WaterTimeIntervals[]>;
}
