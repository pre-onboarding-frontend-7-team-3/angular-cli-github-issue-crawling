/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { octokitDetailApi } from "../api/client";
import { useIssueContext, useDispatchContext } from "../store/IssuesContext";
import Reactmarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { customBodyStyle, media } from "../shared/globalStyle";
import List from "../component/List";
import { issuesContext, dispatchContext } from "../store/IssuesContext";
import { MarkdownImage } from "../component/MarkdownImage";

import Header from "../component/Header";

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { issue } = useContext(issuesContext);
  const dispatch = useContext(dispatchContext);

  useEffect(() => {
    if (!issue) {
      octokitDetailApi(id)
        .then((res) => {
          dispatch({ type: "INIT_ISSUE", initIssue: res.data });
        })
        .catch((error) => {
          navigate("/error", {
            state: `${error}`,
          });
        });
    }
  }, []);

  return (
    <section>
      {issue && (
        <>
          <Header repository_url={issue.repository_url} issue_number={issue.number} />
          <div css={userDataWrapper}>
            <img css={imgCss} alt={"user"} src={issue.user.avatar_url} />
            <List list={issue} />
          </div>
          <div css={customBodyStyle}>
            <Reactmarkdown
              children={issue?.body}
              skipHtml={false}
              parserOptions={{ commonmark: true }}
              components={{
                code: Component,
                img: ({ node, ...props }) => <MarkdownImage {...props} />,
              }}
            />
          </div>
        </>
      )}
    </section>
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
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const imgCss = css`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-top: 70px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    /* margin: 0; */
  }
`;

export default Detail;
