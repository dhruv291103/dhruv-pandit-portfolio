// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "@tanstack/react-router";
// import { router } from "./router";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <RouterProvider router={router} />
// );



import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

const router = getRouter();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);