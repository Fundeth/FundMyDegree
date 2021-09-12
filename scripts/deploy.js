const hre = require("hardhat");

async function main() {
  const tokenAddress = "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada"
  const Campaign = await ethers.getContractFactory("Campaign");
  const campaign = await Campaign.deploy(tokenAddress);
  await campaign.deployed();
  console.log("Campaign deployed to: ", campaign.address);

  saveFrontendFiles(campaign);

}

function saveFrontendFiles(campaign) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../app/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/campaign-address.json",
    JSON.stringify({ Campaign: campaign.address }, undefined, 2)
  );

  const CampaignArtifact = artifacts.readArtifactSync("Campaign");

  fs.writeFileSync(
    contractsDir + "/Campaign.json",
    JSON.stringify(CampaignArtifact, undefined, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
