import { useFetch } from "./useFetch";
import { useServices } from "./useServices";

export function usePlants(environment?: string){
  const { plantService } = useServices();
  
  return useFetch(
    (environment) => plantService.getPlants(environment),
    environment
  );
}