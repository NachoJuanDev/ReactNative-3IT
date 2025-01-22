import {useCallback, useEffect, useState} from 'react';

import {fetchDetails, TDetail} from '@/lib/details/details';

function useDetails(key: string, mode: string) {
  const [data, setData] = useState<TDetail[]>([]);
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
      const result = await fetchDetails(key, mode);

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

export default useDetails;
