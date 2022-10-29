import styled from "@emotion/styled";

export const IssueItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 15vh;
  padding: 10px 20px;
  border-bottom: 1px solid rgb(178, 176, 176);
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100px;
  gap: 10px;
`;

export const FlexCenterContainer = styled.div`
  display:flex;
  align-items:center;
  gap: 15px;
`;

export const FlexRowContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
