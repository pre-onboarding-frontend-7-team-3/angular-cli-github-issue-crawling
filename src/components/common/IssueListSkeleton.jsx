import React from "react";
import styled from "styled-components";
import IssueItemSkeleton from "./IssueItemSkeleton";

const IssueList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function IssueListSkeleton() {
  return (
    <IssueList>
      <IssueItemSkeleton />
    </IssueList>
  );
}
