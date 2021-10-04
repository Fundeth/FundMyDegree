const ethers = require("ethers");

export function toEther(val) {
  return ethers.utils.parseEther(val);
}

export function fromWei(val) {
  return ethers.utils.formatEther(val);
}
