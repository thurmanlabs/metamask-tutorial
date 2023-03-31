import React from "react";
import {
	Box,
	Checkbox,
	FormControlLabel,
	Typography
} from "@mui/material";
import useChecklist from "../hooks/useChecklist";
import ConnectMetaMaskButton from "./ConnectMetaMaskButton";

const styles = {
	header: {
		fontWeight: "bolder"
	},
	body1: {
		marginBottom: "0.5em",
		fontSize: "1.15em",
	},
};

export default function ConnectMetaMaskSection() {
	const { connectedWallet } = useChecklist();

	return (
		<Box>
			<Typography variant="h5" align="left" sx={styles.header}>
				Connecting to your wallet
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				Now, it's time to show off your skills. Connect to your wallet using your password and by accepting
				the website's request to connect!
			</Typography>
			<Box display="flex" justifyContent="start">
				<ConnectMetaMaskButton />
			</Box>
			<Box display="flex" justifyContent="start">
				<FormControlLabel 
					control={<Checkbox checked={connectedWallet} />}
					label="I'm connected to my wallet!"
				/>
			</Box>
		</Box>
	);
}