import { ExpenseListItem } from "~/components/expense-list-item/expense-list-item";
import type { ExpenseItem } from "~/types/expenses";

export type ExpenseListProps = {
  expenses: ExpenseItem[];
};

export const ExpenseList = ({ expenses }: ExpenseListProps) => (
  <ol id="expenses-list">
    {expenses.map((expense) => (
      <li key={expense.id}>
        <ExpenseListItem
          id={expense.id}
          title={expense.title}
          amount={expense.amount} />
      </li>
    ))}
  </ol>
);
