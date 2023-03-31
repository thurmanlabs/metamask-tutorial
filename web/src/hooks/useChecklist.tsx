import { useContext } from "react";
import { ChecklistContext } from "../context/ChecklistContext";

export default function useChecklist() {
	const context = useContext(ChecklistContext);

	if (!context) {
	  throw new Error("`useWallet` should be used within a `Provider`");
	}
	return context;
}