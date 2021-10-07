const reducer = (
  state = {
    firstName: "",
    profilePicture: "",
    profilePictureDimensions: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    educationLevel: "",
    website: "",
    linkedIn: "",
    portfolio: "",
    ethId:"",
    schoolContact:"",
    schoolContactEmail:"",
    schoolContactPhone:"",
    schoolAccreditation:"",
    schoolphone:"",
    flag:"",
    errorMessage:""
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
