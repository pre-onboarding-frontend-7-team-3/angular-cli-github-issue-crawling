/** @jsxImportSource @emotion/react */
import React from "react";
import { useEffect } from "react";
import styled from "@emotion/styled";
import Issue from "./Issue";

const Main = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Layout>
        <ListLayout>
          <Issue />
          <Issue />
          <Issue />
          <Issue />
          <Issue />
        </ListLayout>
      </Layout>
    </>
  );
};

export default Main;

export const Layout = styled.div`
  height: 100vh;
  margin: 100px 30px 0 30px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListLayout = styled.div`
  height: 100%;
  margin-top: 100px;
`;
