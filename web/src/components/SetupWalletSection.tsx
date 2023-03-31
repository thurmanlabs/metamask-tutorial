import React from "react";
import {
	Avatar,
	Box,
	Checkbox,
	FormControlLabel,
	Typography
} from "@mui/material";
import useChecklist from "../hooks/useChecklist";
import createNewWallet from "../images/metamask-screenshots/create-new-wallet.png";
import createPassword from "../images/metamask-screenshots/create-password.png";
import secureWallet from "../images/metamask-screenshots/secure-wallet-recommended.png";
import writeSrp from "../images/metamask-screenshots/write-down-srp.png";
import confirmSrp from "../images/metamask-screenshots/confirm-srp.png";
import accountPage from "../images/metamask-screenshots/account-page.png";

const styles = {
	header: {
		fontWeight: "900"
	},
	body1: {
		marginBottom: "0.5em",
		fontSize: "1.15em",
	},
	avatar: {
		width: "20em",
		height: "20em",
	},
	rectangleAvatar: {
		width: "20em",
		height: "25em",
	},
	wideAvatar: {
		width: "35em",
		height: "35em",
	},
};

export default function SetupWalletSection() {
	const { createdWallet, handleCreatedWallet } = useChecklist();

	return (
		<Box>
			<Typography variant="h4" align="left" sx={styles.header}>
				Setting up your MetaMask crypto wallet
			</Typography>
			<Typography variant="h5" align="left" sx={styles.header}>
				Step 0: Create a new wallet
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				Your starting point should look something like the below image. Click 
				"Create a new wallet".
			</Typography>
			<Avatar src={createNewWallet} variant="square" sx={styles.avatar} />
			<Typography variant="h5" align="left" sx={styles.header}>
				Step 0.1: Help MetaMask improve
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				You can read this prompt and decide whether to agree or disagree. You're basically
				giving MetaMask the right to some data points to help them make the product better.
			</Typography>
			<Typography variant="h5" align="left" sx={styles.header}>
				Step 1: Create a password
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				Now, it's time to create a password. Be mindful that you're responsible for remembering this password.
				Save it on a piece of paper in a safe place or in a password manager.
			</Typography>
			<Avatar src={createPassword} variant="square" sx={styles.avatar} />
			<Typography variant="h5" align="left" sx={styles.header}>
				Step 2: Secure your wallet
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				Remember we mentioned that "private information stuff"? Your "secret recovery phrase" is the foundation to
				all of your private stuff. Make sure we save it somewhere safe like where you stored your password. If you lose this
				phrase, you lose the ability to access your crypto wallet. Keep this phrase private and don't share it with others!
				Go ahead and click "Secure my wallet (recommended)".
			</Typography>
			<Avatar src={secureWallet} variant="square" sx={styles.rectangleAvatar} />
			<Typography variant="h6" align="left" sx={styles.header}>
				Step 2.1: Write down your Secret Recovery Phrase
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				Click "Reveal Secret Recovery Phrase". Write that bad boy down somewhere safe!
			</Typography>
			<Avatar src={writeSrp} variant="square" sx={styles.rectangleAvatar} />
			<Typography variant="h6" align="left" sx={styles.header}>
				Step 3: Confirm  Secret Recovery Phrase
			</Typography>
			<Typography variant="body1" align="left" sx={styles.body1}>
				Pretty simple. Fill in the blanks and show that you know your Secret Recovery Phrase!
			</Typography>
			<Avatar src={confirmSrp} variant="square" sx={styles.avatar} />
			<Typography variant="h5" align="left" sx={styles.header}>
				You're done! Now you should be able to see an account page like the one below 🎉
			</Typography>
			<Avatar src={accountPage} variant="square" sx={styles.wideAvatar} />
			<Box display="flex" justifyContent="start">
				<FormControlLabel 
					control={<Checkbox checked={createdWallet} onChange={handleCreatedWallet} />} 
					label="I created my wallet!"
				/>
			</Box>
		</Box>
	);
}