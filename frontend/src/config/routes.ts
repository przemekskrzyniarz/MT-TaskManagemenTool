import loadable from "@loadable/component";
import { RouteProps } from "react-router-dom";

const Home = loadable(() => import("../pages/Home"));
const Auth = loadable(() => import("../pages/Auth"));

export enum ROUTES {
  HOME = "/",
  AUTH = "/auth",
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