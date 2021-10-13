const hre = require("hardhat");

async function main() {
  const FMDToken = await ethers.getContractFactory("FMDToken");
  const fmdToken = await FMDToken.deploy();
  await fmdToken.deployed();
  console.log("FMDToken deployed to: ", fmdToken.address);

  const Campaign = await ethers.getContractFactory("Campaign");
  const campaign = await Campaign.deploy(fmdToken.address);
  await campaign.deployed();
  console.log("Campaign deployed to: ", campaign.address);

  saveFrontendFiles(campaign, fmdToken);
}

function saveFrontendFiles(campaign, fmdToken) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../app/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }
  fs.writeFileSync(
    contractsDir + "/token-address.json",
    JSON.stringify({ FMDToken: fmdToken.address }, undefined, 2)
  );

  const FMDTokenArtifact = artifacts.readArtifactSync("FMDToken");

  fs.writeFileSync(
    contractsDir + "/Token.json",
    JSON.stringify(FMDTokenArtifact, undefined, 2)
  );

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
