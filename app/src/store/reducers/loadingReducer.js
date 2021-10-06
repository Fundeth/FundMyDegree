const reducer = (
  state = {
    loading: true,
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
