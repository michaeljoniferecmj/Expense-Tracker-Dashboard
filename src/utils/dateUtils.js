export function getMonthKey(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
}

export function getLatestMonth(expenses) {
  if (expenses.length === 0) return null;

  return expenses
    .map((e) => new Date(e.date))
    .sort((a, b) => b - a)[0]
    .toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
}
