import { useEffect } from "react";
import { IssueListContainer } from "./Style";
import { useIssueState, useDispatchAction } from "../../context/issuesContext";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import IssueListItem from "../../components/issue/IssueListItem/IssueListItem";
import WantedAd from "../../components/common/WantedAd";

const IssueList = () => {
  const issues = useIssueState();
  const { handleGetIssueList } = useDispatchAction();

  const infiniteScrollTargetRef = useInfiniteScroll(handleGetIssueList);

  useEffect(() => {
    handleGetIssueList();
  }, [handleGetIssueList]);
console.log(issues)
  return (
    <IssueListContainer>
      {issues?.map((issue, idx) => {
        if (idx === 4) {
          return <WantedAd />;
        }
        return <IssueListItem issue={issue} />;
      })}
      <div ref={infiniteScrollTargetRef} />
    </IssueListContainer>
  );
};

export default IssueList;
