import { useSuspenseQuery } from '@tanstack/react-query';
import api from '../api/api';

const QUERY_KEY = 'posts';

const fetcher = () => api.getPostList();

const usePosts = () =>
  useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetcher
  });

export default usePosts;
