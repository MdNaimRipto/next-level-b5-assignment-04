import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import BooksMain from "../components/books/BooksMain";
import Summary from "../components/summary/Summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/books",
        element: <BooksMain />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
    ],
  },
]);

export default router;
