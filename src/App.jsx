import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalAmount from "./components/TotalAmount";
import CategoryBreakdown from "./components/CategoryBreakdown";
import { CATEGORIES } from "./constants/categories";
import MonthlyCategoryTotals from "./components/MonthlyCategoryTotals";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  function addExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function deleteExpense(id) {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  }

  function updateExpense(updatedExpense) {
    setExpenses((prev) =>
      prev.map((item) =>
        item.id === updatedExpense.id ? updatedExpense : item
      )
    );
  }

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className="
  min-h-screen
  bg-background dark:bg-[#0f172a]
  text-text dark:text-gray-100
  px-4 py-10
  transition-colors duration-300
"
      >
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode((prev) => !prev)}
        />

        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1.1fr_1.5fr_1.2fr] gap-6 mt-8">
          {/* LEFT */}
          <ExpenseForm onAdd={addExpense} />

          {/* MIDDLE */}
          <div className="flex flex-col gap-4">
            {/* Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className=" p-3 rounded-md bg-background dark:bg-gray-900 text-text dark:text-gray-100 border border-border dark:border-gray-700 outline-none focus:ring-2 focus:ring-primary"
            >
              <option
                className="bg-background dark:bg-gray-900 text-text dark:text-gray-100"
                value="All"
              >
                All Categories
              </option>

              {CATEGORIES.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                  className="bg-background dark:bg-gray-900 text-text dark:text-gray-100"
                >
                  {cat}
                </option>
              ))}
            </select>

            <ExpenseList
              expenses={filteredExpenses}
              onDelete={deleteExpense}
              onUpdate={updateExpense}
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <MonthlyCategoryTotals expenses={expenses} />
            <CategoryBreakdown expenses={expenses} />
            <TotalAmount total={total} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
