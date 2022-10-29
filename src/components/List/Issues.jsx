/** @jsxImportSource @emotion/react */
import React from "react";
import { useContext } from "react";
import { issueContext } from "../../context/issueContext";
import { css } from "@emotion/react";
import Issue from "./Issue";

const Issues = () => {
  const issueList = useContext(issueContext);
  const issues = issueList.map((issue, idx) => {
    return (
    <Issue issue={issue} key={issue.number} idx={idx}/>);
  });
  return <ul css={issuesContainer}>{issues}</ul>;
}; 

export default Issues;

const issuesContainer = css`
  width: 600px;
`;
