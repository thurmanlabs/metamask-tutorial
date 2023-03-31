import {
  ethers,
  formatEther,
  formatUnits,
  BigNumberish,
  Contract,
  Provider,
} from "ethers";
import { 
  USDC_DECIMALS, 
  NetworkContractMap 
} from "../constants/constants";

export type ErrorWithCode = {
  code: number;
  [key: string]: any;
};

export const ERROR_CODE_REQUEST_PENDING = -32002;

type AccountBalances = {
  ethBalance: string | undefined;
  approvedUsdcBalance: string | undefined;
  usdcBalance: string | undefined;
  sUsdcBalance: string | undefined;
}

export const getAccountBalances = async (account: string, chainId: string, provider: Provider): Promise<AccountBalances> => {
  let approvedUsdcBalance;
  let sUsdcBalance;
  const ethBalance = await provider.getBalance(account).then((num: BigNumberish) => formatEther(num));
  const usdc: Contract = new ethers.Contract(
    NetworkContractMap[chainId]["USDC"].address,
    NetworkContractMap[chainId]["USDC"].abi,
    provider,
  );
  const usdcBalance = await usdc.balanceOf(account)
    .then((num: BigNumberish) => formatUnits(num, USDC_DECIMALS));

  if (NetworkContractMap[chainId]["Polemarch"]?.address) {
    approvedUsdcBalance = await usdc.allowance(
      account,
      NetworkContractMap[chainId]["Polemarch"].address
    ).then((num: BigNumberish) => formatUnits(num, USDC_DECIMALS));
  }

  if (NetworkContractMap[chainId]["sUSDC"]?.address && NetworkContractMap[chainId]["sUSDC"]?.abi) {
    const sUsdc = new ethers.Contract(
      NetworkContractMap[chainId]["sUSDC"].address,
      NetworkContractMap[chainId]["sUSDC"].abi,
      provider
    );
    sUsdcBalance = await sUsdc.balanceOf(account)
      .then((num: BigNumberish) => formatUnits(num, USDC_DECIMALS));
  }

  return Promise.resolve({
    ethBalance,
    approvedUsdcBalance,
    usdcBalance,
    sUsdcBalance
  });
}