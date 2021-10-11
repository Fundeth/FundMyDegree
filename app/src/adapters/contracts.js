import campaignAddress from "../contracts/campaign-address.json";
import campaignABI from "../contracts/Campaign.json";
import { toEther } from "../utils/utils";

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
  return { campaignContract };
}

export async function createCampaign(
  contract,
  college,
  selectionDeadline,
  verificationDeadline,
  target,
  info
) {
  console.log(selectionDeadline);
  console.log(verificationDeadline);
  console.log(`info ${info}`);

  const tx = await contract.start(
    college,
    selectionDeadline,
    verificationDeadline,
    toEther(target.toString()),
    info
  );

  return tx.wait();
}

export async function healthCheck(contract) {
  const health = await contract.health();
  return health;
}

export async function getCampaign(contract, campaignId) {
  console.log(`campaignId ${campaignId}`);
  return contract.getCampaign(campaignId);
}
