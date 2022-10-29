import { useEffect } from "react";
import { IssueListContainer } from "./Style";
import { useIssueState, useDispatchAction } from "../../context/issuesContext";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import IssueItem from "../../components/issue/IssueListItem/IssueListItem";

const IssueList = () => {
  const issues = useIssueState();
  const { handleGetIssueList } = useDispatchAction();

  const infiniteScrollTargetRef = useInfiniteScroll(handleGetIssueList);

  useEffect(() => {
    handleGetIssueList();
  }, [handleGetIssueList]);

  return (
    <IssueListContainer>
      {issues?.map((issue) => {
        return <IssueItem issue={issue} />;
      })}
      <div ref={infiniteScrollTargetRef}>bottom</div>
    </IssueListContainer>
  );
};

export default IssueList;
