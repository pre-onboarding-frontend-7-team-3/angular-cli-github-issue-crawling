/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { customBodyStyle } from "../shared/globalStyle";

function Advertisement() {
  return (
    <a href="https://www.wanted.co.kr" rel="wanted noreferrer" target="_blank">
      <div css={imgWrapper}>
        <img
          css={imgCss}
          style={{ width: "200px", height: "80px" }}
          alt="ads"
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
        />
      </div>
    </a>
  );
}

const imgWrapper = css`
  ${customBodyStyle}
  padding: 15px 30px;
`;

const imgCss = css`
  display: flex;
  margin: 0px auto;
  justify-content: center;
  border-radius: 10px;
  width: 20rem;
`;

export default Advertisement;
