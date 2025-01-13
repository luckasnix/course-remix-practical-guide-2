import { Link } from "react-router";
import { FaArrowRight, FaDollarSign, FaChartBar } from "react-icons/fa";

import type { Route } from "./+types/home";
import marketingStylesheet from "~/styles/marketing.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: marketingStylesheet },
];

export const meta: Route.MetaFunction = ()  => [
  { title: "Home" },
  { name: "description", content: "This is the Home page!" },
];

const Home = () => (
  <main>
    <section className="marketing-section">
      <header>
        <FaDollarSign />
        <h2>A Central Space</h2>
      </header>
      <div className="marketing-content">
        <div className="marketing-image">
          <img src="images/expenses-management.jpg" alt="A list of expenses." />
        </div>
        <div className="marketing-explanation">
          <p>Manage your expenses in one central place.</p>
          <p>
            <Link className="cta" to="/expenses">
              <span>Get Started</span>
              <FaArrowRight />
            </Link>
          </p>
        </div>
      </div>
    </section>
    <section className="marketing-section">
      <header>
        <FaChartBar />
        <h2>Detailed Analytics</h2>
      </header>
      <div className="marketing-content">
        <p className='marketing-explanation'>
          Benefit from best-in-class analytics to understand your spending
          patterns.
        </p>
        <div className="marketing-image">
          <img src="images/expenses-chart.jpg" alt="A demo bar chart." />
        </div>
      </div>
    </section>
  </main>
);

export default Home;
