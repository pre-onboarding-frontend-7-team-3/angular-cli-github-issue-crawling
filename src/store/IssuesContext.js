import { createContext, useReducer } from "react";
import issueReducer from "./useIssueReducer";

export const dispatchContext = createContext("");
export const issuesContext = createContext("");

const state = { issue: null, issueList: [] };

export default function IssuesContextWrapper(props) {
  const [issueData, dispatch] = useReducer(issueReducer, state);

  return (
    <issuesContext.Provider value={issueData}>
      <dispatchContext.Provider value={dispatch}>{props.children}</dispatchContext.Provider>
    </issuesContext.Provider>
  );
}
