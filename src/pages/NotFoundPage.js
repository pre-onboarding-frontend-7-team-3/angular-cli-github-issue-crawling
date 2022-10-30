import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import useTitle from "../hooks/useTitle";
import Layout from "../components/common/Layout";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useTitle("404페이지");

  return (
    <Layout>
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
    </Layout>
  );
};

export const Template = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
