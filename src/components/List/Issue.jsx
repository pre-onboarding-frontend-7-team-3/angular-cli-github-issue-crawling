/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Advertise } from "./Advertise";

const Issue = ({ issue, idx }) => {
  return (
    <>
    {idx === 5 && <Advertise />}
    <li css={issueContainer}>
      <div css={issueLeft}>
        <div css={issueLeftUpper}>
          <div css={issueNumber}>#{issue.number}</div>
          <div css={issueTitle}>{issue.title}</div>
        </div>
        <div css={issueNameDate}>
          작성자:{issue.user.login}, &nbsp;작성일:
          {new Date(issue.created_at).toLocaleDateString()}
        </div>
      </div>
      <div css={issueComment}>코멘트: {issue.comments}</div>
    </li>
    </>
  );
};
export default React.memo(Issue);
const issueContainer = css`
  padding: 10px 0;
  border: 1px black solid;
  display:flex;
`;

const issueLeft = css`
  margin-right: auto;
  max-width:80%
`;

const issueLeftUpper = css`
  display: flex;
  margin-bottom: 10px;
`;

const issueNumber = css`
  min-width: 4rem;
`;

const issueTitle = css`
  font-weight: bold;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  padding-bottom: 5px;
`;

const issueNameDate = css`
  text-align: left;
  color: gray;
`;
const issueComment = css`
  float: right;
  padding: 10px ;
`;
