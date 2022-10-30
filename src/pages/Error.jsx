/** @jsxImportSource @emotion/react */
import { useLocation } from "react-router";
import { css } from "@emotion/react";
import { useNavigate } from "react-router";

function Error() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <>
      <div>{state ? state : "해당 페이지를 찾을 수 없습니다."}</div>{" "}
      <button
        css={css`
          font-size: 20px;
          width: 200px;
          background-color: white;
          color: black;
          font-weight: 500;
        `}
        size="lg"
        ripple={true}
        onClick={() => navigate("/")}
      >
        홈으로
      </button>
    </>
  );
}

export default Error;
