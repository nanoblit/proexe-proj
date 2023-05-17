import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./pages/Layout.tsx";

const routes: RouteObject[] =
  [
    {
      path: "",
      element: <Layout/>,
      errorElement: <>404</>,
      children: [
        {
          path: "",
          element: <Home/>,
        },
        {
          path: "form",
          element: <>form</>,
        },
      ],
    },
  ];

const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });
export default router;