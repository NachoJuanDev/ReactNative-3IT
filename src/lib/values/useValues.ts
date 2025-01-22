import {useCallback, useEffect, useState} from 'react';

import {fetchValues, TValue} from '@/lib/values/values';

function useValues(key: string, mode: string) {
  const [data, setData] = useState<TValue[]>([]);
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
      const result = await fetchValues(key, mode);

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
    [key, mode],
  );

  useEffect(() => {
    if (key) {
      fetch();
    }
  }, [fetch, key]);

  return {
    data,
    isLoading,
    error,
    onRefresh: () => fetch(true),
    isRefreshing,
  };
}

export default useValues;
