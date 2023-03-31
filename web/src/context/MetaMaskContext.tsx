import { createContext } from "react";

type MetaMaskInitializing = {
	account: undefined;
	ethBalance: undefined;
	approvedUsdcBalance: undefined;
	usdcBalance: undefined;
	sUsdcBalance: undefined;
	chainId: undefined;
	status: "initializing";
};

type MetaMaskProviderUnavailable = {
	account: undefined;
	ethBalance: undefined;
	approvedUsdcBalance: undefined;
	usdcBalance: undefined;
	sUsdcBalance: undefined;
	chainId: undefined;
	status: "unavailable";
};

type AccountNotConnected = {
	account: undefined;
	ethBalance: undefined;
	approvedUsdcBalance: undefined;
	usdcBalance: undefined;
	sUsdcBalance: undefined;
	chainId: string;
	status: "notConnected";
};

type AccountConnecting = {
	account: undefined;
	ethBalance: undefined;
	approvedUsdcBalance: undefined;
	usdcBalance: undefined;
	sUsdcBalance: undefined;
	chainId: string;
	status: "connecting";
};

type AccountConnected = {
	account: string;
	ethBalance: string | undefined;
	approvedUsdcBalance: string | undefined;
	usdcBalance: string | undefined;
	sUsdcBalance: string | undefined;
	chainId: string;
	status: "connected";
};

export type MetaMaskState = 
	| MetaMaskInitializing
	| MetaMaskProviderUnavailable
	| AccountNotConnected
	| AccountConnecting
	| AccountConnected;

export const initialState: MetaMaskState = {
	account: undefined,
	ethBalance: undefined,
	approvedUsdcBalance: undefined,
	usdcBalance: undefined,
	sUsdcBalance: undefined,
	chainId: undefined,
	status: "initializing",
};

export type IMetaMaskContext = MetaMaskState & {
	connect: () => void;
	update: () => void;
	switchChain: (chainId: string) => void;
};

export const MetaMaskContext = createContext<IMetaMaskContext | undefined>(undefined);