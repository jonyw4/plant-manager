import { useFetch } from "./useFetch";
import { useUseCases } from "./useUseCases";

export function useUser() {
  const { getUser } = useUseCases();
  return useFetch(async () => getUser.execute());
}
