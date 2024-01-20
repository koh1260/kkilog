import api from '../api/api';
import useFetch from './useFetch';

const usePostsInCategory = (category: string) =>
  useFetch(() => api.getPostListByCategoryName(category));

  export default usePostsInCategory;