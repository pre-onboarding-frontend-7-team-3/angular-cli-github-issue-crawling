/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Icons from "../../component/common/Icon";

const PageUpButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button css={pageUpBtn} onClick={handleClick}>
      <Icons icon="Arrow" />
    </button>
  );
};

export default PageUpButton;

const pageUpBtn = css`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  background-color: #ffffff;
`;
