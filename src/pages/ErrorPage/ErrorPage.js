import { useNavigate } from "react-router";
import useTitle from "../../hooks/useTitle";
import { Template, RedirectButton } from "../notFoundPage/NotFoundPage";
import Layout from "../../components/common/Layout";

const ErrorPage = () => {
  const navigate = useNavigate();
  useTitle("에러");

  return (
    <Layout>
      <Template>
        <h1>오류가 발생했습니다. 잠시 후 다시 시도 해 주세요.</h1>
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

export default ErrorPage;
