import { useSuspenseQuery } from '@tanstack/react-query';
import api from '../api/api';

const QUERY_KEY = 'cposts';

const usePostsInCategory = (category: string) => {
  const fetcher = () => api.getPostListByCategoryName(category);

  return useSuspenseQuery({
    queryKey: [QUERY_KEY, category],
    queryFn: fetcher,
  });
};

export default usePostsInCategory;
