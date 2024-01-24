import React, { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../redux/hook';
import api from '../api/api';
import { UserState, setUser } from '../redux/slice/user-slice';

const Root = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.loginValidate();
        if (!response.result) throw new Error('회원 정보가 없습니다.');
        const { result } = response;
        const userInfo: UserState = {
          id: result.id,
          username: result.email,
          role: result.role,
          logined: true
        };
        dispatch(setUser(userInfo));
      } catch (e) {
        if (e instanceof Error) console.log(`${e.stack}`);
      }
    })();
  }, []);

  return (
    <div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Root;
