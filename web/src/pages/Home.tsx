import React from "react";
import { Container } from "@mui/material";
import IntroductionSection from "../components/IntroductionSection";
import CryptoWalletSection from "../components/CryptoWalletSection";
import DownloadSection from "../components/DownloadSection";
import SetupWalletSection from "../components/SetupWalletSection";
import ConnectMetaMaskSection from "../components/ConnectMetaMaskSection";
import SwithChainSection from "../components/SwitchChainSection";
import GoerliUsdcSection from "../components/GoerliUsdcSection";

export default function Home() {
	return (
		<Container maxWidth="md">
			<IntroductionSection />
			<CryptoWalletSection />
			<DownloadSection />
			<SetupWalletSection />
			<ConnectMetaMaskSection />
			<SwithChainSection />
			<GoerliUsdcSection />
		</Container>
	);
}