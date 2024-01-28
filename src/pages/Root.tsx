import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../components/Loading';
import useAuthValidation from '../hooks/useAuthValidation';

const Root = () => {
  useAuthValidation();

  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};

export default Root;
