import {useCallback, useEffect, useState} from 'react';

import {TRecord, TRecordResponse} from '@/lib/types';

function useGet<T>(
  fetchMethod: (params: T) => Promise<{
    data?: TRecordResponse;
    error?: string | undefined;
    code: number;
  }>,
  params: T,
) {
  const [data, setData] = useState<TRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetch = useCallback(
    async (refresh = false) => {
      if (refresh) {
        setIsRefreshing(true);
      } else {
        setIsLoading(true);
      }
      const result = await fetchMethod(params);

      if (result.error) {
        setError(result.error);
      } else if (result.data) {
        setData(result.data[Object.keys(result.data)[0]].reverse());
      }

      if (refresh) {
        setIsRefreshing(false);
      } else {
        setIsLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fetchMethod, ...Object.values(params as {[key: string]: string})],
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    data,
    isLoading,
    error,
    onRefresh: () => fetch(true),
    isRefreshing,
  };
}

export default useGet;
