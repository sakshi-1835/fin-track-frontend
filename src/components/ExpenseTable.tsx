import { tableHeaders } from "../config/data";
import type { Expense } from "../types";

type Props = {
  expenses: Expense[];
};

export default function ExpenseTable({ expenses }: Props) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-200">
          <tr>
            {tableHeaders.map((header: string, index: number) => (
              <th key={index} className="p-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id} className="border-t hover:bg-gray-50">
              <td className="p-3">{expense.item}</td>
              <td className="p-3 font-semibold">₹{expense.amount}</td>
              <td className="p-3">{expense.department}</td>
              <td className="p-3">
                {new Date(expense.date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
