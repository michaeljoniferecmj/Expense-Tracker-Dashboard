function CategoryBreakdown({ expenses }) {
  const totalsByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const categories = Object.entries(totalsByCategory);

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="bg-background-muted dark:bg-gray-800 p-6 rounded-xl border border-border dark:border-gray-700">
      <h3 className="text-text dark:text-gray-100 font-semibold mb-4">
        Category Breakdown
      </h3>

      <div className="flex flex-col gap-2">
        {categories.map(([category, total]) => (
          <div key={category} className="flex justify-between text-sm">
            <span className="text-text-muted dark:text-gray-300">
              {category}
            </span>

            <span className="font-medium text-text dark:text-gray-100">
              ₱{total}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryBreakdown;
