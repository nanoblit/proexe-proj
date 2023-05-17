import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import { CssBaseline } from "@mui/material";
import "./main.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
);
