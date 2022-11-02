import { createContext, useContext, useMemo, useReducer } from "react";

export const issuesContext = createContext("");
export const dispatchContext = createContext("");

// ! 관심사의 분리 ( 본 페이지에서의 추상화 일치성에 유리 )
export function useStateContext() {
  const state = useContext(issuesContext);
  if (!state) {
    throw new Error("useStateContext must be used withing a StateContextProvider");
  }
  return state;
}
export function useDispatchContext() {
  const dispatch = useContext(dispatchContext);
  if (!dispatch) {
    throw new Error("useDispatchContext must be used withing a DispatchContextProvider");
  }
  return dispatch;
}

const issuesList = [];

const issueReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, ...action.addIssue];
    case "END":
      return action.isEnd;
    default:
      return state;
  }
};

export default function IssuesContextWrapper({ children }) {
  const [state, dispatch] = useReducer(issueReducer, issuesList);
  // !
  const values = useMemo(() => state, [state]);

  return (
    <issuesContext.Provider value={values}>
      <dispatchContext.Provider value={dispatch}>{children}</dispatchContext.Provider>
    </issuesContext.Provider>
  );
}
