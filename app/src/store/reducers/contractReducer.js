const reducer = (
  state = {
    campaignContract: {},
    tokenContract: {},
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
