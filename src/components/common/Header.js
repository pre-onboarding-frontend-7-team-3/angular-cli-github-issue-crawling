import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Angular / Anuglar-cli</HeaderText>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 15vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h1``;
