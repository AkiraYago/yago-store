// React Router DOM
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// Components
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "category/:categoryName",
        element: <div>Category Selected</div>
      },
    ],
  }
]);

const AppRoutes = () => <RouterProvider router={router} />

export default AppRoutes;