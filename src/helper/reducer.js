const issueReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, ...action.issues];
    case "INIT":
      return [...action.issues];
    default:
      return state;
  }
};

export default issueReducer;
