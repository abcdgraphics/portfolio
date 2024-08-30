import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectComponent from "./components/RedirectComponent.jsx";
import Login from "./components/pages/Login.jsx";
import Admin from "./components/pages/Admin.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import EditApps from "./components/backend/EditApps.jsx";
import EditProjects from "./components/backend/EditProjects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/client-access",
    element: <RedirectComponent />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "apps/:id/:type",
        element: <EditApps />,
      },
      {
        path: "projects/:id/:category",
        element: <EditProjects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
