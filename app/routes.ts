import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

const routeConfig: RouteConfig = [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("/pricing", "routes/pricing.tsx"),
    route("/auth", "routes/auth.tsx"),
  ]),
  layout("routes/expenses/layout.tsx", [
    route("/expenses", "routes/expenses/list.tsx", [
      route("/expenses/addition", "routes/expenses/addition.tsx"),
      route("/expenses/:id", "routes/expenses/update.tsx"),
    ]),
    route("/expenses/analysis", "routes/expenses/analysis.tsx"),
  ]),
  route("/expenses/raw", "routes/expenses/raw.ts"),
];

export default routeConfig;
