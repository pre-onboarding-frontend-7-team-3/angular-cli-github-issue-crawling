/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { customBodyStyle } from "../shared/globalStyle";
import dateConverter from "../utils/dateConverter";
import Icon from "./common/Icon";

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
  justify-content: flex-start;
  align-items: center;

  gap: 5px;

  width: 60px;
`;

export default List;
