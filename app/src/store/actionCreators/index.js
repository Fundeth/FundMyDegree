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