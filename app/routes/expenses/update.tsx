import { useNavigate } from "react-router";

import { Modal } from "~/components/modal/modal";
import { ExpenseForm } from "~/components/expense-form/expense-form";
import type { Route } from "./+types/update";

const ExpensesUpdate = ({ params }: Route.ComponentProps) => {
  const navigate = useNavigate();

  console.log(params.id);

  return (
    <Modal onClose={() => {
      navigate("/expenses");
    }}>
      <ExpenseForm />
    </Modal>
  );
};

export default ExpensesUpdate;
