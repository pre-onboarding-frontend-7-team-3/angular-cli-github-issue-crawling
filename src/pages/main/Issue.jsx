/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Issue = () => {
  return (
    <LayoutIssue>
      <IssueInfoBox>
        <IssueNumTitle>
          <IssueNum>#111</IssueNum>
          <IssueTitle>이슈타이틀</IssueTitle>
        </IssueNumTitle>
        <IssueNameDate>
          <IssueName>작성자 : name</IssueName>
          <IssueDate>작성일 : 2019년 12월 31일</IssueDate>
        </IssueNameDate>
      </IssueInfoBox>
      <CommentNum> 코멘트 3명</CommentNum>
    </LayoutIssue>
  );
};

export default Issue;

export const LayoutIssue = styled.div`
  width: 1000px;
  height: 100px;
  border: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const IssueInfoBox = styled.div`
  margin-left: 20px;
`;

export const IssueNumTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
`;

export const IssueNum = styled.div`
  margin-right: 20px;
`;
export const IssueTitle = styled.div``;

export const IssueNameDate = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

export const IssueName = styled.div`
  margin-right: 20px;
`;

export const IssueDate = styled.div``;

export const CommentNum = styled.div`
  margin-right: 20px;
`;
