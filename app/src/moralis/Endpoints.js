Moralis.Cloud.define(
  "insertUserBasic",
  async (request) => {
    const logger = Moralis.Cloud.getLogger();
    const query = new Moralis.Query("User_basic");
    query.equalTo("ethAddress", request.user.get("ethAddress"));
    //const results = await query.find();
    const results = await query.first();
    logger.info("results", JSON.stringify(results));
    //const i = 0;
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

      try {
        await userBasic.save();
        return userBasic;
      } catch (err) {
        logger.info(
          `Failed to create new object, with error code:  ${JSON.stringify(
            err
          )}`
        );
      }
      /*
      userBasic.save().then(
        (userBasic) => {
          // Execute any logic that should take place after the object is saved.
          logger.info(
            "New object created with objectId: " + userBasic.objectId
          );
          return userBasic;
        },
        (error) => {
          // Execute any logic that should take place if the save fails.
          // error is a Moralis.Error with an error code and message.
          logger.info(
            "Failed to create new object, with error code: " + error.message
          );
        }
      );*/
    } else {
      //const UserBasic = Moralis.Object.extend("User_basic");
      //const userBasic = new UserBasic();
      //Object.assign(userBasic, results);
      /*userBasic.set("first_name", request.params.first_name);
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
  userBasic.set("portfolio_link", request.params.portfolio_link);*/

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

      try {
        await results.save();
        return results;
      } catch (err) {
        logger.info(
          `Failed to create new object, with error code:  ${JSON.stringify(
            err
          )}`
        );
      }
      /*
      results.save().then(
        (results) => {
          // Execute any logic that should take place after the object is saved.
          logger.info("New object created with objectId: " + results.objectId);
          return results;
        },
        (error) => {
          // Execute any logic that should take place if the save fails.
          // error is a Moralis.Error with an error code and message.
          logger.info(
            "Failed to create new object, with error code: " + error.message
          );
        }
      );*/
    }
  } /*{
  //fields : ['state'],
  //requireUser: true
}*/
);

Moralis.Cloud.define(
  "insertSchool",
  async (request) => {
    const query = new Moralis.Query("User_basic");
    query.equalTo("metamask_id", request.params.metamask_id);
    const querySchool = new Moralis.Query("School");
    querySchool.equalTo("metamask_id", request.params.metamask_id);
    const results = await query.first();
    const resultsSchool = await querySchool.first();
    if (results == null) {
      const UserBasic = Moralis.Object.extend("User_basic");
      const userBasic = new UserBasic();
      const school = Moralis.Object.extend("School");
      const schoolInfo = new school();
      userBasic.set("metamask_id", request.params.metamask_id);
      console.log(
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
      userBasic.set("email", request.params.email);
      userBasic.set("website", request.params.website);
      userBasic.set("phone", request.params.phone);
      userBasic.set("ethAddress", request.user.get("ethAddress"));

      //userBasic.set("campaign_id", request.params.campaign_id);
      //start school info setter
      const object_contact_person = {
        name: request.params.contact_person,
        email: request.params.contact_person_email,
        phone: request.params.contact_person_phone,
      };
      schoolInfo.set("metamask_id", request.params.metamask_id);
      schoolInfo.set("accreditation", request.params.accreditation);
      schoolInfo.set("contact_person", object_contact_person);
      schoolInfo.set("ethAddress", request.user.get("ethAddress"));

      const results = await Moralis.Object.saveAll([
        userBasic,
        schoolInfo,
      ]).then(
        (userBasic) => {
          // Execute any logic that should take place after the object is saved.
          console.log(
            "New object created with objectId: " + userBasic.objectId
          );
          return userBasic;
        },
        (error) => {
          // Execute any logic that should take place if the save fails.
          // error is a Moralis.Error with an error code and message.
          console.log(
            "Failed to create new object, with error code: " + error.message
          );
        }
      );
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
      //schoolInfo.set("metamask_id", request.params.metamask_id);
      resultsSchool.set("accreditation", request.params.accreditation);
      resultsSchool.set("contact_person", object_contact_person);
      const results2 = await Moralis.Object.saveAll([
        results,
        resultsSchool,
      ]).then(
        (results) => {
          // Execute any logic that should take place after the object is saved.
          console.log("object updated with objectId: " + results.objectId);
          return results;
        },
        (error) => {
          // Execute any logic that should take place if the save fails.
          // error is a Moralis.Error with an error code and message.
          console.log(
            "Failed to update object, with error code: " + error.message
          );
        }
      );
    }
  } /*{
  //fields : ['state'],
  //requireUser: true
}*/
);

/*Endpoint for student information detail query*/
Moralis.Cloud.define(
  "getStudentDetailInfo",
  async (request) => {
    const query = new Moralis.Query("User_basic");
    query.equalTo("metamask_id", request.params.metamask_id);
    query.equalTo("role", "student");
    const results = await query.find();
    const i = 0;
    if (results.length == 0) {
      console.log("No student record found");
      return "No student record found";
    } else {
      /* var first_name = results[i].get("first_name");
   var last_name = results[i].get("last_name");
   var role = results[i].get("role");
   var address_line1 = results[i].get("address_line1");
   var address_line2 = results[i].get("address_line2");
   var city = results[i].get("city");
   var last_name = results[i].get("last_name");
   var state = results[i].get("state");
   var country = results[i].get("country");
   var zip_pin = results[i].get("zip_pin");
   var degree = results[i].get("degree");
   var degree_aspiring = results[i].get("degree_aspiring");
   var email = results[i].get("email");
   var website = results[i].get("website");
   var campaign_id = results[i].get("campaign_id");
   var photo_dimension = results[i].get("photo_dimension");  */
      console.log(results[i]);
      return results[i];
    }
  } /*{
  //fields : ['state'],
  //requireUser: true
}*/
);

/*Endpoint for school information detail query*/
Moralis.Cloud.define(
  "getSchoolDetailInfo",
  async (request) => {
    const query = new Moralis.Query("User_basic");
    query.equalTo("metamask_id", request.params.metamask_id);
    query.equalTo("role", "school");
    const results = await query.first();
    const querySchool = new Moralis.Query("School");
    querySchool.equalTo("metamask_id", request.params.metamask_id);
    const resultsSchool = await querySchool.first();

    //const ReturnObject = Moralis.Object.extend("Object");
    //const returnObject = new ReturnObject();

    const i = 0;
    if (results == null) {
      console.log("No school record found");
      return "No school record found";
    } else {
      //console.log (results + resultsSchool);
      const object_school = { userBasic: results, school: resultsSchool };
      //returnObject.set("userBasic", results);
      //returnObject.set("school", resultsSchool);
      return object_school;
    }
  } /*{
  //fields : ['state'],
  //requireUser: true
}*/
);

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
