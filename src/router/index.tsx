import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail";

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
  }
]);

export default router;
