import React from "react";
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Typography
} from "@mui/material";
import useMetaMask from "../hooks/useMetaMask";
import useChecklist from "../hooks/useChecklist";
import metamaskIcon from "../images/metamask-icon.png";

const styles = {
  connectButton: {
    fontWeight: "600",
  },
  header: {
		fontWeight: "bolder"
	},
	body1: {
		marginBottom: "0.5em",
		fontSize: "1.15em",
	},
  metamask: {
    width: "1.15em",
    height: "1.15em",
  },
};

export default function SwitchChainSection() {
	const { chainId } = useMetaMask();
	const { handleGoerliSwitch, goerliSwitchNetwork, connectedWallet } = useChecklist();

	return (
		<Box>
			<Typography variant="h5" align="left" sx={styles.header}>
				Switching networks using MetaMask
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				Networks can be looked at as different "versions" of the Ethereum Blockchain. Each version has a unique purpose.
				Some versions are used purely by developers during the building stage of blockchain applications. 
				Other versions are used for testing with real users prior to launching onto the main network with real funds. These are called 
				"test networks". One of the most popular test networks is the Goerli Network. We're about to switch from the Main Network
				to Goerli!
			</Typography>
			<Typography variant="h6" align="left" sx={styles.header}>
				Switching to the Goerli Network using MetaMask
			</Typography>
			<Box display="flex" justifyContent="start">
				<Button
				  variant="contained"
				  startIcon={<Avatar src={metamaskIcon} sx={styles.metamask} />}
				  sx={styles.connectButton}
				  onClick={handleGoerliSwitch}
				  disabled={chainId === "0x5" || !connectedWallet}
				>
				  Switch to Goerli Network
				</Button>
			</Box>
			<Box display="flex" justifyContent="start">
				<FormControlLabel 
					control={<Checkbox checked={goerliSwitchNetwork} />} 
					label="I switched to the Goerli Test Network!"
				/>
			</Box>
		</Box>
	);
}