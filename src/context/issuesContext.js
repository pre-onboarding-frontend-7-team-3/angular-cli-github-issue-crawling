import { useState, useRef, useContext, createContext, useMemo } from "react";
import octokitApi from "../api/issue";

const IssuesContext = createContext(null);
const IssuesDispatchActionContext = createContext(null);

export const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const pageRef = useRef(1);
  
  const onIntersectObserver = useMemo(() => {
    return {
      async handleGetIssueList() {
        const optionParams = {
          owner: "angular",
          repo: "angular-cli",
          sort: "comments",
          page: pageRef.current,
        };
        try {
          const res = await octokitApi.getIssueList(optionParams);
          setIssues((prev) => [...prev, ...res.data]);
          pageRef.current += 1;
        } catch (err) {
          window.location.replace('/error-page')
        }
      },
    };
  }, []);
  
  return (
    <IssuesDispatchActionContext.Provider value={onIntersectObserver}>
      <IssuesContext.Provider value={issues}>{children}</IssuesContext.Provider>
    </IssuesDispatchActionContext.Provider>
  );
};

export const useIssuesState = () => {
  const issues = useContext(IssuesContext);
  return issues;
};

export const useListDispatchAction = () => {
  const dispatch = useContext(IssuesDispatchActionContext);
  return dispatch;
};
