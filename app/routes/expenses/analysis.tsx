import { ExpenseStatistics } from "~/components/expense-statistics/expense-statistics";
import { Chart } from "~/components/chart/chart";
import type { ExpenseItem } from "~/types/expenses";

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

const ExpensesAnalysis = () => (
  <main>
    <Chart expenses={expenseList} />
    <ExpenseStatistics expenses={expenseList} />
  </main>
);

export default ExpensesAnalysis;
