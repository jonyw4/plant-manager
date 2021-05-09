import { useEffect, useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

export interface UseFetchResponse<T> {
    isLoading: boolean;
    data?: T;
    error?: any;
    fetch: () => Promise<void>;
}

export function useFetch<T>(
    callback: (options: any) => Promise<T>,
    options?: any
): UseFetchResponse<T> {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<T | undefined>();
    const [error, setError] = useState<any | undefined>();

    async function fetch(): Promise<void> {
        setIsLoading(true);
        setData(undefined);
        try {
            const newData = await callback(options);
            setIsLoading(false);
            setData(newData);
            setError(undefined);
        } catch (error) {
            setIsLoading(false);
            setData(undefined);
            setError(error);
        }
    }

    const useEffectFn =
        typeof options === 'object' ? useDeepCompareEffect : useEffect;

    useEffectFn(() => {
        fetch();
    }, [options]);

    return {
        isLoading,
        data,
        error,
        fetch
    };
}
