import ExpenseItem from "./ExpenseItem";

function groupByMonth(expenses) {
  return expenses.reduce((groups, expense) => {
    const date = new Date(expense.date);
    const monthKey = date.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    if (!groups[monthKey]) {
      groups[monthKey] = [];
    }

    groups[monthKey].push(expense);
    return groups;
  }, {});
}

function ExpenseList({ expenses, onDelete, onUpdate }) {
  if (expenses.length === 0) {
    return (
      <div className="bg-background-muted p-6 rounded-xl border border-border text-center text-text-muted">
        No expenses found
      </div>
    );
  }

  const groupedExpenses = groupByMonth(expenses);

  return (
    <div className="bg-background-muted rounded-xl border border-border p-4">
      <div className="lg:max-h-[520px] overflow-y-auto pr-1 space-y-6">
        {Object.entries(groupedExpenses).map(([month, items]) => (
          <div key={month}>
            <h3 className="text-sm font-semibold text-text-muted mb-3">
              {month}
            </h3>

            <div className="flex flex-col gap-3">
              {items.map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  expense={expense}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
