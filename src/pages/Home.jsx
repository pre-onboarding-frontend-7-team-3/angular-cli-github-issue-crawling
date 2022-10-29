/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { dispatchContext, issuesContext } from "../store/IssuesContext";
import { octokitApi } from "../api/client";
import List from "../component/List";
import Header from "../component/Header";
import Advertisement from "../component/Advertisement";
import Spinner from "../component/Loading";

const Home = () => {
  const navigate = useNavigate();

  const issuesData = useContext(issuesContext);
  const dispatch = useContext(dispatchContext);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const observingPoint = useRef();

  useEffect(() => {
    const getData = (page) => {
      octokitApi(page)
        .then((res) => {
          dispatch({ type: "ADD", initIssue: res.data });
          setLoading(true);
        })
        .catch((err) => {
          navigate("/error", { state: "데이터를 불러오는데 실패했습니다" });
        });
    };
    getData(page);
  }, [page]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((page) => page + 1);
          }
        },
        { threshold: 1 },
      );
      observer.observe(observingPoint.current);
    }
  }, [loading]);

  return (
    <div>
      <Header />
      <div>
        {issuesData?.map((list, idx) =>
          idx === 4 ? (
            <Advertisement />
          ) : (
            <Link to={`/detail/${list.number}`} css={linkCss}>
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
