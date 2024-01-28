import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { UpdatePostData } from '../type/request';

interface UpdatePayload {
  postId: number;
  payload: UpdatePostData;
}

const fetcher = ({ postId, payload }: UpdatePayload) =>
  api.updatePost(postId, payload);

const useUpdatePost = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: fetcher,
    onSuccess: () => navigate(-1)
  });
};

export default useUpdatePost;
