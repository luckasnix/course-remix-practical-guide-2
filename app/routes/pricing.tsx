import type { Route } from "./+types/pricing";
import pricingStylesheet from "~/styles/pricing.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: pricingStylesheet },
];

export const meta: Route.MetaFunction = ()  => [
  { title: "Pricing" },
  { name: "description", content: "This is the pricing page!" },
];

const Pricing = () => (
  <main>
    <h1>Pricing</h1>
  </main>
);

export default Pricing;
