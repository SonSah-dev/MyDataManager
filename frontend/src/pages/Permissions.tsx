export default function Records() {
  return (

    <div className="card">

      <h2 className="text-lg font-semibold text-emerald-700 mb-4">
        Stored Records
      </h2>

      <table className="w-full">

        <thead>
          <tr className="text-left border-b">
            <th>CID</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="py-2 text-gray-600">No data yet</td>
            <td></td>
          </tr>
        </tbody>

      </table>

    </div>

  );
}