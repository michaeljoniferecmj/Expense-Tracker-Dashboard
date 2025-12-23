import { useState } from "react";
import { CATEGORIES } from "../constants/categories";

function ExpenseItem({ expense, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);

  function handleSave() {
    if (!title || !amount) return;

    onUpdate({
      ...expense,
      title,
      amount: Number(amount),
      category,
    });

    setIsEditing(false);
  }

  return (
    <div className="bg-background p-4 rounded-lg border border-border">
      {isEditing ? (
        <div className="flex flex-col gap-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 rounded-md border border-border outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 rounded-md border border-border outline-none focus:ring-2 focus:ring-primary"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-md border border-border outline-none focus:ring-2 focus:ring-primary"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setIsEditing(false)}
              className="text-sm text-text-muted"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="text-sm font-medium text-primary"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-text font-medium">{expense.title}</h3>
            <p className="text-sm text-text-muted">
              ₱{expense.amount} • {expense.category}• {expense.date}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm text-text-muted hover:text-primary"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(expense.id)}
              className="text-sm text-text-muted hover:text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpenseItem;
