import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/home";
import About from "../Pages/about";
import Contact from "../Pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
