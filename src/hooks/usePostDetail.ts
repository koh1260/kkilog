import { useSuspenseQuery } from '@tanstack/react-query';
import api from '../api/api';

const QUERY_KEY = 'post';

const usePostDetail = (id: number) => {
  const fetcher = () => api.getPost(id);

  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetcher
  });
};

export default usePostDetail
