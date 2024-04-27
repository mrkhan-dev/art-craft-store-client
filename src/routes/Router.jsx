import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sign_up",
        element: <SignUp />,
      },
      {
        path: "sign_in",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
