import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("testpage", "routes/testpage.tsx"),
] satisfies RouteConfig;
