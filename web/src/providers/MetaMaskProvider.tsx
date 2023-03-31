import React, { 
	useEffect, 
	useReducer,
	useCallback,
	useMemo 
} from "react";
import { ethers } from "ethers";
import {
	IMetaMaskContext,
	MetaMaskContext,
	initialState,
} from "../context/MetaMaskContext";
import { 
	ACTION_TYPE, 
	MetaMaskReducer 
} from "../reducers/MetaMaskReducer";
import { 
	getAccountBalances, 
	ErrorWithCode, 
	ERROR_CODE_REQUEST_PENDING 
} from "../helpers/helpers";

const synchronize = async (dispatch: (action: ACTION_TYPE) => void) => {
	const { ethereum } = window;
	const isMetaMaskAvailable = Boolean(ethereum) && ethereum?.isMetaMask;
	if (!isMetaMaskAvailable) {
		dispatch({type: "providerUnavailable"});
		return;
	}

	const provider = new ethers.BrowserProvider(ethereum as any);
	const chainId: string = await provider.send("eth_chainId", []);
	const accounts: string[] = await provider.send("eth_accounts", []);

	if (accounts.length === 0) {
		dispatch({
			type: "accountNotConnected",
			payload: {
				chainId
			}
		});
	} else {
		const { 
			ethBalance, 
			approvedUsdcBalance,
			usdcBalance,
			sUsdcBalance
		} = await getAccountBalances(accounts[0], chainId, provider);

		dispatch({
			type: "accountConnected",
			payload: {
				account: accounts[0],
				ethBalance: ethBalance,
				approvedUsdcBalance: approvedUsdcBalance,
				usdcBalance: usdcBalance,
				sUsdcBalance: sUsdcBalance,
				chainId: chainId
			}
		});
	}
}

const requestAccounts = async (dispatch: (action: ACTION_TYPE) => void) => {
	const { ethereum } = window;
	const provider = new ethers.BrowserProvider(ethereum as any);
	const chainId: string = await provider.send("eth_chainId", []);
	dispatch({
		type: "accountConnecting",
		payload: { 
			chainId
		}
	});

	await provider.send("eth_requestAccounts", [])
		.then( async (accounts) => {
			const { 
				ethBalance, 
				approvedUsdcBalance,
				usdcBalance,
				sUsdcBalance
			} = await getAccountBalances(accounts[0], chainId, provider);
			dispatch({
				type: "accountConnected",
				payload: {
					account: accounts[0],
					ethBalance: ethBalance,
					approvedUsdcBalance: approvedUsdcBalance,
					usdcBalance: usdcBalance,
					sUsdcBalance: sUsdcBalance,
					chainId: chainId
				}
			});
		})
		.catch((err: unknown) => {
			if ("code" in (err as { [key: string]: any })) {
			  if ((err as ErrorWithCode).code === ERROR_CODE_REQUEST_PENDING)
			    return;
			}
			dispatch({ type: "providerPermissionRejected" });
		});
}

const requestSwitchChain = async (chainId: string, dispatch: (action: ACTION_TYPE) => void) => {
	const { ethereum } = window;
	const provider = new ethers.BrowserProvider(ethereum as any);
	await provider.send(
		"wallet_switchEthereumChain",
		[{ chainId: chainId }],
	);

	const currentChainId: string = await provider.send("eth_chainId", []);
	const accounts: string[] = await provider.send("eth_accounts", []);
	if (chainId === currentChainId) {
		const { 
				ethBalance, 
				approvedUsdcBalance,
				usdcBalance,
				sUsdcBalance
			} = await getAccountBalances(accounts[0], chainId, provider);
			dispatch({
			type: "chainChanged",
			payload: {
				account: accounts[0],
				ethBalance: ethBalance,
				approvedUsdcBalance: approvedUsdcBalance,
				usdcBalance: usdcBalance,
				sUsdcBalance: sUsdcBalance,
				chainId: chainId
			}
		});
	}
}

export default function MetaMaskProvider(props: any) {
	const { ethereum } = window;
	const [state, dispatch] = useReducer(MetaMaskReducer, initialState);

	const { status } = state;

	const isInitializing = status === "initializing";
	useEffect(() => {
		if (isInitializing) {
			synchronize(dispatch);
		}
	}, [dispatch, isInitializing]);

	ethereum?.on("accountsChanged", (_accounts) => synchronize(dispatch));
	ethereum?.on("chainChanged", (_accounts) => synchronize(dispatch));

	const isAvailable = status !== "unavailable" && status !== "initializing";

	const connect = useCallback(() => {
	  if (!isAvailable) {
	    console.warn(
	      "`enable` method has been called while MetaMask is not available or synchronising. Nothing will be done in this case."
	    );
	  }
	  requestAccounts(dispatch);
	}, [dispatch, isAvailable]);

	const update = useCallback(() => {
		if (!isAvailable) {
		  console.warn(
		    "`enable` method has been called while MetaMask is not available or synchronising. Nothing will be done in this case."
		  );
		}
		synchronize(dispatch);
	}, [dispatch, isAvailable]);

	
	const isConnected = status === "connected";
	const switchChain = useCallback((chainId: string) => {
		if (!isConnected) {
			console.warn(
			"`enable` method has been called while MetaMask is not connected. Nothing will be done in this case."
			);
		}
		requestSwitchChain(chainId, dispatch);
	}, [dispatch, isConnected])

	const value: IMetaMaskContext = useMemo(
		() => ({
			...state,
			connect,
			update,
			switchChain
		}),
		[connect, state, update, switchChain]
	);
	return <MetaMaskContext.Provider value={value} {...props} />
}


