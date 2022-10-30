/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Issue from "../components/Issue";
import { TOKEN } from "../config";
import { Octokit } from "octokit";
import { useIssue } from "../contexts/issueContext";
import Loading from "../components/Loading";

const Main = () => {
  const [issue, setIssue] = useIssue({});
  const pageNum = useRef(1);
  const [loading, setLoading] = useState(false);

  const octokit = new Octokit({
    auth: TOKEN.USER,
  });

  useEffect(() => {
    octokit
      .request("GET /repos/{owner}/{repo}/issues", {
        owner: "angular",
        repo: "angular-cli",
        state: "open",
        sort: "comments",
        per_page: 10,
        page: 1,
      })
      .then((res) => {
        setIssue(res.data);
      });
  }, []);

  const octokitApi = async () => {
    pageNum.current += 1;
    setLoading(true);
    await octokit
      .request("GET /repos/{owner}/{repo}/issues", {
        owner: "angular",
        repo: "angular-cli",
        state: "open",
        sort: "comments",
        per_page: 10,
        page: pageNum.current,
      })
      .then((res) => {
        setIssue((prev) => [...prev, ...res.data]);
      });
    setLoading(false);
  };

  useEffect(() => {
    let timer;
    window.addEventListener("scroll", () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollHeight + scrollTop >= clientHeight - 10) {
          octokitApi();
        }
      }, 400);
    });
  }, []);

  return (
    <Layout>
      {loading ? <Loading /> : null}
      <ListLayout>
        {issue.map((el, idx) => {
          return (
            <div key={el.id}>
              {issue.length - 1 === idx ? (
                <Issue
                  {...issue}
                  number={el.number}
                  title={el.title}
                  login={el.user.login}
                  created_at={el.created_at}
                  comments={el.comments}
                  idx={idx}
                />
              ) : (
                <Issue
                  {...issue}
                  number={el.number}
                  title={el.title}
                  login={el.user.login}
                  created_at={el.created_at}
                  comments={el.comments}
                  idx={idx}
                />
              )}
            </div>
          );
        })}
      </ListLayout>
    </Layout>
  );
};

export default Main;

export const Layout = styled.div`
  height: 100vh;
  margin: 100px 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListLayout = styled.div`
  height: 100%;
  margin-top: 100px;
`;
