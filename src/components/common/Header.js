import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Angular / Anuglar-cli</HeaderText>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.section`
  height: 15vh;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h1``;
