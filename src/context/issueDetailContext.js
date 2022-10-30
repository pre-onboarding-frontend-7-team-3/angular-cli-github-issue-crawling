import { useState, useContext, createContext } from "react";
import octokitApi from "../api/issue";
import { markdownToHTML } from "../utils/markdownToHTML";

const IssueDetailContext = createContext(null);
const IssueDispatchActionContext = createContext(null);

export const IssueDetailProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState('');
  const [issueDetail, setIssueDetail] = useState([]);

  const handleGetIssueDetail = async (id) => {
    const optionParams = {
      owner: "angular",
      repo: "angular-cli",
      issue_number: id,
    };
    try {
      const issueRes = await octokitApi.getIssue(optionParams);
      const mardownRes = await markdownToHTML(issueRes.data);
      setMarkdown(mardownRes.value);
      setIssueDetail(issueRes.data);
    } catch (err) {
      window.location.replace("/error-page");
    }
  };

  return (
    <IssueDispatchActionContext.Provider value={handleGetIssueDetail}>
      <IssueDetailContext.Provider value={{markdown,issueDetail}}>{children}</IssueDetailContext.Provider>
    </IssueDispatchActionContext.Provider>
  );
};

export const useIssueState = () => {
  const issue = useContext(IssueDetailContext);
  return issue;
};

export const useDetailDispatchAction = () => {
  const getIssueDetail = useContext(IssueDispatchActionContext);
  return getIssueDetail;
};
