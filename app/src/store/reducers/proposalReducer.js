const reducer = (
  state = {
    cost: 0,
    time: 0,
    stake: 0,
    revisions: 0,
    pitch: "",
    jobId: "",
    jobsCompleted: 0,
    jobsFailed: 0,
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
