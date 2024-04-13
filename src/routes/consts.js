import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../layouts/AuthLayout";

export const ROUTES = {
  LOGIN: "/",
  REGISTER: "/register",
};

export const routes = [
  {
    path: ROUTES.LOGIN,
    Component: Login,
    Layout: AuthLayout,
  },
  {
    path: ROUTES.REGISTER,
    Component: Register,
    Layout: AuthLayout,
  },
];

export const navigationBarLinks = [];
