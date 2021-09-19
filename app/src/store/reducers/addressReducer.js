const reducer = (
  state = {
    address: "",
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
