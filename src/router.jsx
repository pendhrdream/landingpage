import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Business from "./components/business/Business";
import Solutions from "./components/solutions/Solutions";
import Industries from "./components/industries/Industries";
import Resources from "./components/resources/Resources";
import About from "./components/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/home"} replace />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/business",
    element: <Business />,
  },
  {
    path: "/solutions",
    element: <Solutions />,
  },
  {
    path: "/industries",
    element: <Industries />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
