/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { customBodyStyle } from "../shared/globalStyle";

function Header({ repository_url, issue_number = null }) {
  return (
    <div css={headerWrapper}>
      {}
      {issue_number ?? ""}
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
