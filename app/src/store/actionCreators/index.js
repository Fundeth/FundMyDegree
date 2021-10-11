export const updateFirstName = (firstName) => {
  return (dispatch) => {
    dispatch({
      type: "firstName",
      payload: firstName,
    });
  };
};

export const updateLastName = (lastName) => {
  return (dispatch) => {
    dispatch({
      type: "lastName",
      payload: lastName,
    });
  };
};

export const updateEmail = (email) => {
  return (dispatch) => {
    dispatch({
      type: "email",
      payload: email,
    });
  };
};

export const updateAddress = (address1) => {
  return (dispatch) => {
    dispatch({
      type: "address1",
      payload: address1,
    });
  };
};

export const updateAddress2 = (address2) => {
  return (dispatch) => {
    dispatch({
      type: "address2",
      payload: address2,
    });
  };
};

export const updateCity = (city) => {
  return (dispatch) => {
    dispatch({
      type: "city",
      payload: city,
    });
  };
};

export const updateState = (state) => {
  return (dispatch) => {
    dispatch({
      type: "state",
      payload: state,
    });
  };
};

export const updateCountry = (country) => {
  return (dispatch) => {
    dispatch({
      type: "country",
      payload: country,
    });
  };
};

export const updatePostalCode = (postalCode) => {
  return (dispatch) => {
    dispatch({
      type: "postalCode",
      payload: postalCode,
    });
  };
};

export const updateEducationLevel = (educationLevel) => {
  return (dispatch) => {
    dispatch({
      type: "educationLevel",
      payload: educationLevel,
    });
  };
};

export const updateWebsite = (website) => {
  return (dispatch) => {
    dispatch({
      type: "website",
      payload: website,
    });
  };
};

export const updateLinkedIn = (linkedIn) => {
  return (dispatch) => {
    dispatch({
      type: "linkedIn",
      payload: linkedIn,
    });
  };
};

export const updatePortfolio = (portfolio) => {
  return (dispatch) => {
    dispatch({
      type: "portfolio",
      payload: portfolio,
    });
  };
};

export const updateTarget = (target) => {
  return (dispatch) => {
    dispatch({
      type: "target",
      payload: target,
    });
  };
};

export const updateDescription = (description) => {
  return (dispatch) => {
    dispatch({
      type: "description",
      payload: description,
    });
  };
};

export const updateStudentId = (studentId) => {
  return (dispatch) => {
    dispatch({
      type: "studentId",
      payload: studentId,
    });
  };
};

export const updateSchoolName = (schoolName) => {
  return (dispatch) => {
    dispatch({
      type: "schoolName",
      payload: schoolName,
    });
  };
};

export const updatePitch = (pitch) => {
  return (dispatch) => {
    dispatch({
      type: "pitch",
      payload: pitch,
    });
  };
};

export const updateMajor = (major) => {
  return (dispatch) => {
    dispatch({
      type: "major",
      payload: major,
    });
  };
};

export const updateSchoolEmail = (schoolEmail) => {
  return (dispatch) => {
    dispatch({
      type: "schoolEmail",
      payload: schoolEmail,
    });
  };
};

export const setCampaignContract = (contract) => {
  return (dispatch) => {
    dispatch({
      type: "campaignContract",
      payload: contract,
    });
  };
};
export const updateSchoolContact = (schoolContact) => {
  return (dispatch) => {
    dispatch({
      type: "schoolContact",
      payload: schoolContact,
    });
  };
};

export const updateSchoolContactEmail = (schoolContactEmail) => {
  return (dispatch) => {
    dispatch({
      type: "schoolContactEmail",
      payload: schoolContactEmail,
    });
  };
};

export const updateSchoolContactPhone = (schoolContactPhone) => {
  return (dispatch) => {
    dispatch({
      type: "schoolContactPhone",
      payload: schoolContactPhone,
    });
  };
};

export const updateAccreditation = (schoolAccreditation) => {
  return (dispatch) => {
    dispatch({
      type: "schoolAccreditation",
      payload: schoolAccreditation,
    });
  };
};

export const updateSchoolPhone = (schoolphone) => {
  return (dispatch) => {
    dispatch({
      type: "schoolphone",
      payload: schoolphone,
    });
  };
};

export const updateflag = (flag) => {
  return (dispatch) => {
    dispatch({
      type: "flag",
      payload: flag,
    });
  };
};

export const setProfile = (user) => {
  return (dispatch) => {
    dispatch({
      type: "publicView",
      payload: user,
    });
  };
};

export const updateErrorMessage = (errorMessage) => {
  return (dispatch) => {
    dispatch({
      type: "errorMessage",
      payload: errorMessage,
    });
  };
};
export const setCampaign = (campaign) => {
  return (dispatch) => {
    dispatch({
      type: "campaign",
      payload: campaign,
    });
  };
};

export const setLoading = (loading) => {
  return (dispatch) => {
    dispatch({
      type: "loading",
      payload: loading,
    });
  };
};
