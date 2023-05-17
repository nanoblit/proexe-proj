import { createBrowserRouter, createHashRouter, RouteObject } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    errorElement: <>404</>,
    children: [
      {
        path: "proj11321321",
        element: <Layout/>,
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
    ],
  },
];

const router = import.meta.env.DEV ? createBrowserRouter(routes) : createHashRouter(routes);

export default router;