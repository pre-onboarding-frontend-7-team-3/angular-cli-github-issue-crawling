import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getIssueDetailInfo } from "api/client";

import { markdownToHtml } from "utils/markdownToHtml";

import { Wrapper } from "styles/PageStyle";

const UserImg = styled.img`
  width: 100px;
  height: 100%;
`;

const ArticleHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
`;

const ArticleTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;

  gap: 10px;
`;

const ArticleInfo = styled.div`
  display: flex;

  gap: 10px;
`;

const IssueDeatil = () => {
  const urlData = useParams();
  const [issueDetailData, setIssueDetailData] = useState();
  const [bodyData, setBodyData] = useState();

  useEffect(() => {
    const getData = (num) => {
      getIssueDetailInfo(num).then((res) => {
        setIssueDetailData(res.data);
      });
    };

    getData(urlData.id);
  }, []);

  useEffect(() => {
    const translate = async () => {
      const res = await markdownToHtml(issueDetailData.body);
      setBodyData(res);
    };

    if (issueDetailData) {
      translate();
    }
  }, [issueDetailData]);

  return (
    <Wrapper>
      {issueDetailData && (
        <ArticleHead>
          <UserImg src={issueDetailData.user.avatar_url} />
          <ArticleTextContent>
            <Title>
              <span>#{issueDetailData.number}</span>
              <span>{issueDetailData.title}</span>
            </Title>
            <ArticleInfo>
              <span>{issueDetailData.user.login}</span>
              <span>{issueDetailData.updated_at}</span>
            </ArticleInfo>
          </ArticleTextContent>

          {issueDetailData.comments}
        </ArticleHead>
      )}

      {bodyData && <p dangerouslySetInnerHTML={{ __html: bodyData }}></p>}
    </Wrapper>
  );
};

export default IssueDeatil;
