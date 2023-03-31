import USDC from "./USDC.json";
import Polemarch from "./Polemarch.json";
import SToken from "./SToken.json";

interface IChainMap {
  [key: string]: {
    name: string;
    etherscanUrl: string;
  };
} 

export const chainMap: IChainMap = {
  "0x1": {
    name: "Ethereum Mainnet",
    etherscanUrl: "https://etherscan.io"
  },
  "0x5": {
    name: "Goerli Testnet",
    etherscanUrl: "https://goerli.etherscan.io"
  }
}

export const USDC_ADDRESS_GOERLI = "0x07865c6e87b9f70255377e024ace6630c1eaa37f";
export const USDC_ADDRESS_MAINNET = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
export const POLEMARCH_ADDRESS_GOERLI = "0x43A2124b5970735d462A6D9ED8CbB956750306Fc";
export const POLEMARCH_ADDRESS_MAINNET = "0x092Cb11b1d114Ed97f57f7A003dc68a13e58FE9f"
export const SUSDC_ADDRESS_GOERLI = "0x91137dD626750751Ec2e66c1F87329738658EE54";
export const SUSDC_ADDRESS_MAINNET = "0x661e2eA95Aa93cd8398C19E8519b2811888Df75d";

export const USDC_DECIMALS = 6;
export const DECIMALS = 18;

interface INetworkContractMap {
  [key: string]: {
    [contract: string]: {
      address: string;
      abi: any;
      decimals: number;
    }
  }
};

export const NetworkContractMap: INetworkContractMap = {
  "0x1": {
    "USDC": {
      address: USDC_ADDRESS_MAINNET,
      abi: USDC.abi,
      decimals: USDC_DECIMALS,
    },
    "Polemarch": {
      address: POLEMARCH_ADDRESS_MAINNET,
      abi: Polemarch.abi,
      decimals: DECIMALS,
    },
    "sUSDC": {
      address: SUSDC_ADDRESS_MAINNET,
      abi: SToken.abi,
      decimals: USDC_DECIMALS,
    },
  },
  "0x5": {
    "USDC": {
      address: USDC_ADDRESS_GOERLI,
      abi: USDC.abi,
      decimals: USDC_DECIMALS,
    },
    "Polemarch": {
      address: POLEMARCH_ADDRESS_GOERLI,
      abi: Polemarch.abi,
      decimals: DECIMALS,
    },
    "sUSDC": {
      address: SUSDC_ADDRESS_GOERLI,
      abi: SToken.abi,
      decimals: USDC_DECIMALS
    },
  }
}