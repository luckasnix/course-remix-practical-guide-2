import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routeConfig: RouteConfig = [
  index("routes/home.tsx"),
  route("/pricing", "routes/pricing.tsx"),
  route("/auth", "routes/auth.tsx"),
  route("/expenses", "routes/expenses/layout.tsx", [
    route("/expenses/addition", "routes/expenses/addition.tsx"),
    route("/expenses/:id", "routes/expenses/update.tsx"),
  ]),
  route("/expenses/analysis", "routes/expenses/analysis.tsx"),
];

export default routeConfig;
