import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import ErrorPage from "../pages/ErrorPage";
import AddCraft from "../pages/AddCraft/AddCraft";
import MyCraftList from "../pages/MyCraftList/MyCraftList";
import CraftDetails from "../pages/CraftDetails/CraftDetails";
import Update from "../pages/UpdateCraft/Update";
import AllCraft from "../pages/AllArt&Craft/AllCraft";
import ProtectedRoute from "../components/Protected/ProtectedRoute";

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
        path: "add_craft",
        element: (
          <ProtectedRoute>
            <AddCraft />
          </ProtectedRoute>
        ),
      },
      {
        path: "my_craft",
        element: (
          <ProtectedRoute>
            <MyCraftList />
          </ProtectedRoute>
        ),
      },
      {
        path: "allCraft",
        element: <AllCraft />,
        loader: () => fetch("http://localhost:5000/allData"),
      },
      {
        path: "craftDetails/:id",
        element: <CraftDetails />,
      },
      {
        path: "UpdateCraft/:id",
        element: <Update />,
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
