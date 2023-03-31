import React from "react";
import {
	Box,
	Typography
} from "@mui/material";

const styles = {
	header: {
		fontWeight: "bolder"
	},
	body1: {
		marginBottom: "0.5em",
		fontSize: "1.15em",
	},
};

export default function CryptoWalletSection() {
	return (
		<Box>
			<Typography variant="h5" align="left" sx={styles.header}>
				What's the purpose of a "crypto wallet"?
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				Crypto wallets allows users to interact with the blockchain.
				If you're unfamiliar with exactly what a blockchain is, don't worry. We'll explain a bit later.
				Just know that crypto wallets store the private information that's required to access your
				stuff on the blockchain. We'll talk more about what private information it stores soon!
			</Typography>
			<Typography variant="h5" align="left" sx={styles.header}>
				A quick introduction to MetaMask
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				There are different types of crypto-wallets, but today we'll focus on MetaMask!
				“MetaMask is a free web and mobile crypto wallet that lets users to store and swap 
				cryptocurrencies and interact with the Ethereum blockchain ecosystem.” It's one of the most popular
				web-based crypto wallets out there! MetaMask is considerd "self-custodial", meaning that you have complete
				control over your private information and as a by-product complete control over your stuff on the blockchain.
			</Typography>
		</Box>
	);
}