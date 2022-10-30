/** @jsxImportSource @emotion/react */
import React from "react";
import { Advertise } from "./Advertise";
import { Link } from "react-router-dom";
import {
  IssueContainer,
  IssueTitle,
  IssueNumber,
  IssueInfoContainer,
  IssueHeader,
  IssueNameDate,
  IssueComment,
} from "../../style/issueStyle";

const Issue = ({ issue, idx }) => {
  return (
    <>
      {idx === 5 && <Advertise />}
      <IssueContainer>
        <IssueInfoContainer>
          <Link to={`/detail/${issue.number}`}>
            <IssueHeader>
              <IssueNumber>#{issue.number}</IssueNumber>
              <IssueTitle>{issue.title}</IssueTitle>
            </IssueHeader>
          </Link>
          <IssueNameDate>
            작성자:{issue.user.login}, &nbsp;작성일:
            {new Date(issue.created_at).toLocaleDateString()}
          </IssueNameDate>
        </IssueInfoContainer>
        <IssueComment>코멘트: {issue.comments}</IssueComment>
      </IssueContainer>
    </>
  );
};
export default React.memo(Issue);
