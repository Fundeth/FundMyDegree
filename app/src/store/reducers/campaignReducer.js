const reducer = (
  state = {
    target: "",
    description: "",
    schoolEmail: "",
    studentId: "",
    schoolName: "",
    pitch: "",
    major: "",
    campaign: {},
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
