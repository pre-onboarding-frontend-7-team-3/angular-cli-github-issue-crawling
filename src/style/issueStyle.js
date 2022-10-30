import styled from "@emotion/styled";

export const IssueContainer = styled.li`
  padding: 8px;
  border-bottom: 1px gray solid;
  margin-bottom: 5px;
  display: flex;
`;

export const IssueInfoContainer = styled.div`
  margin-right: auto;
  text-align: left;
  max-width: calc((100% - 4rem) * 0.8);
`;

export const IssueHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const IssueNumber = styled.div`
  min-width: 4rem;
`;

export const IssueTitle = styled.div`
  font-weight: bold;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  padding-bottom: 5px;
`;

export const IssueNameDate = styled.div`
  text-align: left;
  color: gray;
`;
export const IssueComment = styled.div`
  float: right;
  padding: 10px;
`;

export const IssueProfile = styled.img`
  width: 50px;
  height: 50px;
  padding-right: 10px;
`;
