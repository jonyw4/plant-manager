import { useFetch } from "./useFetch";
import { useServices } from "./useServices";

export function useEnvironments() {
  const { environmentService } = useServices();
  return useFetch(environmentService.getEnvironments);
}
