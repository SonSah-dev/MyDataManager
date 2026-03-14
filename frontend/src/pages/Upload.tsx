export default function Upload() {
  return (

    <div className="max-w-2xl mx-auto">

      <div className="card">

        <h2 className="text-xl font-semibold text-emerald-700">
          Upload Encrypted Data
        </h2>

        <p className="text-gray-500 mt-1">
          Your data will be encrypted locally before uploading to IPFS.
        </p>

        <input
          className="input mt-6"
          placeholder="Enter text data"
        />

        <input
          type="file"
          className="mt-3"
        />

        <button className="btn-primary mt-6 w-full text-lg py-3">
          Encrypt & Upload
        </button>

      </div>

    </div>
  );
}