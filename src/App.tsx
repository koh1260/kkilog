import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import GlobalStyle from './styles/GlobalStyle';
import storage from './lib/storage';
import { useAppDispatch } from './redux/hook';
import { UserState, setLogined, setUser } from './redux/slice/user-slice';
import api from './api/api';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const loginInfo = storage.get<UserState>('user');
    
    if (!loginInfo) return;
    dispatch(setUser(loginInfo));

    (async () => {
      if (!loginInfo.username) return;
      const response = await api.loginValidate(loginInfo.username);
      if(response.status === 200) dispatch(setLogined({logined: true}))
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
