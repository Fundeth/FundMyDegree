const ethers = require("ethers");

export function toEther(val) {
  return ethers.utils.parseEther(val);
}

export function fromWei(val) {
  return ethers.utils.formatEther(val);
}

export function formatAddress(address) {
  return `${address?.substr(0, 4 + 2)}${8 < 42 ? "..." : ""}${address?.substr(
    42 - 4,
    42
  )}`;
}
