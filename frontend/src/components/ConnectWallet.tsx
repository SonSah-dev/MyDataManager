import { useWallet } from "../hooks/useWallet";

export default function ConnectWallet() {
  const { address, connectWallet, error } = useWallet();

  const shorten = (addr: string) =>
    addr.slice(0, 6) + "..." + addr.slice(-4);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
  };

  if (!address) {
    return (
      <button
        onClick={connectWallet}
        className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
      >
        Connect Wallet
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-emerald-100 px-4 py-2 rounded-full">

      <span className="w-2 h-2 bg-green-500 rounded-full"></span>

      <span className="text-sm font-medium">
        {shorten(address)}
      </span>

      <button
        onClick={copyAddress}
        className="text-xs text-gray-600 hover:text-black"
      >
        Copy
      </button>

      {error && (
        <span className="text-red-500 text-xs">{error}</span>
      )}

    </div>
  );
}