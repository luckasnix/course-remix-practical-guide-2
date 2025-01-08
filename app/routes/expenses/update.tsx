import type { Route } from "./+types/update";

const ExpensesUpdate = ({ params }: Route.ComponentProps) => (
  <main>
    <h1>Expenses Update</h1>
    <h2>Expense ID: {params.id}</h2>
  </main>
);

export default ExpensesUpdate;
