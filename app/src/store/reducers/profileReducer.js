const reducer = (
  state = {
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    educationLevel: "sdsd",
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
