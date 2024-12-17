import Spinner from "../helper/Spinner";
import Product from "./Product";
import styled from "styled-components";

const StyledProductListing = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  gap: 15px;
  justify-content: center;
  align-self: center;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default function Products({ products, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <StyledProductListing>
      {products.map((product, key) => (
        <Product key={key} product={product} />
      ))}
    </StyledProductListing>
  );
}
