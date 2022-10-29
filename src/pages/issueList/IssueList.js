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

  return (
    <IssueListContainer>
      {/* <Suspense fallback={<Spinner />}> */}
      {issues?.map((issue, idx) => {
        if (idx === 4) {
          return <WantedAd />;
        }
        return <IssueListItem issue={issue} />;
      })}
      {/* </Suspense> */}
      <div ref={infiniteScrollTargetRef}>bottom</div>
    </IssueListContainer>
  );
};

export default IssueList;
