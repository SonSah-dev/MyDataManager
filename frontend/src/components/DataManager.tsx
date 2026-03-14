import ConnectWallet from "./ConnectWallet";

export default function DataManager() {
  return (

    <div className="grid grid-cols-2 gap-8">

      {/* Wallet Card */}

      <div className="col-span-2 bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-gray-800">

        <h2 className="text-xl mb-3 text-primary">
          Wallet Status
        </h2>

        <ConnectWallet />

        <span className="text-sm text-accent">
          Network: Sepolia
        </span>

      </div>


      {/* Upload Card */}

      <div className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-gray-800">

        <h2 className="text-xl mb-4 text-primary">
          Upload Data
        </h2>

        <input
          className="w-full p-3 rounded bg-gray-900 border border-gray-700 mb-3"
          placeholder="Enter text data"
        />

        <input
          type="file"
          className="mb-4"
        />

        <button className="bg-primary px-5 py-2 rounded hover:bg-emerald-600">
          Encrypt & Upload
        </button>

      </div>


      {/* Stored Data */}

      <div className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-gray-800">

        <h2 className="text-xl mb-4 text-primary">
          Stored Records
        </h2>

        <p className="text-gray-400">
          No records yet
        </p>

      </div>


      {/* Permissions */}

      <div className="col-span-2 bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-gray-800">

        <h2 className="text-xl mb-4 text-primary">
          Access Permissions
        </h2>

        <input
          className="w-full p-3 rounded bg-gray-900 border border-gray-700 mb-4"
          placeholder="Service wallet address"
        />

        <button className="bg-primary px-5 py-2 rounded mr-3">
          Grant Access
        </button>

        <button className="bg-accent text-black px-5 py-2 rounded">
          Revoke
        </button>

      </div>

    </div>
  );
}