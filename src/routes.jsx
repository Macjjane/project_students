import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Students } from "./pages/students";
import { Contact } from "./pages/contact";
import { UserDetails } from "./pages/user-details";
import { ErrorPage } from "./pages/error-page";



export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
   
  },
  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/error-page",
    element: <Students />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/user-details/:index",
    element: <UserDetails />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },

]);



