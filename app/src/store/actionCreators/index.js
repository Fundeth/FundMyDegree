export const updateBasicInfo = (firstName, lastName, email) => {
  return (dispatch) => {
    dispatch({
      type: "firstName",
      payload: firstName,
    });
  };
};

export const updateAddress = (address) => {
  return (dispatch) => {
    dispatch({
      type: "address",
      payload: address,
    });
  };
};


export const updateEducationLevel = (educationLevel) => {
  return (dispatch) => {
    dispatch({
      type: "type",
      payload: educationLevel,
    });
  };
};