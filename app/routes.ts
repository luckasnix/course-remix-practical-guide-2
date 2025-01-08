import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routeConfig: RouteConfig = [
  index("routes/root.tsx"),
  route("/pricing", "routes/pricing.tsx"),
  route("/auth", "routes/auth.tsx"),
  route("/expenses", "routes/expenses/layout.tsx",[
    index("routes/expenses/list.tsx"),
    route("/expenses/analysis", "routes/expenses/analysis.tsx"),
    route("/expenses/addition", "routes/expenses/addition.tsx"),
    route("/expenses/:id", "routes/expenses/update.tsx"),
  ]),
];

export default routeConfig;
