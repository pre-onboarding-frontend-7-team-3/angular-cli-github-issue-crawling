import styled from "@emotion/styled";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Template>
      <Header />
      {children}
    </Template>
  );
};

export default Layout;

const Template = styled.main`
  padding: 0 20px;
`;