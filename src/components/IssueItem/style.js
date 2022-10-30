import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 10px 0;
  padding: 10px;

  border: 1px solid black;

  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 10px;

  width: 80px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
