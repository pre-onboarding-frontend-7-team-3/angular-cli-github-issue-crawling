import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { useDetailDispatchAction, useIssueState } from "../../../context/issueDetailContext";
import IssueListItem from "../IssueListItem/IssueListItem";
import Spinner from "../../common/Spinner";
const IssueDetailItem = () => {
  const getIssueDetail = useDetailDispatchAction();
  const { markdown, issueDetail } = useIssueState();
  
  const { id } = useParams();

  const persistCurrentIssue = issueDetail.number === +id;
  
  useEffect(() => {
    getIssueDetail(id);
  }, [id]);

  return (
    <>
      {persistCurrentIssue ? (
        <>
          <IssueListItem issue={issueDetail} />
          <IssueMarkdown dangerouslySetInnerHTML={{ __html: markdown }} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default IssueDetailItem;

const IssueMarkdown = styled.section`
  min-width: 400px;
  padding: 20px;
`;
