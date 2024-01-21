import api from '../api/api';
import useFetch from './useFetch';

const usePosts = () => useFetch(() => api.getPostList(), []);

export default usePosts;
