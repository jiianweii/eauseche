import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledProductImg = styled.div`
  height: 20rem;
  position: relative;

  & img {
    height: 100%;
    width: 100%;
  }
`;

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StyledHoverDiv = styled.div`
  display: none;
  flex-direction: column;
  background-color: #0000008b;
  height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
`;

const StyledButton = styled.button`
  padding: 4px;
  background-color: #4fa;
  border: none;
  border-radius: 7px;
  width: 100px;
  height: 50px;
  font-weight: 700;
  transition: 0.2s linear all;
  cursor: pointer;

  &:hover {
    background-color: #329b66;
    color: #fff;
  }
`;

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    ${StyledHoverDiv} {
      display: flex;
    }
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export default function Product({ product }) {
  const navigate = useNavigate();

  return (
    <StyledProduct
      onClick={() =>
        navigate(`/${product.gender.toLowerCase()}/${product._id}`)
      }
    >
      <StyledProductImg>
        <img src={`./${product.image}`} />
        <StyledHoverDiv>
          <StyledButton>View Product</StyledButton>
        </StyledHoverDiv>
      </StyledProductImg>
      <StyledProductInfo>
        <h1>{product.name}</h1>
        <p>${product.price.toFixed(2)}</p>
      </StyledProductInfo>
    </StyledProduct>
  );
}
