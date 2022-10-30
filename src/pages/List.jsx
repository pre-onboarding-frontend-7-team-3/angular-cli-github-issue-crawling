import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { octokitAPI } from "../api/client";
import Spinner from "../components/common/Spinner";
import Issues from "../components/List/Issues";
import { issueDispatchContext } from "../context/issueContext";

const List = () => {
  const [pageNum,setPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const dispatch = useContext(issueDispatchContext);
  
  const getMoreIssues = async () => {
    return await octokitAPI(pageNum);
  };

  useEffect(() => {
    getMoreIssues().then((data) => {
      if (pageNum === 1) {
        console.log(" INIT ")
        dispatch({ type: "INIT", issues: data });        
      } else {
        dispatch({ type: "ADD", issues: data });        
      }
    });
  }, [pageNum]);

  const observerRef = useRef();

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
      observer.observe(observerRef.current);
    } 
    setLoading(true)
  }, [loading]);

  return (
    <main>
      <Issues />
      <Spinner />
      <footer ref={observerRef}><h1>Footer!!!!!</h1></footer>
    </main>
  );
};

export default List;
