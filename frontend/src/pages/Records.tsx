export default function Records() {

  const records = [];

  return (
    <div>

      <h2 className="text-xl font-semibold mb-6 text-emerald-700">
        Stored Records
      </h2>

      {records.length === 0 && (
        <div className="card text-gray-500">
          No encrypted data stored yet
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">

        {records.map((cid, index) => (
          <div key={index} className="card">

            <p className="text-sm text-gray-500">
              IPFS CID
            </p>

            <p className="font-mono break-all">
              {cid}
            </p>

            <button className="mt-3 text-emerald-600 text-sm">
              View on IPFS
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}