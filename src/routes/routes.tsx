import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import BooksMain from "../components/books/BooksMain";
import Summary from "../components/summary/Summary";
import AddBook from "../components/addBook/AddBook";

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
        path: "/create-book",
        element: <AddBook />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
    ],
  },
]);

export default router;
