import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import useTitle from "../../hooks/useTitle";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useTitle('404페이지')

  return (
    <Template>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <RedirectButton
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        메인으로 돌아가기
      </RedirectButton>
    </Template>
  );
};

export const Template = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
`;

export const RedirectButton = styled.button`
  padding: 0.8vh 1vw;
  margin-top: 1vh;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(235, 235, 235);
  }
`;

export default NotFoundPage;
