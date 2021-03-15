import loadable from "@loadable/component";
import { RouteProps } from "react-router-dom";

const Home = loadable(() => import("../pages/Home"));
const About = loadable(() => import("../pages/About"));

export enum ROUTES {
  HOME = "/",
  ABOUT = "/about",
}

export const index: RouteProps = {
  exact: true,
  path: ROUTES.HOME,
  component: Home,
};

export const about: RouteProps = {
  path: ROUTES.ABOUT,
  component: About,
};