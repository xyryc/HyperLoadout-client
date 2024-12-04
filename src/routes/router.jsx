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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        loader: () => fetch("http://localhost:5000/equipments"),
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
      },
      {
        path: "/equipment/:id",
        element: (
          <PrivateRoutes>
            <ViewDetailsPage />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipment/${params.id}`),
      },
    ],
  },
]);

export default router;
