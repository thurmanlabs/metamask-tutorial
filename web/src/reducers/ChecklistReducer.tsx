type Freebie = {
	type: "freebie";
	payload: {
		freebie: boolean;
	}
}

type ExtensionDownloaded = {
	type: "extensionDownloaded";
	payload: {
		extensionDownloaded: boolean;
	}
}

type CreatedWallet = {
	type: "createdWallet";
	payload: {
		createdWallet: boolean;
	}
}

type ConnectedWallet = {
	type: "connectedWallet";
	payload: {
		connectedWallet: boolean;
	}
}

type GoerliSwitchNetwork = {
	type: "goerliSwitchNetwork";
	payload: {
		goerliSwitchNetwork: boolean;
	}
}

type ChecklistState = {
	freebie: boolean;
	extensionDownloaded: boolean;
	createdWallet: boolean;
	connectedWallet: boolean;
	goerliSwitchNetwork: boolean;
}

export const initialState: ChecklistState = {
	freebie: false,
	extensionDownloaded: false,
	createdWallet: false,
	connectedWallet: false,
	goerliSwitchNetwork: false,
};

export type ACTION_TYPE = 
	| Freebie
	| ExtensionDownloaded
	| CreatedWallet
	| ConnectedWallet
	| GoerliSwitchNetwork;

export function ChecklistReducer(state: ChecklistState, action: ACTION_TYPE): ChecklistState {
	switch (action.type) {
		case "freebie": {
			return {
				...state,
				freebie: action.payload.freebie
			};
		}
		case "extensionDownloaded": {
			return {
				...state,
				extensionDownloaded: action.payload.extensionDownloaded
			}
		}
		case "createdWallet": {
			return {
				...state,
				createdWallet: action.payload.createdWallet
			}
		}
	case "connectedWallet": {
			return {
				...state,
				connectedWallet: action.payload.connectedWallet
			}
		}
		case "goerliSwitchNetwork": {
			return {
				...state,
				goerliSwitchNetwork: action.payload.goerliSwitchNetwork
			}
		}
		default:
			throw new Error();
	}
}