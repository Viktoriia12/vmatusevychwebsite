import AboutPage from "./Pages/AboutPage"; //look in the same location as index.js
import HomePage from "./Pages/HomePage";
import React from "react";
import ReactDOM from "react-dom/client"; //javascript files
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css" //this is a css file

//This will declare the routes/elements
const router = createBrowserRouter([
  {
    // it renders this element
    element: <HomePage />,
    // when the URL matches this segment
    path: "/",
  },
  {
    element: <AboutPage />,
    path: "/About",
  }, //what I want the name of the path to be
]);

//Render the route provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
