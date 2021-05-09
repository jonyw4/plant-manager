import { useFetch } from './useFetch';
import { useServices } from './useServices';

export function useUserPlants() {
    const { userPlantRepository } = useServices();
    return useFetch(() => userPlantRepository.getCurrentUserPlants());
}
