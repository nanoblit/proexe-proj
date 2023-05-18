import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./pages/Layout.tsx";
import FormPage from "./pages/FormPage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Layout/>,
      errorElement: <PageNotFound/>,
      children: [
        {
          path: "",
          element: <HomePage/>,
        },
        {
          path: "form",
          element: <FormPage/>,
        },
        {
          path: "form/:id",
          element: <FormPage/>,
        },
      ],
    },
  ],
);

export default router;