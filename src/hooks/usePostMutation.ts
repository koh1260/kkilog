import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { WritePostData } from '../type/request';
import { QUERY_KEY as postsQueryKey } from './usePosts';
import api from '../api/api';

const fetcher = (payload: WritePostData) => api.writePost(payload);

const usePostMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () =>
      {
        navigate('/blog');
        queryClient.invalidateQueries({
          queryKey: [postsQueryKey]
        });
      }
  });
};

export default usePostMutation;
