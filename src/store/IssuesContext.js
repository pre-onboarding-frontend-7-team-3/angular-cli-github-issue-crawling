import { createContext, useReducer } from "react";

export const dispatchContext = createContext("");
export const issuesContext = createContext("");

const issuesList = [];

const issueReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return [...action.initIssue];
    case "ADD":
      return [...state, ...action.initIssue];
    default:
      return state;
  }
};

export default function IssuesContextWrapper(props) {
  const [state, dispatch] = useReducer(issueReducer, issuesList);

  return (
    <issuesContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>{props.children}</dispatchContext.Provider>
    </issuesContext.Provider>
  );
}
