import React from "react";
import {
	Box,
	Checkbox,
	FormControlLabel,
	Typography
} from "@mui/material";
import useChecklist from "../hooks/useChecklist";

const styles = {
	header: {
		fontWeight: "900"
	},
	body1: {
		marginBottom: "0.5em",
		fontSize: "1.15em",
	},
};

export default function IntroductionSection() {
	const { freebie, handleFreebie } = useChecklist();

	return (
		<Box>
			<Typography variant="h3" align="left" sx={styles.header}>
				Welcome to the MetaMask Tutorial
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				We're here to help you set up a MetaMask crypto wallet. We'll use a checklist to keep track of
				your progress! Here's a freebie.
			</Typography>
			<Box display="flex" justifyContent="start">
				<FormControlLabel 
					control={<Checkbox checked={freebie} onChange={handleFreebie} />} 
					label="I'm ready to setup my MetaMask crypto wallet!"
				/>
			</Box>
		</Box>
	);
}