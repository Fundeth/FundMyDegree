const reducer = (
    state = {
      target: "",
      description: "",
      schoolEmail: "",
      studentId: "",
      schoolName: "",
      pitch: "",
      major: "",
    },
    action
  ) => {
    return { ...state, [action.type]: action.payload };
  };
  
  export default reducer;
  