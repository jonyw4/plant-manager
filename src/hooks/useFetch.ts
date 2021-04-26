import { useEffect, useState } from "react";


export interface UseFetchResponse<T> {
  isLoading: boolean;
  data?: T;
  error?: any;
}

export function useFetch<T>(
    fetch: (options: any) => Promise<T>, 
    options?: string
  ): UseFetchResponse<T> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<any | undefined>();

  async function updateData() {
    setIsLoading(true);
    try {
      const data = await fetch(options);
      setIsLoading(false);
      setData(data);
      setError(undefined);
    } catch (error) {
      setIsLoading(false);
      setData(undefined);
      setError(error);
    }
  }

  useEffect(() => {
    updateData();
  }, [options]);

  return {
    isLoading, data, error
  };
}