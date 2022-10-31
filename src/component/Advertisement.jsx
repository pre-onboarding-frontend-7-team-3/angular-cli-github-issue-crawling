/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { customBodyStyle, mediaWidth } from "../shared/globalStyle";

function Advertisement() {
  return (
    <a href="https://www.wanted.co.kr" rel="wanted noreferrer" target="_blank">
      <div>
        <img css={imgCss} alt="ads" src="/assets/img/wanted-lab.jpg" />
      </div>
    </a>
  );
}

const imgWrapper = css``;

const imgCss = css`
  display: flex;
  margin: 0px auto;
  padding: 1rem;
  background: #fff;
  justify-content: center;
  border-radius: 10px;
  ${mediaWidth}
`;

export default Advertisement;
