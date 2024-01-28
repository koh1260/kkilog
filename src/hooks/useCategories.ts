import { useSuspenseQuery } from '@tanstack/react-query';
import api from '../api/api';

const QUERY_KEY = 'categories';

const fetcher = () => api.getCategoryList();

const useCategories = () =>
  useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetcher
  });

export default useCategories;
