import type { ComponentType } from "react";

export type PricingPlanItem = {
  id?: string;
  title: string;
  price: string;
  perks: string[];
  icon: ComponentType;
};

export type PricingPlanProps = PricingPlanItem;

export const PricingPlan = ({ title, price, perks, icon: Icon }: PricingPlanProps) => (
  <article>
    <header>
      <div className="icon">
        <Icon />
      </div>
      <h2>{title}</h2>
      <p>{price}</p>
    </header>
    <div className="plan-content">
      <ol>
        {perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ol>
      <div className="actions">
        <a href="/not-implemented">Learn More</a>
      </div>
    </div>
  </article>
);
