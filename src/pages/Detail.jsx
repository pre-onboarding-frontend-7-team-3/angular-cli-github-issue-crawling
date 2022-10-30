/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { octokitDetailApi } from "../api/client";
import Reactmarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import { customBodyStyle } from "../shared/globalStyle";
import List from "../component/List";

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    octokitDetailApi(id)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        navigate("/error", { state: "데이터를 불러오는데 실패했습니다" });
      });
  }, []);

  return (
    <>
      {data && (
        <>
          <div css={userDataWrapper}>
            <img css={imgCss} alt="user" src={data.user.avatar_url} />
            <List list={data} />
          </div>
          <div css={customBodyStyle}>
            <Reactmarkdown
              children={data?.body}
              skipHtml={false}
              // rehypePlugins={[rehypeRaw]}
              parserOptions={{ commonmark: true }}
              components={{ code: Component }}
            />
          </div>
        </>
      )}
    </>
  );
}

const Component = ({ children }) => {
  const customStyle = {
    padding: "10px 15px",
    margin: "22px 0",
    borderRadius: "10px",
    backgroundColor: "rgb(244, 244, 244)",
  };
  return (
    <SyntaxHighlighter language="javascript" customStyle={customStyle}>
      {children}
    </SyntaxHighlighter>
  );
};

const userDataWrapper = css`
  ${customBodyStyle}
  padding: 0 30px;
  display: flex;
`;

const imgCss = css`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-top: 70px;
`;

export default Detail;
