Moralis.Cloud.define("insertUserBasic", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  const query = new Moralis.Query("User_basic");
  query.equalTo("ethAddress", request.user.get("ethAddress"));
  const results = await query.first();
  logger.info("results", JSON.stringify(results));
  if (results == null) {
    const UserBasic = Moralis.Object.extend("User_basic");
    const userBasic = new UserBasic();
    userBasic.set("metamask_id", request.params.metamask_id);
    logger.info(
      "New object created with metamaskid: " + request.params.metamask_id
    );
    userBasic.set("role", request.params.role);
    userBasic.set("first_name", request.params.first_name);
    userBasic.set("last_name", request.params.last_name);
    userBasic.set("address_line1", request.params.address_line1);
    userBasic.set("address_line2", request.params.address_line2);
    userBasic.set("city", request.params.city);
    userBasic.set("state", request.params.state);
    userBasic.set("country", request.params.country);
    userBasic.set("zip_pin", parseInt(request.params.zip_pin));
    userBasic.set("degree", request.params.degree);
    userBasic.set("degree_aspiring", request.params.degree_aspiring);
    userBasic.set("email", request.params.email);
    userBasic.set("website", request.params.website);
    userBasic.set("campaign_id", request.params.campaign_id);
    userBasic.set("photo_dimension", request.params.photo_dimension);
    userBasic.set("portfolio_link", request.params.portfolio_link);
    userBasic.set("phone", request.params.phone);
    userBasic.set("ethAddress", request.user.get("ethAddress"));
    userBasic.set("cropped_pic", request.user.cropped_pic);

    try {
      await userBasic.save();
      return userBasic;
    } catch (err) {
      logger.info(
        `Failed to create new object, with error code:  ${JSON.stringify(err)}`
      );
    }
  } else {
    results.set("first_name", request.params.first_name);
    results.set("last_name", request.params.last_name);
    results.set("address_line1", request.params.address_line1);
    results.set("address_line2", request.params.address_line2);
    results.set("city", request.params.city);
    results.set("state", request.params.state);
    results.set("country", request.params.country);
    results.set("zip_pin", parseInt(request.params.zip_pin));
    results.set("degree", request.params.degree);
    results.set("degree_aspiring", request.params.degree_aspiring);
    results.set("email", request.params.email);
    results.set("website", request.params.website);
    results.set("campaign_id", request.params.campaign_id);
    results.set("photo_dimension", request.params.photo_dimension);
    results.set("portfolio_link", request.params.portfolio_link);
    results.set("phone", request.params.phone);
    results.set("cropped_pic", request.user.cropped_pic);

    try {
      await results.save();
      return results;
    } catch (err) {
      logger.info(
        `Failed to create new object, with error code:  ${JSON.stringify(err)}`
      );
    }
  }
});

Moralis.Cloud.define("insertSchool", async (request) => {
  const query = new Moralis.Query("User_basic");
  query.equalTo("ethAddress", request.user.get("ethAddress"));
  const results = await query.first();
  if (!results) {
    const userBasic = new Moralis.Object("User_basic");
    userBasic.set("role", request.params.role);
    userBasic.set("first_name", request.params.first_name);
    userBasic.set("last_name", request.params.last_name);
    userBasic.set("address_line1", request.params.address_line1);
    userBasic.set("address_line2", request.params.address_line2);
    userBasic.set("city", request.params.city);
    userBasic.set("state", request.params.state);
    userBasic.set("country", request.params.country);
    userBasic.set("zip_pin", parseInt(request.params.zip_pin));
    userBasic.set("email", request.params.email);
    userBasic.set("website", request.params.website);
    userBasic.set("phone", request.params.phone);
    userBasic.set("ethAddress", request.user.get("ethAddress"));

    const object_contact_person = {
      name: request.params.contact_person,
      email: request.params.contact_person_email,
      phone: request.params.contact_person_phone,
    };
    userBasic.set("accreditation", request.params.accreditation);
    userBasic.set("contact_person", object_contact_person);
    await Moralis.Object.saveAll([userBasic]);
  } else {
    results.set("first_name", request.params.first_name);
    results.set("last_name", request.params.last_name);
    results.set("address_line1", request.params.address_line1);
    results.set("address_line2", request.params.address_line2);
    results.set("city", request.params.city);
    results.set("state", request.params.state);
    results.set("country", request.params.country);
    results.set("zip_pin", parseInt(request.params.zip_pin));
    results.set("degree", request.params.degree);
    results.set("degree_aspiring", request.params.degree_aspiring);
    results.set("email", request.params.email);
    results.set("website", request.params.website);
    results.set("campaign_id", request.params.campaign_id);
    results.set("photo_dimension", request.params.photo_dimension);
    results.set("portfolio_link", request.params.portfolio_link);
    results.set("phone", request.params.phone);
    const object_contact_person = {
      name: request.params.contact_person,
      email: request.params.contact_person_email,
      phone: request.params.contact_person_phone,
    };
    results.set("accreditation", request.params.accreditation);
    results.set("contact_person", object_contact_person);
    await Moralis.Object.saveAll([results]);
  }
});

/*Endpoint for student information detail query*/
Moralis.Cloud.define("getStudentDetailInfo", async (request) => {
  const query = new Moralis.Query("User_basic");
  query.equalTo("metamask_id", request.params.metamask_id);
  query.equalTo("role", "student");
  const results = await query.find();
  const i = 0;
  if (results.length == 0) {
    console.log("No student record found");
    return "No student record found";
  } else {
    console.log(results[i]);
    return results[i];
  }
});

/*Endpoint for school information detail query*/
Moralis.Cloud.define("getSchoolDetailInfo", async (request) => {
  const query = new Moralis.Query("User_basic");
  query.equalTo("metamask_id", request.params.metamask_id);
  query.equalTo("role", "school");
  const results = await query.first();
  const querySchool = new Moralis.Query("School");
  querySchool.equalTo("metamask_id", request.params.metamask_id);
  const resultsSchool = await querySchool.first();

  const i = 0;
  if (results == null) {
    console.log("No school record found");
    return "No school record found";
  } else {
    const object_school = { userBasic: results, school: resultsSchool };
    return object_school;
  }
});

Moralis.Cloud.define("getUser", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  const query = new Moralis.Query("User_basic");
  logger.info(` user ${JSON.stringify(request.user.get("ethAddress"))}`);

  query.equalTo("ethAddress", request.user.get("ethAddress"));

  try {
    const res = await query.first({ useMasterKey: true });

    logger.info(`Found user ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.error(`Error while getting user ${JSON.stringify(err)}`);
    return false;
  }
});

Moralis.Cloud.define("getUserProfile", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  const query = new Moralis.Query("User_basic");
  query.equalTo("ethAddress", request.params.ethAddress);

  try {
    const res = await query.first({ useMasterKey: true });

    logger.info(`Found user ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.error(`Error while getting user ${JSON.stringify(err)}`);
    return false;
  }
});

Moralis.Cloud.define("addCampaign", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  const query = new Moralis.Query("User_basic");
  logger.info(` user ${JSON.stringify(request.user.get("ethAddress"))}`);

  query.equalTo("ethAddress", request.user.get("ethAddress"));

  try {
    const res = await query.first({ useMasterKey: true });
    res.set("school", request.params.school);
    res.set("major", request.params.major);
    res.set("oneLiner", request.params.oneLiner);
    res.set("degree", request.params.degree);
    res.set("target", parseInt(request.params.target));
    res.set("active", true);

    await res.save();
    return res;
  } catch (err) {
    logger.error(`Error while getting user ${JSON.stringify(err)}`);
    return false;
  }
});

Moralis.Cloud.define("getAllSchools", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  const query = new Moralis.Query("User_basic");
  query.equalTo("role", "school");
  query.select("first_name", "ethAddress");

  try {
    const res = await query.find({ useMasterKey: true });

    logger.info(`Found user ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.error(`Error while getting user ${JSON.stringify(err)}`);
    return false;
  }
});

Moralis.Cloud.define("getProfilesByCampaigns", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  const query = new Moralis.Query("Profile");
  query.containedIn("campaignId", request.params.campaignIds);
  query.select("first_name", "last_name", "cropped_pic");
  try {
    logger.info(`Found user ${JSON.stringify(res)}`);
    const res = await query.find();
    return res;
  } catch (err) {
    logger.error(`Error while getting user ${JSON.stringify(err)}`);
    return false;
  }
});

Moralis.Cloud.define("getActiveCampaigns", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  const query = new Moralis.Query("User_basic");
  query.equalTo("active", true);
  //query.exists("campaign_id");
  if (request.params.school) {
    query.equalTo("school", request.params.school);
  }
  if (request.params.major) {
    query.equalTo("major", request.params.major);
  }
  query.select(
    "first_name",
    "last_name",
    "cropped_pic",
    "campaign_id",
    "ethAddress",
    "degree",
    "major",
    "school",
    "target",
    "oneLiner"
  );
  try {
    const res = await query.find();
    return res;
  } catch (err) {
    logger.error(`Error while getting active campaigns ${err}`);
    return false;
  }
});

Moralis.Cloud.define("getActiveStudents", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  const query = new Moralis.Query("User_basic");
  query.equalTo("active", true);
  //query.exists("campaign_id");

  query.select(
    "first_name",
    "last_name",
    "cropped_pic",
    "college_id",
    "ethAddress",
    "degree",
    "major",
    "school",
    "target",
    "oneLiner"
  );
  try {
    const res = await query.find();
    const filteredStudents = [];
    for (var student of res) {
      if (student.get("school").value === request.user.get("ethAddress")) {
        filteredStudents.push(student);
      }
    }
    return filteredStudents;
  } catch (err) {
    logger.error(`Error while getting active campaigns ${err}`);
    return false;
  }
});

Moralis.Cloud.define("getMajors", async (request) => {
  const majorsQuery = new Moralis.Query("Majors");
  const majors = await majorsQuery.find();

  return majors;
});

Moralis.Cloud.define("getDegrees", async (request) => {
  const degreesQuery = new Moralis.Query("Degree");
  const degrees = await degreesQuery.find();

  return degrees;
});
