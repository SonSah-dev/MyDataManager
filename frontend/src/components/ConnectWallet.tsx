import { useWallet } from "../hooks/useWallet";

export function ConnectWallet() {
  const { address, error, connectWallet } = useWallet();

  return (
    <div>
      {!address && (
        <button onClick={connectWallet}>
          Connect MetaMask
        </button>
      )}

      {address && (
        <p>Connected as: {address}</p>
      )}

      {error && (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </div>
  );
}
