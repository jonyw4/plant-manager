import { PaginationOptions } from '../../data/protocols/Pagination';
import { useFetch } from './useFetch';
import { useServices } from './useServices';

interface UsePlantsOptions {
  paginationOptions: PaginationOptions;
  environment?: string;
}

export function usePlants(options: UsePlantsOptions) {
  const { plantService } = useServices();

  return useFetch(
    ({ paginationOptions, environment }: UsePlantsOptions) =>
      plantService.getPlants(paginationOptions, environment),
    options
  );
}
