import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/proj11321321",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
    ],
  },
]);

export default router;