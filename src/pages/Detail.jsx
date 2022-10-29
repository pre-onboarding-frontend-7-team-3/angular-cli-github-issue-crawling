import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { octokitDetailAPI } from "../api/client";

const Detail = () => {
  const [issue, setIssue] = useState({});
  const { issue_number } = useParams();
  
  useEffect(() => {
    const getIssueData = async () => {
      return await octokitDetailAPI(issue_number);
    };
    getIssueData().then((data) => {
      setIssue(data);
    });
  }, []);

  return (
    <>
      { issue.user && (
        <div>
          {issue.number}
          {issue.title}
          {issue.user.login}
          {issue.created_at}
          <img src={issue.user.avatar_url}></img>
          {issue.comments}
          {issue.body}
        </div>
      )}
    </>
  );
};

export default Detail;
