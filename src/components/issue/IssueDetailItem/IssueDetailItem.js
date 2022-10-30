import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { useDetailDispatchAction, useIssueState } from "../../../context/issueDetailContext";
import IssueListItem from "../IssueListItem/IssueListItem";

const IssueDetailItem = () => {
  const getIssueDetail = useDetailDispatchAction();
  const { markdown, issueDetail } = useIssueState();

  const { id } = useParams();

  useEffect(() => {
    getIssueDetail(id);
  }, [id]);

  return (
    <>
      <IssueListItem issue={issueDetail} />
      <IssueMarkdown dangerouslySetInnerHTML={{ __html: markdown }} />
    </>
  );
};

export default IssueDetailItem;

const IssueMarkdown = styled.section`
  min-width: 400px;
  padding: 20px;
`;
