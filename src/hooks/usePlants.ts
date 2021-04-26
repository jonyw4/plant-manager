import { useFetch } from "./useFetch";
import { useServices } from "./useServices";

export function usePlants(environment?: string){
  const {plantService} = useServices();
  
  return useFetch(plantService.getPlants, environment);
}