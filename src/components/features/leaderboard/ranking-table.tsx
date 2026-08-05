function RankingTable() {
  return (
    <table className="text-left">
      <thead>
        <tr className="border-b border-(--border-dark)">
          <th className="py-2 text-sm text-(--text-light) font-light">#</th>
          <th className="py-2 text-sm text-(--text-light) font-light">
            Player
          </th>
          <th className="py-2 text-sm text-(--text-light) font-light">
            Points
          </th>
          <th className="py-2 text-sm text-(--text-light) font-light">Wins</th>
          <th className="py-2 text-sm text-(--text-light) font-light">7d</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 15 }, (_, i) => (
          <tr key={i} className="border-b border-(--border-dark)">
            <td className="py-2 text-sm text-(--text-light) font-light">1</td>
            <td className="py-2 text-sm text-(--text) font-light">Eclipse</td>
            <td className="py-2 text-sm text-(--text) font-semibold">2000</td>
            <td className="py-2 text-sm text-(--text-light) font-light">152</td>
            <td className="py-2 text-sm text-(--text-light) font-light">5</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default RankingTable;
