import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default router;
