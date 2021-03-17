import loadable from "@loadable/component";
import { RouteProps } from "react-router-dom";

const Home = loadable(() => import("../pages/Home"));
const Auth = loadable(() => import("../pages/Auth"));
const Logout = loadable(() => import("../pages/Logout"));

export enum ROUTES {
  HOME = "/",
  AUTH = "/auth",
  LOGOUT = "/logout",
}

export const index: RouteProps = {
  exact: true,
  path: ROUTES.HOME,
  component: Home,
};

export const auth: RouteProps = {
  path: ROUTES.AUTH,
  component: Auth,
};

export const logout: RouteProps = {
  path: ROUTES.LOGOUT,
  component: Logout,
};