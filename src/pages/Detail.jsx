import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { DetailContainer } from "../style/detailStyle";

const Detail = () => {
  const [issue, setIssue] = useState({});
  const { issue_number } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const getIssueData = async () => {
      return await octokitDetailAPI(issue_number);
    };
    getIssueData().then(
      (data) => {
        setIssue({ ...data });
      },
      (err) => {
        navigate("/Error", {state :{status :err.status, message: err.message}})
      },
    );
  }, []);

  return (
    <>
      {issue.user && (
        <DetailContainer>
          <IssueContainer>
            <IssueProfile
              src={issue.user.avatar_url}
              loading="lazy"
              alt="profile_photo"
            ></IssueProfile>
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
        </DetailContainer>
      )}
    </>
  );
};

export default Detail;
