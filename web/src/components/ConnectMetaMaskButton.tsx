import React from "react";
import {
  Avatar,
  Box,
  Button,
  Typography,
} from "@mui/material";
import useMetaMask from "../hooks/useMetaMask";
import metamaskIcon from "../images/metamask-icon.png";

const styles = {
  connectButton: {
    fontWeight: "600",
  },
  metamask: {
    width: "1.15em",
    height: "1.15em",
  },
};

export default function ConnectMetaMaskButton() {
  const { account, ethBalance, connect, status } = useMetaMask();

  return (
    <Box>
      {status === "connected" ? (
          <Typography>{account} : {ethBalance}</Typography>
        ) : (
        <Button
          variant="contained"
          startIcon={<Avatar src={metamaskIcon} sx={styles.metamask} />}
          sx={styles.connectButton}
          onClick={connect}
        >
          Connect MetaMask
        </Button>
      )}
    </Box>
  )
}