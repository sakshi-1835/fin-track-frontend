import { useEffect, useState } from "react";
import Header from "./components/Header";
import TotalSpend from "./components/TotalSpend";
import ExpenseTable from "./components/ExpenseTable";
import type { Expense } from "./types";

function App() {

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [department, setDepartment] = useState("All");

   const fetchExpenses = async () => {
    const res = await fetch("https://fin-track-backend-1.onrender.com/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();

    const interval = setInterval(fetchExpenses, 1000);
    return () => clearInterval(interval);
  }, []);

  const filtered =
    department === "All"
      ? expenses
      : expenses.filter((e) => e.department === department);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <Header />

      <TotalSpend total={total} />

      <select
        className="border rounded-lg p-2 mb-6"
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="Sales">Sales</option>
        <option value="Engineering">Engineering</option>
        <option value="HR">HR</option>
        <option value="Ops">Ops</option>
      </select>

      <ExpenseTable expenses={filtered} />

    </div>
  );
}

export default App;