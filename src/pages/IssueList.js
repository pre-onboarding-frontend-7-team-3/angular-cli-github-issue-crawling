import { useEffect } from "react";
import styled from "@emotion/styled";
import { useIssuesState, useListDispatchAction } from "../context/issuesContext";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import IssueListItem from "../components/issue/IssueListItem/IssueListItem";
import WantedAd from "../components/common/WantedAd";
import useTitle from "../hooks/useTitle";
import Layout from "../components/common/Layout";

const IssueList = () => {
  const issues = useIssuesState();
  const { handleGetIssueList } = useListDispatchAction();

  const infiniteScrollTargetRef = useInfiniteScroll(handleGetIssueList);
  useTitle("Angular-cli");

  useEffect(() => {
    handleGetIssueList();
  }, [handleGetIssueList]);

  return (
    <Layout>
      <IssueListContainer>
        {issues?.map((issue, idx) => {
          if (idx === 4) {
            return <WantedAd />;
          }
          return <IssueListItem issue={issue} />;
        })}
        <div ref={infiniteScrollTargetRef} />
      </IssueListContainer>
    </Layout>
  );
};

export default IssueList;

const IssueListContainer = styled.section`
  width: 70vw;
  height: 100%;
  margin: 0 auto;
`;
