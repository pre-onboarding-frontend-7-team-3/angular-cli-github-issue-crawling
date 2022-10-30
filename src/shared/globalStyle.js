import { css } from "@emotion/react";

export const customBodyStyle = css`
  padding: 30px;
  color: black;
  background: #fff;
  border-radius: 10px;
  margin: 48px auto;
  width: 20rem;
  @media screen and (min-width: 480px) {
    width: 28rem;
  }
  @media screen and (min-width: 767px) {
    width: 40rem;
  }
  @media screen and (min-width: 959px) {
    width: 50rem;
  }
`;

export const centerInside = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
