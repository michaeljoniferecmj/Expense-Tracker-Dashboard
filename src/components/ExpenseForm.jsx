import { useState } from "react";
import { CATEGORIES } from "../constants/categories";

function ExpenseForm({ onAdd }) {
  const today = new Date().toISOString().split("T")[0];

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [date, setDate] = useState(today);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !amount) return;

    onAdd({
      id: crypto.randomUUID(),
      title,
      amount: Number(amount),
      category,
      date,
    });

    setTitle("");
    setAmount("");
    setCategory(CATEGORIES[0]);
    setDate(today);
  }

  return (
    <div className="bg-background-muted dark:bg-gray-800 p-6 rounded-xl border border-border dark:border-gray-700">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Expense title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 rounded-md
           bg-background dark:bg-gray-900
           text-text dark:text-gray-100
           placeholder-text-muted dark:placeholder-gray-400
           border border-border dark:border-gray-700
           outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-3 rounded-md
           bg-background dark:bg-gray-900
           text-text dark:text-gray-100
           placeholder-text-muted dark:placeholder-gray-400
           border border-border dark:border-gray-700
           outline-none focus:ring-2 focus:ring-primary"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 rounded-md
           bg-background dark:bg-gray-900
           text-text dark:text-gray-100
           placeholder-text-muted dark:placeholder-gray-400
           border border-border dark:border-gray-700
           outline-none focus:ring-2 focus:ring-primary"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 rounded-md
           bg-background dark:bg-gray-900
           text-text dark:text-gray-100
           placeholder-text-muted dark:placeholder-gray-400
           border border-border dark:border-gray-700
           outline-none focus:ring-2 focus:ring-primary cursor-pointer"
        />

        <button
          type="submit"
          className="bg-primary text-white py-3 rounded-md hover:bg-primary-hover"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
