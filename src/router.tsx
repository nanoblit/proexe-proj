import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/proexe-proj",
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