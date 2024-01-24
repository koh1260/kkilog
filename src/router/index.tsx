import { createBrowserRouter } from 'react-router-dom';
import WritePostPage from '../pages/WritePostPage';
import EditPostPage from '../pages/EditPostPage';
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import BlogLayout from '../layout/BlogLayout';
import PostsPage from '../pages/PostsPage';
import PostDetailPage from '../pages/PostDetailPage';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import QueryErrorBoundary from '../components/error/QueryErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '*',
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <MainPage /> },
          {
            path: 'blog/',
            element: <BlogLayout />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <PostsPage />
              },
              {
                path: 'category/:categoryName',
                element: <PostsPage />
              },
              {
                path: ':postId',
                element: (
                  <QueryErrorBoundary>
                    <PostDetailPage />
                  </QueryErrorBoundary>
                )
              }
            ]
          },
          {
            path: 'blog/write',
            element: <WritePostPage />
          },
          {
            path: 'blog/edit/:postId',
            element: <EditPostPage />
          },
          {
            path: '*',
            element: <NotFoundPage />
          }
        ]
      },
    ]
  }
]);

export default router;
