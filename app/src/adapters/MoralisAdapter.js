import reducer from "../store/reducers/profileReducer";
import reducers from "../store/reducers/index";

const Moralis = require("moralis");

Moralis.initialize("1a1CW4AUd1l3XJcEcawPyY4pHN27llaJo8tWYS7z");
Moralis.serverURL = "https://r8ngt2qrxcrp.bigmoralis.com:2053/server";

export async function getStudentDetailInfo(metamask_id) {
  const params = {
    metamask_id: metamask_id,
  };
  return Moralis.Cloud.run("getStudentDetailInfo", params);
}

export async function insertUserBasic(
  firstName,
  lastName,
  email,
  address1,
  address2,
  city,
  state,
  country,
  postalCode,
  educationLevel,
  website,
  linkedIn,
  portfolio,
  profilePictureDimensions
) {
  const params = {
    metamask_id: "5555555555",
    first_name: firstName,
    last_name: lastName,
    email: email,
    role: "student",
    address_line1: address1,
    address_line2: address2,
    city: city,
    state: state,
    zip_pin: postalCode,
    country: country,
    degree: educationLevel,
    portfolio_link: portfolio,
    linkedIn: linkedIn,
    website: website,
    photo_dimension: profilePictureDimensions,
  };
  return await Moralis.Cloud.run("insertUserBasic", params);
}

export async function getSchoolDetailInfo(metamask_id) {
  const params = {
    metamask_id: metamask_id,
  };
  return Moralis.Cloud.run("getSchoolDetailInfo", params);
}

export async function insertSchool(profile) {
  const params = {
    metamask_id: "7777777777777777",
    first_name: profile.firstName,
    last_name: profile.lastName,
    email: profile.email,
    role: "school",
    address_line1: profile.address1,
    address_line2: profile.address2,
    city: profile.city,
    state: profile.state,
    zip_pin: profile.postalCode,
    country: profile.country,
    degree: profile.educationLevel,
    portfolio_link: profile.portfolio,
    website: profile.website,
    photo_dimension: profile.profilePictureDimensions,
    contact_person: profile.schoolContact,
    contact_person_email: profile.schoolContactEmail,
    contact_person_phone: profile.schoolContactPhone,
    accreditation: profile.schoolAccreditation,
    phone: profile.schoolphone,
  };

  return Moralis.Cloud.run("insertSchool", params);
}

export async function getUser() {
  try {
    const res = await Moralis.Cloud.run("getUser");
    console.log(res);
    return res;
  } catch (err) {
    console.log(`err while getting user ${err}`);
  }
}

export async function uploadCampaign(campaign) {
  const file = new Moralis.File(campaign.id, {
    base64: btoa(JSON.stringify(campaign)),
  });
  return file.saveIPFS();
}

export async function fetchCampaign(ipfsHash) {
  const url = `https://ipfs.moralis.io:2053/ipfs/${ipfsHash}`;
  const response = await fetch(url);
  return response.json();
}

export async function saveCampaignId(campaignId) {
  const params = {
    campaignId: campaignId,
  };
  try {
    const res = await Moralis.Cloud.run("addCampaign", params);
    console.log(res);
    return res;
  } catch (err) {
    console.log(`err while saving campaign id ${err}`);
  }
}
