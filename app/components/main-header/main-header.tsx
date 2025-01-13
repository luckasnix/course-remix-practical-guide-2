import { Link, NavLink } from "react-router";

import { Logo } from "~/components/logo/logo";

export const MainHeader = () => (
  <header id="main-header">
    <Logo />
    <nav id="main-nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </nav>
    <nav id="cta-nav">
      <ul>
        <li>
          <Link to="/auth" className="cta">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
