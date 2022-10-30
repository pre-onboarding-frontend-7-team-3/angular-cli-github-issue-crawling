/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { customBodyStyle, mediaText } from "../shared/globalStyle";
import dateConverter from "../utils/dateConverter";
import Icon from "./common/Icon";

function List({ list }) {
  return (
    <div css={divContainer}>
      <div css={info}>
        <div className="issue-title" css={titleCss}>
          <div css={author}>#{list.number}</div>
          <div>{list.title}</div>
        </div>
        <div className="issue-author" css={flexCss}>
          <div css={author}>작성자: {list.user.login},</div>
          <div>{dateConverter(list.created_at)}</div>
        </div>
      </div>
      <div css={rightContainer}>
        <Icon icon="Comment" size={30} />
        {list.comments}
      </div>
    </div>
  );
}

const divContainer = css`
  ${customBodyStyle}
  margin:48px 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const info = css`
  width: 80%;
  ${mediaText}
`;

const titleCss = css`
  display: flex;
  font-weight: bold;
  margin-bottom: 20px;
`;

const author = css`
  margin-right: 10px;
`;

const flexCss = css`
  display: flex;
`;

const rightContainer = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 5px;

  width: 60px;
`;

export default List;
