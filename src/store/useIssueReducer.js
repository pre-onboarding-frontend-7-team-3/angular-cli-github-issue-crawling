const issueReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ISSUELIST":
      return { ...state.issue, issueList: [...action.initIssue] };
    case "INIT_ISSUELIST":
      return { ...state.issue, issueList: [...state.issueList, ...action.initIssue] };
    case "INIT_ISSUE":
      return { issue: action.initIssue, ...state.issueList };
    default:
      return state;
  }
};

export default issueReducer;
