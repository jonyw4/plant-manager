import { useFetch } from "./useFetch";
import { useServices } from "./useServices";

export function useUser() {
  const { userRepository } = useServices();
  return useFetch(() => userRepository.getCurrentUser());
}
