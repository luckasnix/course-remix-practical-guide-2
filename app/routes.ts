import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routeConfig: RouteConfig = [
  index("routes/home.tsx"),
  route("/pricing", "routes/pricing.tsx"),
  route("/auth", "routes/auth.tsx"),
];

export default routeConfig;
