import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { octokitAPI } from "../api/issue";
import Spinner from "../components/common/Spinner";
import Issues from "../components/List/Issues";
import { issueDispatchContext } from "../context/issueContext";
import useInfinityScroll from "../hooks/useInfinityScroll";

const List = () => {
  const [observerRef, beginObserving] = useInfinityScroll();
  const [pageNum, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useContext(issueDispatchContext);

  const getMoreIssues = async () => {
    return await octokitAPI(pageNum);
  };

  useEffect(() => {
    getMoreIssues().then((data) => {
      if (pageNum === 1) {
        console.log(" INIT ");
        dispatch({ type: "INIT", issues: data });
      } else {
        dispatch({ type: "ADD", issues: data });
      }
    });
  }, [pageNum]);

  useEffect(() => {
    if (loading) {
      beginObserving(() => setPage((page) => page + 1));
    }
    setLoading(true);
  }, [loading]);

  return (
    <main>
      <Issues />
      <footer ref={observerRef}>
        <Spinner />
      </footer>
    </main>
  );
};

export default List;
