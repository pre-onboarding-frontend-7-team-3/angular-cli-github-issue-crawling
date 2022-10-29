import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import octokitApi from "../../../api/issue";
import styled from "@emotion/styled";
import { markdownToHTML } from "../../../utils/markdownToHTML";
// import IssueListItem from "../IssueListItem/IssueListItem";

const IssueDetailItem = () => {
  const [issueDetails, setIssueDetails] = useState([]);
  const [markdown, setMarkdown] = useState();

  const { id } = useParams();

  const handleGetIssueDetail = async () => {
    const optionParams = {
      owner: "angular",
      repo: "angular-cli",
      issue_number: id,
    };
    try {
      const issueRes = await octokitApi.getIssue(optionParams);
      const mardownRes = await markdownToHTML(issueRes.data);
      setMarkdown(mardownRes.value);
      setIssueDetails(issueRes.data);
    } catch (err) {
      window.location.replace("/error-page");
    }
  };

  useEffect(() => {
    handleGetIssueDetail(id);
  }, [id]);
  console.log(issueDetails);
  return (
    <>
      {/* {issueDetails && <IssueListItem issue={issueDetails} />} */}
      <IssueMarkdown dangerouslySetInnerHTML={{ __html: markdown }} />
    </>
  );
};

export default IssueDetailItem;

const IssueMarkdown = styled.section`
  min-width: 400px;
`;
