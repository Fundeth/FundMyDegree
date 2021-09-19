const reducer = (
  state = {
    title: "",
    type: {},
    tags: [],
    description: "",
    fees: {
      min: 0,
      max: 1,
    },
    stake: {
      min: 0,
      max: 1,
    },
    completion: 1,
    acceptance: 1,
    revisions: 1,
    escrow: 100,
    assets: { name: "", link: "", comments: "" },
    minJobsCompleted: 0,
    maxJobsFailed: 0,
  },
  action
) => {
  return { ...state, [action.type]: action.payload };
};

export default reducer;
