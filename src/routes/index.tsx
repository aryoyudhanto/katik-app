import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages";
import Parallelogram from "../pages/Parallelogram";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/parallelogram",
    element: <Parallelogram />,
  },
]);

const index = () => {
    return <RouterProvider router={router} />;
};

export default index;
