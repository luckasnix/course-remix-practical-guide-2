import { Outlet } from "react-router";

import { ExpensesHeader } from "~/components/expenses-header/expenses-header";
import expensesStylesheet from "~/styles/expenses.css?url";
import type { Route } from "./+types/layout";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: expensesStylesheet },
];

export const meta: Route.MetaFunction = ()  => [
  { title: "Expenses" },
  { name: "description", content: "This is the Expenses page!" },
];

const ExpensesLayout = () => (
  <>
    <ExpensesHeader />
    <Outlet />
  </>
);

export default ExpensesLayout;
