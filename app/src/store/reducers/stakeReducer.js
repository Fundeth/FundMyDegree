const reducer = (
  state = {
    total: 0,
    locked: 0,
    balance: 0,
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
