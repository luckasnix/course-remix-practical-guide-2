import { useNavigate } from "react-router";

import { Modal } from "~/components/modal/modal";
import { ExpenseForm } from "~/components/expense-form/expense-form";

const ExpensesAddition = () => {
  const navigate = useNavigate();

  return (
    <Modal onClose={() => {
      navigate("/expenses");
    }}>
      <ExpenseForm />
    </Modal>
  );
};

export default ExpensesAddition;
