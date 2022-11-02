import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 10px;
`;

const Img = styled.img`
  width: 250px;
  height: 100%;
`;

const AdvertisingBanner = () => {
  return (
    <a target="_blank" href="https://www.wanted.co.kr/" rel="noreferrer">
      <Wrapper>
        <Img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
      </Wrapper>
    </a>
  );
};

export default AdvertisingBanner;
