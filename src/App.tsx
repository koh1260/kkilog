import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import GlobalStyle from './styles/GlobalStyle';
import { useAppDispatch } from './redux/hook';
import { UserState, setUser } from './redux/slice/user-slice';
import api from './api/api';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.loginValidate();
        if (!response.result) throw new Error('회원 정보가 없습니다.');
        const {result} = response;
        const userInfo: UserState = {
          id: result.id,
          username: result.email,
          role: result.role,
          logined: true,
        };
        dispatch(setUser(userInfo));
      } catch(e) {
        if (e instanceof Error) console.log(`${e.stack}`);
      }
    })();
  }, []);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
