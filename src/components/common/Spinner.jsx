import styled from "@emotion/styled";
const Spinner = () => {
  return (
    <SpinnerContainer>
      {" "}
      <Circle />{" "}
    </SpinnerContainer>
  );
};
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
  width: 50%;
  height: 40%;
`;
const Circle = styled.div`
  width: 70px;
  height: 70px;
  border: 10px solid black;
  border-top: 10px solid #fafafa;
  border-radius: 50%;
  animation: spin 3s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Spinner;
