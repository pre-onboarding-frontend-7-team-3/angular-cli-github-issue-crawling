import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { octokitDetailAPI } from "../api/client";
import ReactMarkdown from "react-markdown";
import {
  IssueContainer,
  IssueComment,
  IssueInfoContainer,
  IssueHeader,
  IssueNameDate,
  IssueNumber,
  IssueTitle,
  IssueProfile,
} from "../style/issueStyle";
import { DetailPage } from "../style/detailStyle";

const Detail = () => {
  const [issue, setIssue] = useState({});
  const { issue_number } = useParams();

  useEffect(() => {
    const getIssueData = async () => {
      return await octokitDetailAPI(issue_number);
    };
    getIssueData().then(async (data) => {
      setIssue({ ...data });
    });
  }, []);

  return (
    <>
      {issue.user && (
        <DetailPage>
          <IssueContainer>
            <IssueProfile src={issue.user.avatar_url} loading="lazy" alt="profile_photo">
            </IssueProfile>
            <IssueInfoContainer>
              <IssueHeader>
                <IssueNumber>#{issue.number}</IssueNumber>
                <IssueTitle>{issue.title}</IssueTitle>
              </IssueHeader>
              <IssueNameDate>
                작성자:{issue.user.login}, &nbsp;작성일:
                {new Date(issue.created_at).toLocaleDateString()}
              </IssueNameDate>
            </IssueInfoContainer>
            <IssueComment>코멘트: {issue.comments}</IssueComment>
          </IssueContainer>
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </DetailPage>
      )}
    </>
  );
};

export default Detail;


