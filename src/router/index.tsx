import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import WritePostPage from '../pages/WritePostPage';
import EditPostPage from '../pages/EditPostPage';
import MainPage from '../pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/blog',
    element: <Home />
  },
  {
    path: '/blog/category/:categoryName',
    element: <Home />
  },
  {
    path: '/blog/:postId',
    element: <PostDetail />
  },
  {
    path: '/blog/write',
    element: <WritePostPage />
  },
  {
    path: '/blog/edit/:postId',
    element: <EditPostPage />
  },
]);

export default router;
