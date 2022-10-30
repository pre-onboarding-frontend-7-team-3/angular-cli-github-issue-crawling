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

  const [page, setPage] = useState(1);
  const [isInit, setIsInit] = useState(true);
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
            dispatch({ type: "ADD", initIssue: res.data });
          }
        })
        .catch((err) => {
          navigate("/error", { state: "데이터를 불러오는데 실패했습니다" });
        });
    };
    getData(page);
  }, [page]);

  useEffect(() => {
    if (isInit) {
      beginObserving(() => setPage((page) => page + 1));
      //   const observer = new IntersectionObserver(
      //     (entries) => {
      //       if (entries[0].isIntersecting) {
      //         setPage((page) => page + 1);
      //       }
      //     },
      //     { threshold: 1 },
      //   );
      //   observer.observe(observingPoint.current);
      // }
    }
  }, [isInit]);

  return (
    <div>
      <div>
        {issuesData?.map((list, idx) =>
          idx === 4 ? (
            <Advertisement key={list.number} />
          ) : (
            <Link to={`/detail/${list.number}`} key={list.number} css={linkCss}>
              <List list={list} />
            </Link>
          ),
        )}
      </div>
      <div ref={observingPoint}>
        <Spinner />
      </div>
    </div>
  );
};

const linkCss = css`
  text-decoration: none;
`;

export default Home;
