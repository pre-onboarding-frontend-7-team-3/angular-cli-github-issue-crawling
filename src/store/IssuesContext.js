import { createContext, useReducer } from "react";
import issueReducer from "./useIssueReducer";

export const dispatchContext = createContext("");
export const issuesContext = createContext("");

const issuesList = [];

export default function IssuesContextWrapper(props) {
  const [issues, dispatch] = useReducer(issueReducer, issuesList);

  return (
    <issuesContext.Provider value={issues}>
      <dispatchContext.Provider value={dispatch}>{props.children}</dispatchContext.Provider>
    </issuesContext.Provider>
  );
}
