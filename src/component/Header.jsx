/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { customBodyStyle } from "../shared/globalStyle";

function Header() {
  return <div css={headerWrapper}>Angular / Angular-cli</div>;
}

const headerWrapper = css`
  ${customBodyStyle}
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 600;
`;

export default Header;
