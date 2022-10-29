/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { customBodyStyle } from "../shared/globalStyle";

function List({ list }) {
  return (
    <div css={divContainer}>
      <div css={leftContainer}>
        <div css={titleCss}>
          <div css={leftDiv}>#{list.number}</div>
          <div>{list.title}</div>
        </div>
        <div css={flexCss}>
          <div css={leftDiv}>작성자: {list.user.login},</div>
          <div>작성일: {list.created_at}</div>
        </div>
      </div>

      <div css={rightContainer}>코멘트: {list.comments}</div>
    </div>
  );
}

const divContainer = css`
  ${customBodyStyle}
  display: flex;
  justify-content: space-between;
`;

const leftContainer = css`
  width: 80%;
`;

const titleCss = css`
  font-size: 20px;
  display: flex;
  margin-bottom: 20px;
`;

const leftDiv = css`
  margin-right: 10px;
`;

const flexCss = css`
  display: flex;
`;

const rightContainer = css`
  display: flex;
  align-items: center;
`;

export default List;
