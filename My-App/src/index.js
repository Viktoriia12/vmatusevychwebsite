import AboutPage from "./Pages/AboutPage"; //look in the same location as index.js
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";
import NavigationPage from "./Pages/NavigationPage";
import React from "react";
import ReactDOM from "react-dom/client"; //javascript files
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css" //this is a css file
import 'bootstrap/dist/css/bootstrap.min.css';

//This will declare the routes/elements
const router = createBrowserRouter([
  {
    element: <NavigationPage />,
    path: "/", 
    children: [
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
      {
        element: <PortfolioPage />,
        path: "/Portfolio",
      }, 
      {
        element: <ContactPage />,
        path: "/Contact",
      }, 
    ]
  },
]);

//Render the route provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
