import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import WritePostPage from '../pages/WritePostPage';
import EditPostPage from '../pages/EditPostPage';
import Root from '../pages/Root';
import BlogLayout from '../layout/BlogLayout';
import PostsPage from '../pages/PostsPage';
import PostDetailPage from '../pages/PostDetailPage';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/error/NotFoundPage';
import Loading from '../components/Loading';
import CategoryPostsPage from '../pages/CategoryPostsPage';
import ErrorPage from '../pages/error/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '*',
        children: [
          { index: true, element: <MainPage /> },
          {
            path: 'blog/',
            element: <BlogLayout />,
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<Loading />}>
                    <PostsPage />
                  </Suspense>
                )
              },
              {
                path: 'category/:categoryName',
                element: (
                  <Suspense fallback={<Loading />}>
                    <CategoryPostsPage />
                  </Suspense>
                )
              },
              {
                path: ':postId',
                element: (
                  <Suspense fallback={<Loading />}>
                    <PostDetailPage />
                  </Suspense>
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
      }
    ]
  }
]);

export default router;
