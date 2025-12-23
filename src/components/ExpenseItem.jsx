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
    <div
      className="bg-background dark:bg-gray-900 p-4 rounded-lg border border-border dark:border-gray-700 transition-colors duration-200
"
    >
      {isEditing ? (
        <div className="flex flex-col gap-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 rounded-md
           bg-background dark:bg-gray-900
           text-text dark:text-gray-100
           border border-border dark:border-gray-700
           outline-none focus:ring-2 focus:ring-primary transition-colors duration-200
"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 rounded-md
           bg-background dark:bg-gray-900
           text-text dark:text-gray-100
           border border-border dark:border-gray-700
           outline-none focus:ring-2 focus:ring-primary transition-colors duration-200
"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-md
           bg-background dark:bg-gray-900
           text-text dark:text-gray-100
           border border-border dark:border-gray-700
           outline-none focus:ring-2 focus:ring-primary transition-colors duration-200
"
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
              className="text-sm text-text-muted dark:text-gray-300 hover:text-text dark:hover:text-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="text-sm font-medium text-primary dark:text-blue-400"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-text dark:text-gray-100 font-medium">
              {expense.title}
            </h3>
            <p className="text-sm text-text-muted dark:text-gray-200">
              ₱{expense.amount} • {expense.category} • {expense.date}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm text-text-muted dark:text-gray-100 hover:text-primary dark:hover:text-blue-400"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(expense.id)}
              className="text-sm text-text-muted dark:text-gray-100 hover:text-red-500 dark:hover:text-red-400"
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
