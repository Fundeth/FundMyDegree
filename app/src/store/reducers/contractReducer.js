const reducer = (
  state = {
    campaignContract: {},
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
