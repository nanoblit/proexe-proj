import { createBrowserRouter, createHashRouter, RouteObject } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./pages/Layout.tsx";

const routes: RouteObject[] = [
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

const options = { basename: import.meta.env.BASE_URL };

const router = import.meta.env.DEV ? createBrowserRouter(routes, options) : createHashRouter(routes, options);

console.log(import.meta.env.BASE_URL);
export default router;