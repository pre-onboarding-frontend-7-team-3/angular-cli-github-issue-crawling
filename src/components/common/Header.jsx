import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useStateContext } from "store/IssuesContext";
import useDidMountEffect from "hooks/useDidMountEffect";
import cutParams from "utils/cutParams";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 60px;

  padding: 0 10px;

  font-size: 24px;
  font-weight: 600;

  margin-top: -50px;

  border: 1px solid black;

  background-color: white;

  a:link,
  a:visited,
  a:hover {
    color: black;
    text-decoration: none;
  }

  cursor: pointer;
`;

const Header = () => {
  const issuesData = useStateContext();
  const [headerObj, setHeaderObj] = useState(null);

  useDidMountEffect(() => {
    const { organization, repository } = cutParams(issuesData[0].repository_url);
    setHeaderObj({ organization: organization, repository: repository });
  }, [issuesData]);

  // detail 페이지 내 새로고침의 경우는, 헤더가 날라감.
  // 왜냐? 새로고침은 컨텍스트를 죽이니까

  return (
    <Wrapper>
      <Link to={"/"}>{headerObj && `${headerObj.organization} / ${headerObj.repository}`}</Link>
    </Wrapper>
  );
};

export default memo(Header);
