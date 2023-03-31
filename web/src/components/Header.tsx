import React from "react";
import {
	AppBar,
	Avatar,
	Box,
	Toolbar,
	Typography,
} from "@mui/material";
import metamaskIcon from "../images/metamask-icon.png";

const styles = {
	appBar: {
		background: "#F5F5DC",
		paddingBottom: "0.5em",
		marginBottom: "1.25em",
	},
	font: {
		color: "black",
		fontWeight: "900",
	},
	metamask: {
    marginLeft: "0.25em",
    width: "1.75em",
    height: "1.75em",
  },
}

export default function Header() {
	return (
		<AppBar position="sticky" elevation={0} sx={styles.appBar}>
			<Toolbar variant="dense">
				<Box display="flex" flexGrow={1}>
					<Typography variant="h5" sx={styles.font}>
						MetaMask Tutorial
					</Typography>
					<Avatar src={metamaskIcon} sx={styles.metamask} />
				</Box>
				<Typography variant="h6" sx={styles.font}>
					Powered by Thurman Labs
				</Typography>
			</Toolbar>
		</AppBar>
	);
}