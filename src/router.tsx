import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./pages/Layout.tsx";

const router = createBrowserRouter(
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
  ],
);

export default router;