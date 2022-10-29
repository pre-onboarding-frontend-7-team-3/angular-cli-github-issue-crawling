// import { useState, useContext, createContext, useMemo } from "react";
// import octokitApi from "../api/issue";

// const IssueDetailContext = createContext(null);
// const IssueDispatchActionContext = createContext(null);

// export const IssueDetailProvider = ({ children }) => {
//   const [issueDetails, setIssueDetails] = useState([]);

//   const dispatch = useMemo(() => {
//     return {
//       async handleGetIssueDetail(id) {
//         const optionParams = {
//           owner: "angular",
//           repo: "angular-cli",
//           issue_number: id,
//         };
//         try {
//           const res = await octokitApi.getIssue(optionParams);
//           setIssueDetails([(prev) => [...prev, res.data]]);
//           console.log(`RES`,res.data)
//         } catch (err) {
//           window.location.replace("/error-page");
//         }
//       },
//     };
//   }, []);

//   return (
//     <IssueDispatchActionContext.Provider value={dispatch}>
//       <IssueDetailContext.Provider value={issueDetails}>{children}</IssueDetailContext.Provider>
//     </IssueDispatchActionContext.Provider>
//   );
// };

// export const useIssueState = () => {
//   const issue = useContext(IssueDetailContext);
//   return issue;
// };

// export const useDetailDispatchAction = () => {
//   const dispatch = useContext(IssueDispatchActionContext);
//   return dispatch;
// };
