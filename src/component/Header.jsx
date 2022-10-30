/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { customBodyStyle } from "../shared/globalStyle";

import cutParams from "../utils/cutParams";

function Header({ repository_url, issue_number = null }) {
  const { repo, issue_num } = cutParams(repository_url);

  return (
    <div css={headerWrapper}>
      {`${repo} / ${issue_num}`}
      {issue_number ? ` / #${issue_number}` : ""}
    </div>
  );
}

const headerWrapper = css`
  ${customBodyStyle}
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 600;
`;

export default Header;
