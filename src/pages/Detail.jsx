/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { octokitDetailApi } from "../api/client";
import { customBodyStyle } from "../shared/globalStyle";
import Header from "../component/Header";
import List from "../component/List";
import markdownToHtml from "../utils/markdownParse";

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [issueHtml, setIssueHtml] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    octokitDetailApi(id)
      .then((res) => {
        setData(res.data);
        const getData = async (data) => {
          const parseData = await markdownToHtml(data.body);
          setIssueHtml(parseData);
        };
        getData(res.data);
      })
      .catch(() => {
        navigate("/error", { state: "데이터를 불러오는데 실패했습니다" });
      });
  }, []);

  return (
    <>
      <Header />
      {data && (
        <div css={userDataWrapper}>
          <img css={imgCss} src={data.user.avatar_url} />
          <List list={data} />
        </div>
      )}
      {issueHtml && (
        <div css={customBodyStyle} dangerouslySetInnerHTML={{ __html: issueHtml }}></div>
      )}
    </>
  );
}

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
