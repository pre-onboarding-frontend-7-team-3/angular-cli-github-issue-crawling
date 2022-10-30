/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const PageUpButton = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button css={pageUpBtn} onClick={handleClick}>
      UP
    </button>
  );
};

export default PageUpButton;

const pageUpBtn = css`
  position: fixed;
  top: 90vh;
  right: 5%;
`;
