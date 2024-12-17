import styled, { keyframes } from "styled-components";

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AnimateLoader = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const StyledSpinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #000;
  width: 120px;
  height: 120px;
  animation: ${AnimateLoader} 2s linear infinite;
`;

export default function Spinner() {
  return (
    <StyledLoader>
      <StyledSpinner />
    </StyledLoader>
  );
}
