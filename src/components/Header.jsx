/** @jsxImportSource @emotion/react */
// import React from "react";
import styled from "@emotion/styled";

const Header = () => {
  return <Layout>Angular / Angular-cli </Layout>;
};

export default Header;

export const Layout = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 80px;
  border: black 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 30px;
  z-index: 1000;
  background-color: beige;
`;
