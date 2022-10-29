import { createContext, useReducer } from "react";
import issueReducer from "../helper/reducer";
export const issueContext = createContext([]);
export const issueDispatchContext = createContext();
const initialIssue = [];

export default function IssueContextWrapper(props) {
  const [issueList, dispatch] = useReducer(issueReducer, initialIssue);

  return (
    <issueDispatchContext.Provider value={dispatch}>
      <issueContext.Provider value={issueList}>{props.children}</issueContext.Provider>
    </issueDispatchContext.Provider>
  );
}
