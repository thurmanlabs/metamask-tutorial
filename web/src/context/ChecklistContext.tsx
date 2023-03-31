import React, { createContext } from "react";

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

export type IChecklistContext = ChecklistState & {
	handleFreebie: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleCreatedWallet: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleGoerliSwitch: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ChecklistContext = createContext<IChecklistContext | undefined>(undefined);