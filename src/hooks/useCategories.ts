import { useEffect } from 'react';
import api from '../api/api';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import useFetch from './useFetch';
import { setCategoryList, setError, setIsError, setIsLoading } from '../redux/slice/categories.slice';

const useCategories = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);
  const {data, isLoading, isError, error} = useFetch(() => api.getCategoryList(), []);

  useEffect(() => {
    dispatch(setIsLoading(isLoading));

    if (data) dispatch(setCategoryList([...data]))

    if (isError && error) {
      dispatch(setIsError(isError))
      dispatch(setError(error));
    }
  }, [data, isLoading, isError, error])

  return categories;
}

export default useCategories;