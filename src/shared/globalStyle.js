import { css } from "@emotion/react";

export const mediaText = css`
  @media screen and (min-width: 280px) {
    .issue-title {
      font-size: 0.9rem;
    }
    .issue-author {
      font-size: 0.7rem;
    }
  }
  @media screen and (min-width: 480px) {
    .issue-title {
      font-size: 1rem;
    }
    .issue-author {
      font-size: 0.9rem;
    }
  }
  @media screen and (min-width: 767px) {
    .issue-title {
      font-size: 1.3rem;
    }
    .issue-author {
      font-size: 1.1rem;
    }
  }
`;

export const mediaWidth = css`
  @media screen and (min-width: 280px) {
    width: 20rem;
  }
  @media screen and (min-width: 767px) {
    width: 40rem;
  }
  @media screen and (min-width: 959px) {
    width: 50rem;
  }
`;

export const customBodyStyle = css`
  padding: 30px;
  color: black;
  background: #fff;
  border-radius: 10px;
  margin: 48px auto;
  ${mediaWidth}
`;

export const centerInside = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
