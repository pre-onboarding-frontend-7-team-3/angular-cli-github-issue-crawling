/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { dispatchContext, issuesContext } from "../store/IssuesContext";
import { octokitApi } from "../api/client";
import useInfinityScroll from "../hooks/useInfinityScroll";

import List from "../component/List";
import Header from "../component/Header";
import Advertisement from "../component/Advertisement";
import Spinner from "../component/Loading";

const Home = () => {
  const navigate = useNavigate();

  const issuesData = useContext(issuesContext);
  const dispatch = useContext(dispatchContext);

  const [page, setPage] = useState(0);
  const [isInit, setIsInit] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [observingPoint, beginObserving] = useInfinityScroll();

  useEffect(() => {
    const getData = (page) => {
      octokitApi(page)
        .then((res) => {
          if (isInit) {
            window.scrollTo(0, 0);
            dispatch({ type: "INIT", initIssue: res.data });
            setIsInit(false);
          } else {
            res.data.length === 0 && setIsEnd(true);
            dispatch({ type: "ADD", initIssue: res.data });
          }
        })
        .catch((err) => {
          navigate("/error", { state: `데이터를 불러오는데 실패했습니다 ${err}` });
        });
    };

    getData(page);
  }, [page]);

  useEffect(() => {
    if (isInit) {
      beginObserving(() => setPage((page) => page + 1));
    }
  }, [isInit]);

  return (
    <section>
      {issuesData.length && <Header repository_url={issuesData[0]?.repository_url} />}
      {issuesData?.map((list, idx) => (
        <div key={list.number} css={issuesContainer}>
          {idx === 4 && <Advertisement />}
          <Link to={`/detail/${list.number}`} key={list.number} css={linkCss}>
            <List list={list} />
          </Link>
        </div>
      ))}
      {!isEnd && (
        <div ref={observingPoint}>
          <Spinner />
        </div>
      )}
    </section>
  );
};

const issuesContainer = css`
  width: fit-content;
  margin: 0 auto;
`;

const linkCss = css`
  text-decoration: none;
`;

export default Home;
