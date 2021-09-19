const reducer = (
  state = {
    dealContract: {},
    userContract: {},
    tokenContract: {},
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
