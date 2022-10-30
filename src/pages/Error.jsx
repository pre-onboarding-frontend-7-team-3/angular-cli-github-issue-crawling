/** @jsxImportSource @emotion/react */
import { useLocation } from "react-router";
import { css } from "@emotion/react";
import { useNavigate } from "react-router";
import { centerInside } from "../shared/globalStyle";

function Error() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <>
      <section css={errorContainer}>
        <header css={header}>
          {state ? (
            <>
              <p>다음과 같은 이유로 오류가 났습니다😅</p>
              <div>{state}</div>
            </>
          ) : (
            "해당 페이지를 찾을 수 없습니다.😅"
          )}
        </header>{" "}
        <button css={button} size="lg" ripple={true} onClick={() => navigate("/")}>
          홈으로
        </button>
      </section>
    </>
  );
}

const header = css`
  ${centerInside}
  font-size: 2rem;
`;

const errorContainer = css`
  ${centerInside}
  height: 100vh;
  width: 100vw;
`;

const button = css`
  border-radius: 1rem;
  font-size: 20px;
  padding: 1rem 3rem;
  background-color: white;
  color: black;
  font-weight: 500;
  margin-top: 2rem;
  cursor: pointer;
`;

export default Error;
