import { useContext } from "react";
import { MetaMaskContext } from "../context/MetaMaskContext";

export default function useMetaMask() {
	const context = useContext(MetaMaskContext);

	if (!context) {
	  throw new Error("`useWallet` should be used within a `Provider`");
	}
	return context;
}