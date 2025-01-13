import { NavLink } from "react-router";

import { Logo } from "~/components/logo/logo";

export const ExpensesHeader = () => (
  <header id="main-header">
    <Logo />
    <nav id="main-nav">
      <ul>
        <li>
          <NavLink to="/expenses" end>
            Manage Expenses
          </NavLink>
        </li>
        <li>
          <NavLink to="/expenses/analysis">Analyze Expenses</NavLink>
        </li>
      </ul>
    </nav>
    <nav id="cta-nav">
      <button className="cta">Logout</button>
    </nav>
  </header>
);
