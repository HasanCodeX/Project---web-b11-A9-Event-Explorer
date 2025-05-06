import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Login from "./pages/Login";

import Signup from "./pages/Signup";

import App from "./App";


import Home from "./pages/Home";

import NotFound from "./pages/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { index: true, element: <Home /> },
    
    ],
  },
  {
    path:'/*',
    element:<NotFound/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <HelmetProvider>
    < >
    <RouterProvider router={router} />
    <ToastContainer />
    </>
    </HelmetProvider>
   
  </React.StrictMode>
);
