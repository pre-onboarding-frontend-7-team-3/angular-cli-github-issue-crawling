/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Container = ({ children }) => {
  return <SubContainer>{children}</SubContainer>;
};

const SubContainer = styled.div``;

export default Container;
