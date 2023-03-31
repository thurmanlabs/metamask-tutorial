import React from "react";
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Typography
} from "@mui/material";
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

export default function DownloadSection() {
	// might need to set up a separate state that checks for metamask to update the providerUnavailable state
	// without reload
	const { extensionDownloaded } = useChecklist();
	console.log("extensionDownloaded: ", extensionDownloaded);


	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		window.open("https://metamask.io/", "_blank");
	}

	return (
		<Box>
			<Typography variant="h5" align="left" sx={styles.header}>
				Downloading the MetaMask Browser Extension
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				Before you can setup your MetaMask crypto wallet, you have to download the browser extension.
				If you've already downloaded the extension, this is another freebie for your checklist. If not,
				you'll need to head over to the MetaMask website and hit the "Download" button.
			</Typography>
			<Box display="flex" justifyContent="start">
				<FormControlLabel 
					control={<Checkbox checked={extensionDownloaded} />} 
					label="I have the MetaMask Browser Extension downloaded!"
				/>
			</Box>
			{!extensionDownloaded && (
				<Box display="flex" justifyContent="start">
					<Button variant="contained"
          	startIcon={<Avatar src={metamaskIcon} sx={styles.metamask} />}
          	sx={styles.connectButton}
          	onClick={handleClick}
          >
						MetaMask Website
					</Button>
				</Box>
			)}
		</Box>
	);
}