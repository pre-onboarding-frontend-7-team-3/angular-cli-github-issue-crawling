import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getIssueInfo } from "api/client";
import { dispatchContext, issuesContext } from "store/IssuesContext";

import IssueItem from "components/IssueItem";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  border: 1px solid black;

  a:link,
  a:visited,
  a:hover {
    color: black;
    text-decoration: none;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 100%;
`;

const IssueListPage = () => {
  const issuesData = useContext(issuesContext);
  const dispatch = useContext(dispatchContext);

  const inView = useRef();

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({ type: "INIT", initIssue: "" });
  }, []);

  useEffect(() => {
    const getData = (page) => {
      getIssueInfo(page).then((res) => {
        dispatch({ type: "ADD", initIssue: res.data });
        setLoading(true);
      });
    };

    getData(page);
  }, [page]);

  useEffect(() => {
    if (loading) {
      const target = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((page) => page + 1);
          }
        },
        { threshold: 1 },
      );
      target.observe(inView.current);
    }
  }, [loading]);

  return (
    <Wrapper>
      {issuesData?.map((ItemInfo, index) => (
        <div key={ItemInfo.id}>
          {index === 4 && (
            <a target="_blank" href="https://www.wanted.co.kr/" rel="noreferrer">
              <Img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
            </a>
          )}
          <Link to={`/${ItemInfo.number}`}>
            <IssueItem ItemInfo={ItemInfo} />
          </Link>
        </div>
      ))}

      <div ref={inView} />
    </Wrapper>
  );
};

export default IssueListPage;
