function TotalAmount({ total }) {
  return (
    <div
      className="bg-background-muted dark:bg-gray-800 p-6 rounded-xl text-center border border-border dark:border-gray-700 transition-colors duration-200
"
    >
      <p className="text-sm text-text-muted dark:text-gray-300">Total Spent</p>

      <h2 className="mt-1 text-3xl font-bold text-primary dark:text-blue-400">
        ₱{total}
      </h2>
    </div>
  );
}

export default TotalAmount;
