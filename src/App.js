import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Navbar from "./components/Navbar";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
