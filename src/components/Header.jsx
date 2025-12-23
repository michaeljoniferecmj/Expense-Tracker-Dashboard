function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="mb-10 grid grid-cols-3 items-center">
      {/* Left spacer */}
      <div />

      {/* Center title */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Expense Tracker
        </h1>
        <p className="text-text-muted dark:text-gray-400">
          Track your daily spending easily
        </p>
      </div>

      {/* Right toggle */}
      <div className="flex justify-end">
        <button
          onClick={toggleDarkMode}
          className="
            px-4 py-2 rounded-md border border-border dark:border-gray-700
            bg-background dark:bg-gray-800
            text-text dark:text-gray-100
            text-sm
            hover:bg-background-muted dark:hover:bg-gray-700
            transition-colors duration-200
          "
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}

export default Header;
