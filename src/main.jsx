// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Import the layout and page components
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WorkflowPage from "./pages/WorkflowPage";
import CanvasPage from "./pages/CanvasPage";

// Define the application routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // The root layout with Navbar
    children: [
      {
        index: true, // This makes HomePage the default child route for "/"
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "workflow",
        element: <WorkflowPage />,
      },
      {
        path: "workflow/:id", // This is the dynamic route for the canvas
        element: <CanvasPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
