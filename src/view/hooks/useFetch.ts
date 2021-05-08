import { useEffect, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

export interface UseFetchResponse<T> {
  isLoading: boolean;
  data?: T;
  error?: any;
}

export function useFetch<T>(
    fetch: (options: any) => Promise<T>, 
    options?: any
  ): UseFetchResponse<T> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<any | undefined>();

  async function updateData() {
    setIsLoading(true);
    setData(undefined);
    try {
      const newData = await fetch(options);
      setIsLoading(false);
      setData(newData);
      setError(undefined);
    } catch (error) {
      setIsLoading(false);
      setData(undefined);
      setError(error);
    }
  }

  const useEffectFn = typeof options === "object" ? useDeepCompareEffect : useEffect;

  useEffectFn(() => {
    updateData();
  }, [options]);

  return {
    isLoading, data, error
  };
}