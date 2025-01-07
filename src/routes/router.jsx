import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AllEquipmentPage from "../pages/AllEquipmentPage";
import AddEquipmentPage from "../pages/AddEquipmentPage";
import MyEquipmentPage from "../pages/MyEquipmentPage";
import UpdateEquipmentPage from "../pages/UpdateEquipmentPage";
import ViewDetailsPage from "../pages/ViewDetailsPage";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/all-equipments",
        element: <AllEquipmentPage />,
        loader: () =>
          fetch("https://hyper-loadout-server.vercel.app/equipments"),
      },

      // Private Routes
      {
        path: "/add-equipment",
        element: (
          <PrivateRoutes>
            <AddEquipmentPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-equipment",
        element: (
          <PrivateRoutes>
            <MyEquipmentPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-equipment/:id",
        element: (
          <PrivateRoutes>
            <UpdateEquipmentPage />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hyper-loadout-server.vercel.app/update-equipment/${params.id}`
          ),
      },
      {
        path: "/equipment/:id",
        element: <ViewDetailsPage />,
        loader: ({ params }) =>
          fetch(
            `https://hyper-loadout-server.vercel.app/equipment/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
