import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getIssueInfo } from "api/client";

import useDidMountEffect from "hooks/useDidMountEffect";
import useInfinityScroll from "hooks/useInfinityScroll";

import { useStateContext, useDispatchContext } from "store/IssuesContext";

import IssueItem from "components/IssueItem";
import AdvertisingBanner from "components/common/AdvertisingBanner";

import { Wrapper } from "styles/PageStyle";
import IssueListSkeleton from "components/common/IssueListSkeleton";

const IssueListPage = () => {
  const issuesData = useStateContext();
  const dispatch = useDispatchContext();

  const [page, setPage] = useState(Math.ceil(issuesData.length / 20));
  const { inView } = useInfinityScroll(setPage);

  // !
  useDidMountEffect(() => {
    getIssueInfo(page).then((res) => {
      if (res.data.length !== 0) {
        dispatch({ type: "ADD", addIssue: res.data });
      }
    });
  }, [page]);

  return (
    <Wrapper>
      {issuesData.map((ItemInfo, index) => (
        <div key={ItemInfo.id}>
          {index === 4 && <AdvertisingBanner />}
          <Link to={`/${ItemInfo.number}`}>
            <IssueItem ItemInfo={ItemInfo} />
          </Link>
        </div>
      ))}

      <div ref={inView}>{IssueListSkeleton()}</div>
    </Wrapper>
  );
};

export default IssueListPage;
