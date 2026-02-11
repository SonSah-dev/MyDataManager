import { useState } from "react";
import { ethers } from "ethers";
import type { MetaMaskInpageProvider } from "@metamask/providers";

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function connectWallet() {
    try {
      const ethereum = window.ethereum as MetaMaskInpageProvider | undefined;

      if (!ethereum) {
        throw new Error("MetaMask is not installed");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      }) as string[];

      const browserProvider = new ethers.BrowserProvider(ethereum);
      const walletSigner = await browserProvider.getSigner();

      setProvider(browserProvider);
      setSigner(walletSigner);
      setAddress(accounts[0]);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  }

  return { address, provider, signer, error, connectWallet };
}
