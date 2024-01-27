import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../components/Loading';
import QueryErrorBoundary from '../components/error/QueryErrorBoundary';
import useAuthValidation from '../hooks/useAuthValidation';

const Root = () => {
  useAuthValidation();

  // useAuthValidation();

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await api.loginValidate();
  //       if (!response.result) throw new Error('회원 정보가 없습니다.');
  //       const { result } = response;
  //       const userInfo: UserState = {
  //         id: result.id,
  //         username: result.email,
  //         role: result.role,
  //         logined: true
  //       };
  //       dispatch(setUser(userInfo));
  //     } catch (e) {
  //       if (e instanceof Error) console.log(`${e.stack}`);
  //     }
  //   })();
  // }, []);

  return (
    <QueryErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </QueryErrorBoundary>
  );
};

export default Root;
