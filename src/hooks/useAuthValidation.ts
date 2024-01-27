import { useEffect } from 'react';
import api from '../api/api';
import { UserState, setUser } from '../redux/slice/user-slice';
import { useAppDispatch } from '../redux/hook';

const useAuthValidation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.loginValidate();
        const { result } = response;
        const userInfo: UserState = {
          id: result.id,
          username: result.email,
          role: result.role,
          logined: true
        };
        dispatch(setUser(userInfo));
      } catch (e) {
        if (e instanceof Error) console.log(`${e.message}`);
      }
    })();
  }, []);
}

  export default useAuthValidation;
