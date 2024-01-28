import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import api from '../api/api';
import { LoginData } from '../type/request';
import { useAppDispatch } from '../redux/hook';
import { closeLoginModal } from '../redux/slice/login-modal-slice';
import { UserState, setUser } from '../redux/slice/user-slice';
import { persistItem } from '../lib/storage';

const fetcher = (payload: LoginData) => api.login(payload);

const useLogin = (loginData: LoginData) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, mutate, isError } = useMutation({
    mutationFn: fetcher,
    onSuccess: () => {
      toast.success('로그인 완료!');
      document.body.classList.remove('open-modal');
      navigate('/');
    }
  });
  
  useEffect(() => {
    if (data) {
      const { result } = data;
      const userData: UserState = {
        id: result.id,
        role: result.role,
        username: result.email,
        logined: true,
      } 

      persistItem('user', loginData);
      dispatch(closeLoginModal());
      dispatch(setUser(userData))
    }
  }, [data])

  return { mutate, isError };
};

export default useLogin;
