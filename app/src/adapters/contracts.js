import campaignAddress from "../contracts/campaign-address.json";
import campaignABI from "../contracts/Campaign.json";
import tokenAddress from "../contracts/token-address.json";
import tokenABI from "../contracts/Token.json";
import { toEther, fromWei } from "../utils/utils";

const ethers = require("ethers");

export async function initContracts() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { chainId } = await provider.getNetwork();
  //if (chainId !== 80001) {
  //  alert("wrong network detected please connect using Polygon Mumbai testnet");
  //}
  let campaignContract = new ethers.Contract(
    campaignAddress.Campaign,
    campaignABI.abi,
    provider.getSigner()
  );
  let tokenContract = new ethers.Contract(
    tokenAddress.FMDToken,
    tokenABI.abi,
    provider.getSigner()
  );
  return { campaignContract, tokenContract };
}

export async function mintFMDToken(contract) {
  console.log(contract);
  return contract.mintOnlyOnceAtWill();
}

export async function createCampaign(
  contract,
  college,
  selectionDeadline,
  verificationDeadline,
  target,
  info
) {
  const tx = await contract.start(
    college,
    selectionDeadline,
    verificationDeadline,
    toEther(target.toString()),
    info
  );

  return tx.wait();
}

export async function getCampaign(contract, student) {
  console.log(`address of student ${student}`);
  return contract.getCampaign(student);
}

export async function donate(contract, student, amount) {
  console.log(`address of student ${student}`);
  const tx = await contract.fund(student, toEther(amount.toString()));

  return tx.wait();
}

export async function disburse(contract, amount) {
  const tx = await contract.setInstallmentAmount(toEther(amount.toString()));

  return tx.wait();
}

export async function withdrawInstallment(contract, student, amount) {
  console.log(`address of student ${student}`);
  const tx = await contract.withdrawInstallment(
    student,
    toEther(amount.toString())
  );

  return tx.wait();
}

export async function balanceOf(contract, address) {
  console.log(`balance of ${address}`);
  contract.balanceOf(address).then((res) => {
    console.log(parseInt(fromWei(res)));
    return res;
  });
}
