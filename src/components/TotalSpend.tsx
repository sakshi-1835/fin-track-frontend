type Props = {
  total: number;
};

export default function TotalSpend({ total }: Props) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6">
      <p className="text-gray-500">Total Company Spend</p>

      <h2 className="text-3xl font-bold text-green-600">
        ₹{total}
      </h2>
    </div>
  );
}