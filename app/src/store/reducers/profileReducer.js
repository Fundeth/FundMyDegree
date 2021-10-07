const reducer = (
  /*state = {
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
    schoolContact:"",
    schoolContactEmail:"",
    schoolContactPhone:"",
    schoolAccreditation:"",
    schoolphone:""
  },*/
  state = {
    publicView: null,
    privateView: null,
    readOnly: true,
    campaign: null,
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
