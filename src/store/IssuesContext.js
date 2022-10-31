import { createContext, useReducer, useState } from "react";
import issueReducer from "./useIssueReducer";

export const issueDispatchContext = createContext("");
export const issuesContext = createContext("");
export const scrollYPosContext = createContext("");
export const scrollYPosDispatchContext = createContext("");

const state = { issue: null, issueList: [] };

export default function IssuesContextWrapper(props) {
  const [issueData, dispatch] = useReducer(issueReducer, state);
  const [scrollY, setScrollY] = useState(0);

  return (
    <scrollYPosContext.Provider value={scrollY}>
      <scrollYPosDispatchContext.Provider value={setScrollY}>
        <issuesContext.Provider value={issueData}>
          <issueDispatchContext.Provider value={dispatch}>
            {props.children}
          </issueDispatchContext.Provider>
        </issuesContext.Provider>
      </scrollYPosDispatchContext.Provider>
    </scrollYPosContext.Provider>
  );
}
