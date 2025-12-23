function TotalAmount({ total }) {
  return (
    <div className="bg-background-muted p-6 rounded-xl text-center border border-border">
      <p className="text-sm text-text-muted">Total Spent</p>
      <h2 className="mt-1 text-3xl font-bold text-primary">₱{total}</h2>
    </div>
  );
}

export default TotalAmount;
