import WalletBalance from "./components/WalletBalance";

const App = () => {
  return (
    <div>
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <main>
        <section>
          <h2>Wallet Balance</h2>
          <WalletBalance />
        </section>
        <section>
          <h2>Add Expense</h2>
          {/* Add expense form component here */}
        </section>
        <section>
          <h2>Expense List</h2>
          {/* Add expense list component here */}
        </section>
        <section>
          <h2>Summary</h2>
          {/* Add summary component here */}
        </section>
      </main>
    </div>
  );
};

export default App;
// Header
// Wallet Balance: Track the available balance.
// Add Expense Form: Allow users to add expenses.
// Expense List: Display all expenses.
// Edit/Delete Expenses: Modify or remove an expense.
// Summary: Show total expenses in charts.
