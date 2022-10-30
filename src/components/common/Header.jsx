import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 40px;

  padding: 0 10px;

  font-size: 20px;
  font-weight: 600;

  border: 1px solid black;

  a:link,
  a:visited,
  a:hover {
    color: black;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to={"/"}>Home</Link>
    </Wrapper>
  );
};

export default Header;
