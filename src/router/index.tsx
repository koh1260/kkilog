import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail";
import WritePostPage from "../pages/WritePostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/category/:id',
    element: <Home />
  },
  {
    path: '/:id',
    element: <PostDetail />
  },
  {
    path: '/write',
    element: <WritePostPage />
  }
]);

export default router;
