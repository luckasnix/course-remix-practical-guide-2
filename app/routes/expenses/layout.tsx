import { Outlet } from "react-router";

import { ExpenseList } from "~/components/expense-list/expense-list";
import expensesStylesheet from "~/styles/expenses.css?url";
import type { ExpenseItem } from "~/types/expenses";
import type { Route } from "./+types/layout";

const expenseList: ExpenseItem[] = [
  {
    id: "1",
    title: "Groceries",
    amount: 100,
    date: "2024-03-01",
  },
  {
    id: "2",
    title: "Transportation",
    amount: 250,
    date: "2024-06-02",
  },
  {
    id: "3",
    title: "Rent",
    amount: 1000,
    date: "2024-07-03",
  }
];

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: expensesStylesheet },
];

export const meta: Route.MetaFunction = ()  => [
  { title: "Expenses" },
  { name: "description", content: "This is the Expenses page!" },
];

const ExpensesLayout = () => (
  <main>
    <ExpenseList expenses={expenseList} />
    <Outlet />
  </main>
);

export default ExpensesLayout;
