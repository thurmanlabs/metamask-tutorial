import React from "react";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Link,
	Typography
} from "@mui/material";
import useMetaMask from "../hooks/useMetaMask";

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
};

export default function GoerliUsdcSection() {
	const { usdcBalance, update } = useMetaMask();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		update();
	}

	return (
		<Box>
			<Typography variant="h5" align="left" sx={styles.header}>
				Getting Goerli USDC
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				Go to the below website link. Select the "ETH" box. Input your account address, then click submit.
			</Typography>
			<Box display="flex" justifyContent="start">
				<Link href="https://usdcfaucet.com/" target="_blank">USDC Faucet</Link>
			</Box>
			<Box display="flex" justifyContent="start">
				<Button
	        variant="contained"
	        sx={styles.connectButton}
	        onClick={handleClick}
	      >
	      	Check your updated balance
	      </Button>
      </Box>
			<Typography variant="h6" align="left" sx={styles.header}>
				Your Goerli USDC Balance: {usdcBalance}
			</Typography>
			<Box display="flex" justifyContent="start">
				<FormControlLabel 
					control={<Checkbox checked={usdcBalance ? parseFloat(usdcBalance) > 0 : false } />} 
					label="You have some Goerli USDC!"
				/>
			</Box>
		</Box>
	);
}