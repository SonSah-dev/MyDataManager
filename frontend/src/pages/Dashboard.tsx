export default function Dashboard({ goToUpload }: { goToUpload: () => void }) {
  return (
    <div className="space-y-8">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold">Welcome to MyData Manager</h1>
        <p className="mt-2 opacity-90">
          Securely encrypt and store personal data using blockchain and IPFS.
        </p>
        <button
          onClick={goToUpload}
          className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition"
        >
          Upload Data
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card text-center">
          <p className="text-gray-500">Stored Records</p>
          <p className="text-3xl font-bold text-emerald-600">0</p>
        </div>
        <div className="card text-center">
          <p className="text-gray-500">Encryption</p>
          <p className="text-3xl font-bold text-teal-600">AES-256</p>
        </div>
        <div className="card text-center">
          <p className="text-gray-500">Network</p>
          <p className="text-3xl font-bold text-yellow-500">Sepolia</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="card">
        <h2 className="text-lg font-semibold text-emerald-700 mb-4">
          Recent Activity
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li className="flex justify-between">
            <span>Encrypted file uploaded</span>
            <span className="text-sm text-gray-400">Just now</span>
          </li>
          <li className="flex justify-between">
            <span>Access granted to service</span>
            <span className="text-sm text-gray-400">1h ago</span>
          </li>
          <li className="flex justify-between">
            <span>Data stored on IPFS</span>
            <span className="text-sm text-gray-400">Yesterday</span>
          </li>
        </ul>
      </div>

    </div>
  );
}