import React, { 
	useCallback, 
	useEffect, 
	useMemo, 
	useReducer 
} from "react";
import { 
	IChecklistContext,
	ChecklistContext,
	initialState, 
} from "../context/ChecklistContext";
import { ChecklistReducer } from "../reducers/ChecklistReducer";
import useMetaMask from "../hooks/useMetaMask";

export default function ChecklistProvider(props: any) {
	const [state, dispatch] = useReducer(ChecklistReducer, initialState);
	const { status, switchChain } = useMetaMask();

	const handleFreebie = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
    	type: "freebie",
    	payload: {
    		freebie: event.target.checked,
    	}
    });
	},[dispatch]);

	const handleCreatedWallet = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
    	type: "createdWallet",
    	payload: {
    		createdWallet: event.target.checked,
    	}
    });
	}, [dispatch]);

	const handleGoerliSwitch = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		await switchChain("0x5");
		dispatch({
			type: "goerliSwitchNetwork",
			payload: {
				goerliSwitchNetwork: true,
			}
		});
	}, [dispatch, switchChain]);



	useEffect(() => {
		if (status === "unavailable") {
			dispatch({
				type: "extensionDownloaded",
				payload: {
					extensionDownloaded: false
				}
			});
		} else {
			dispatch({
				type: "extensionDownloaded",
				payload: {
					extensionDownloaded: true
				}
			});
		}
	}, [status]);

	useEffect(() => {
		if (status === "connected") {
			dispatch({
				type: "connectedWallet",
				payload: {
					connectedWallet: true,
				}
			});
		} else {
			dispatch({
				type: "connectedWallet",
				payload: {
					connectedWallet: false,
				}
			});
		}
	}, [status]);

	const value: IChecklistContext = useMemo(
		() => ({
			...state,
			handleFreebie,
			handleCreatedWallet,
			handleGoerliSwitch
		}),
		[handleFreebie, state, handleCreatedWallet, handleGoerliSwitch]
	);

	return <ChecklistContext.Provider value={value} {...props} />
}