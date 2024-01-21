import { useEffect, useState } from 'react';

function useFetch<TData>(
  callback: () => Promise<TData>,
) {
  const [data, setData] = useState<TData>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    callback()
      .then((result) => setData(result))
      .catch((e) => {
        setIsError(true);
        setError(e);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (!data) return { isLoading, isError, error };
  return { data, isLoading, isError, error };
}

export default useFetch;