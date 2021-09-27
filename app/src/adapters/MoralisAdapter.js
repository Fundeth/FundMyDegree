import reducer from "../store/reducers/profileReducer";
import reducers from "../store/reducers/index";

const Moralis = require("moralis");

Moralis.initialize("1a1CW4AUd1l3XJcEcawPyY4pHN27llaJo8tWYS7z");
Moralis.serverURL = "https://r8ngt2qrxcrp.bigmoralis.com:2053/server";

export async function getStudentDetailInfo(metamask_id) {
  const params = {
    metamask_id: metamask_id
  };
  return Moralis.Cloud.run("getStudentDetailInfo", params);
}

export async function insertUserBasic(profile) {
  const params = {
    metamask_id: "5555555555",
    first_name: profile.firstName,
    last_name: profile.lastName,
    email: profile.email,
    role: "student",
    address_line1: profile.address1,
    address_line2: profile.address2,
    city: profile.city,
    state: profile.state,
    zip_pin: profile.postalCode,
    country: profile.country,
    degree: profile.educationLevel,
    portfolio_link: profile.portfolio,
    website: profile.website,
    photo_dimension: profile.profilePictureDimensions
    };
  return Moralis.Cloud.run("insertUserBasic", params);
}

export async function getSchoolDetailInfo(metamask_id) {
  const params = {
    metamask_id: metamask_id
  };
  return Moralis.Cloud.run("getSchoolDetailInfo", params);
}

export async function insertSchool(params) {
  /*const params = {
    email,
  };*/
  return Moralis.Cloud.run("insertSchool", params);
}