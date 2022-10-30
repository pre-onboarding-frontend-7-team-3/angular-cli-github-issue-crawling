/** @jsxImportSource @emotion/react */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import Issue from "./Issue";
import { useInView } from "react-intersection-observer";
import { TOKEN } from "../config";
import { Link } from "react-router-dom";
import { Octokit } from "octokit";
import { useIssue } from "../contexts/issueContext";

const Main = () => {
  const [issue, setIssue] = useIssue({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const octokit = new Octokit({
    auth: TOKEN.USER,
  });

  const octokitApi = async () => {
    try {
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
      setLoading(true);
    } catch (err) {
      throw new Error(`Error! Status: ${err.status} Message: ${err.response.data.message}`);
    }
  };

  useEffect(() => {
    if (inView) {
      octokitApi();
    }
  }, [page, inView, loading]);

  return (
    <>
      <Layout>
        <ListLayout>
          {issue?.map((el, idx) => {
            console.log(el.title);
            return (
              <Link key={el.id} to={`/${el.id}`}>
                <div key={el.id}>
                  {issue.length - 1 === idx ? (
                    <Issue
                      {...issue}
                      id={el.id}
                      ref={ref}
                      title={el.title}
                      login={el.user.login}
                      created_at={el.created_at}
                      comments={el.comments}
                    />
                  ) : (
                    <Issue
                      {...issue}
                      id={el.id}
                      title={el.title}
                      login={el.user.login}
                      created_at={el.created_at}
                      comments={el.comments}
                    />
                  )}
                </div>
              </Link>
            );
          })}
          <div ref={ref} />
        </ListLayout>
      </Layout>
    </>
  );
};

export default Main;

export const Layout = styled.div`
  height: 100vh;
  margin: 100px 30px 0 30px;
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListLayout = styled.div`
  height: 100%;
  margin-top: 100px;
`;
