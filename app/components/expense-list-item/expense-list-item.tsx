export type ExpenseListItemProps = {
  id: string;
  title: string;
  amount: number;
};

export const ExpenseListItem = ({ id, title, amount }: ExpenseListItemProps) => {
  const deleteExpenseItemHandler = () => {
    console.log('Delete item with id: ', id);
  };

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <a href="tbd">Edit</a>
      </menu>
    </article>
  );
};
