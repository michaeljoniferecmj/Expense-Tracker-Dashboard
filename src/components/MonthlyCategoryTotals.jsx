import { getMonthKey, getLatestMonth } from "../utils/dateUtils";

function MonthlyCategoryTotals({ expenses }) {
  const activeMonth = getLatestMonth(expenses);

  if (!activeMonth) return null;

  const monthlyExpenses = expenses.filter(
    (e) => getMonthKey(e.date) === activeMonth
  );

  const totals = monthlyExpenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div className="bg-background-muted p-6 rounded-xl border border-border">
      <h3 className="text-text font-semibold mb-1">{activeMonth}</h3>
      <p className="text-sm text-text-muted mb-4">Monthly Category Totals</p>

      <div className="flex flex-col gap-2">
        {Object.entries(totals).map(([category, total]) => (
          <div key={category} className="flex justify-between text-sm">
            <span className="text-text-muted">{category}</span>
            <span className="font-medium text-text">₱{total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthlyCategoryTotals;
