/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import Issue from "../components/Issue";
import { useInView } from "react-intersection-observer";
import { TOKEN } from "../config";
import { Octokit } from "octokit";
import { useIssue } from "../contexts/issueContext";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Main = () => {
  const [issue, setIssue] = useIssue({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const octokit = new Octokit({
    auth: TOKEN.USER,
  });

  const octokitApi = async () => {
    try {
      setLoading(true);
      await octokit
        .request("GET /repos/{owner}/{repo}/issues", {
          owner: "angular",
          repo: "angular-cli",
          state: "open",
          sort: "comments",
          per_page: 10,
          page: page,
        })
        .then(({ data }) => {
          setIssue((prevState) => [...prevState, ...data]);
        });
      setPage((prevState) => prevState + 1);
      setLoading(false);
    } catch (err) {
      setError(true);
      throw new Error(`Error! Status: ${err.status} Message: ${err.response.data.message}`);
    }
  };

  useEffect(() => {
    if (inView) {
      octokitApi();
    }
  }, [page, inView]);

  return (
    <Layout>
      {loading ? <Loading /> : null}
      {error ? <Error /> : null}
      <ListLayout>
        {issue?.map((el, idx) => {
          return (
            <div key={el.id}>
              {issue.length - 1 === idx ? (
                <Issue
                  {...issue}
                  number={el.number}
                  ref={ref}
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
        <div ref={ref} />
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
