import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import WritePostPage from '../pages/WritePostPage';
import EditPostPage from '../pages/EditPostPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/category/:id',
    element: <Home />
  },
  {
    path: '/:postId',
    element: <PostDetail />
  },
  {
    path: '/write',
    element: <WritePostPage />
  },
  {
    path: '/edit/:postId',
    element: <EditPostPage />
  },
]);

export default router;
