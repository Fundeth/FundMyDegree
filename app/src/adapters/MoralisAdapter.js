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
  cropped_pic
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
    cropped_pic: cropped_pic,
  };
  return await Moralis.Cloud.run("insertUserBasic", params);
}

export async function getSchoolDetailInfo(metamask_id) {
  const params = {
    metamask_id: metamask_id,
  };
  return Moralis.Cloud.run("getSchoolDetailInfo", params);
}

export async function insertSchool(
  firstName,
  website,
  email,
  schoolphone,
  address1,
  address2,
  city,
  state,
  country,
  postalCode,
  schoolContact,
  schoolContactEmail,
  schoolContactPhone,
  accreditation
) {
  const params = {
    metamask_id: "7777777777777777",
    first_name: firstName,
    last_name: "",
    email: email,
    role: "school",
    address_line1: address1,
    address_line2: address2,
    city: city,
    state: state,
    zip_pin: postalCode,
    country: country,
    degree: "",
    portfolio_link: "",
    website: website,
    photo_dimension: "",
    contact_person: schoolContact,
    contact_person_email: schoolContactEmail,
    contact_person_phone: schoolContactPhone,
    accreditation: accreditation,
    phone: schoolphone,
    ethAddress: "jyhgwdwkd768868777",
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

export async function getUserProfile(ethAddress) {
  try {
    const params = {
      ethAddress: ethAddress,
    };
    const res = await Moralis.Cloud.run("getUserProfile", params);
    console.log(res);
    return res;
  } catch (err) {
    console.log(`err while getting user ${err}`);
  }
}

export async function getAllSchools() {
  try {
    const res = await Moralis.Cloud.run("getAllSchools");
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

export async function saveCampaign(school, major, oneLiner, degree, target) {
  const params = {
    school: school,
    major: major,
    oneLiner: oneLiner,
    degree: degree,
    target: target,
  };
  try {
    const res = await Moralis.Cloud.run("addCampaign", params);
    console.log(res);
    return res;
  } catch (err) {
    console.log(`err while saving campaign id ${err}`);
  }
}

export async function getActiveCampaigns(college, major) {
  const params = {
    college: college,
    major: major,
  };
  try {
    const res = await Moralis.Cloud.run("getActiveCampaigns", params);
    return res;
  } catch (err) {
    console.log(`err while saving campaign id ${err}`);
  }
}

export async function getActiveStudents() {
  try {
    const res = await Moralis.Cloud.run("getActiveStudents");
    return res;
  } catch (err) {
    console.log(`err while saving campaign id ${err}`);
  }
}

export async function uploadFile(data) {
  const file = new Moralis.File(data.name, data);
  return file.saveIPFS();
}
