const reducer = (
  state = {
    loading: false,
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
