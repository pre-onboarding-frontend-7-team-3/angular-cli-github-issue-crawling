const issueReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, ...action.initIssue];
    case "INIT":
      return [...action.initIssue];
    default:
      return state;
  }
};

export default issueReducer;
