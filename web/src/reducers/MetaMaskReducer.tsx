import { MetaMaskState } from "../context/MetaMaskContext";

type ProviderUnavailable = {
	type: "providerUnavailable";
};

type ProviderPermissionRejected = {
	type: "providerPermissionRejected";
};

type AccountNotConnected = {
	type: "accountNotConnected";
	payload: {
		chainId: string;
	}
};

type AccountConnecting = {
	type: "accountConnecting";
	payload: {
		chainId: string;
	};
};

type AccountConnected = {
	type: "accountConnected";
	payload: {
		account: string;
		ethBalance: string | undefined;
		approvedUsdcBalance: string | undefined;
		usdcBalance: string | undefined;
		sUsdcBalance: string | undefined;
		chainId: string;
	};
};

type AccountChanged = {
	type: "accountChanged";
	payload: {
		account: string;
		ethBalance: string | undefined;
		approvedUsdcBalance: string | undefined;
		usdcBalance: string | undefined;
		sUsdcBalance: string | undefined;
		chainId: string;
	};
};

type ChainChanged = {
	type: "chainChanged";
	payload: {
		account: string;
		ethBalance: string | undefined;
		approvedUsdcBalance: string | undefined;
		usdcBalance: string | undefined;
		sUsdcBalance: string | undefined;
		chainId: string;
	};
};

export type ACTION_TYPE = 
	| ProviderUnavailable
	| ProviderPermissionRejected
	| AccountNotConnected
	| AccountConnecting
	| AccountConnected
	| AccountChanged
	| ChainChanged;

export function MetaMaskReducer(state: MetaMaskState, action: ACTION_TYPE): MetaMaskState {
	switch (action.type) {
		case "providerUnavailable": {
			return {
				account: undefined,
				ethBalance: undefined,
				approvedUsdcBalance: undefined,
				usdcBalance: undefined,
				sUsdcBalance: undefined,
				chainId: undefined,
				status: "unavailable",
			};
		}
		case "providerPermissionRejected": {
			if (state.status === "initializing" || state.status === "unavailable") {
				console.warn(
	        `Invalid state transition from "${state.status}" to "connecting". Please, file an issue.`
				);
				return state;
			}
			return {
				...state,
				account: undefined,
				ethBalance: undefined,
				approvedUsdcBalance: undefined,
				usdcBalance: undefined,
				sUsdcBalance: undefined,
				status: "notConnected",
			};
		}
		case "accountNotConnected": {
			return {
				account: undefined,
				ethBalance: undefined,
				approvedUsdcBalance: undefined,
				usdcBalance: undefined,
				sUsdcBalance: undefined,
				chainId: action.payload.chainId,
				status: "notConnected",
			};
		}
		case "accountConnecting": {
			if (state.status === "initializing" || state.status === "unavailable") {
				console.warn(
	        `Invalid state transition from "${state.status}" to "connecting". Please, file an issue.`
				);
				return state;
			}
			return {
				account: undefined,
				ethBalance: undefined,
				approvedUsdcBalance: undefined,
				usdcBalance: undefined,
				sUsdcBalance: undefined,
				chainId: action.payload.chainId,
				status: "connecting",
			};
		}
		case "accountConnected": {
			return {
				...state,
				account: action.payload.account,
				ethBalance: action.payload.ethBalance,
				approvedUsdcBalance: action.payload.approvedUsdcBalance,
				usdcBalance: action.payload.usdcBalance,
				sUsdcBalance: action.payload.sUsdcBalance,
				chainId: action.payload.chainId,
				status: "connected",
			};
		}
		case "accountChanged": {
			if (state.status !== "connected") {
				console.warn(
					`Invalid accounts change in "${state.status}". Please, file an issue`
				);
				return state;
			}
			if (action.payload.account === undefined) {
				return {
					...state,
					account: undefined,
					ethBalance: undefined,
					approvedUsdcBalance: undefined,
					usdcBalance: undefined,
					sUsdcBalance: undefined,
					status: "notConnected",
				};
			}
			return {
				...state,
				account: action.payload.account,
				ethBalance: action.payload.ethBalance,
				approvedUsdcBalance: action.payload.approvedUsdcBalance,
				usdcBalance: action.payload.usdcBalance,
				sUsdcBalance: action.payload.sUsdcBalance,
				chainId: action.payload.chainId,
				status: "connected",
			}
		}
		case "chainChanged": {
			if (state.status === "initializing" || state.status === "unavailable") {
				console.warn(
				  `Invalid chain ID change in "${state.status}". Please, file an issue.`
				);
				return state;
			}
			return {
				...state,
				account: action.payload.account,
				ethBalance: action.payload.ethBalance,
				approvedUsdcBalance: action.payload.approvedUsdcBalance,
				usdcBalance: action.payload.usdcBalance,
				sUsdcBalance: action.payload.sUsdcBalance,
				chainId: action.payload.chainId,
				status: "connected",
			};
		}
		default:
			throw new Error();
	}
}