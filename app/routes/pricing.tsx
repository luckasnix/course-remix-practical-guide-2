import { FaTrophy, FaHandshake } from "react-icons/fa";

import type { Route } from "./+types/pricing";
import { PricingPlan, type PricingPlanItem } from "~/components/pricing-plan/pricing-plan";
import marketingStylesheet from "~/styles/marketing.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: marketingStylesheet },
];

export const meta: Route.MetaFunction = ()  => [
  { title: "Pricing" },
  { name: "description", content: "This is the pricing page!" },
];

const pricingPlanList: PricingPlanItem[] = [
  {
    id: 'p1',
    title: 'Basic',
    price: 'Free forever',
    perks: ['1 User', 'Up to 100 expenses/year', 'Basic analytics'],
    icon: FaHandshake
  },
  {
    id: 'p2',
    title: 'Pro',
    price: '$9.99/month',
    perks: ['Unlimited Users', 'Unlimited expenses/year', 'Detailed analytics'],
    icon: FaTrophy
  },
];

const Pricing = () => (
  <main id="pricing">
    <h2>Great Product, Simple Pricing</h2>
    <ol id="pricing-plans">
      {pricingPlanList.map(({ id, title, price, perks, icon }) => (
        <li key={id} className="plan">
          <PricingPlan
            title={title}
            price={price}
            perks={perks}
            icon={icon}
          />
        </li>
      ))}
    </ol>
  </main>
);

export default Pricing;
