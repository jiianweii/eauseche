import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../hooks/useHooks";
import styled from "styled-components";
import Spinner from "../helper/Spinner";
import Products from "../components/Products";

const StyledSection = styled.section`
  display: flex;
  width: 70%;
  margin: 0 auto;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 50px;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & h1 {
    font-size: 3.5rem;
  }
  & ul {
    display: flex;
    gap: 1.5rem;
  }

  & ul li {
    list-style-type: none;

    padding-right: 20px;
    border-right: 2px solid #000;
  }
  & ul li:nth-last-child(-n + 1) {
    border: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: #313131;
  font-weight: 500;

  &:hover {
    color: #000;
  }
`;

export default function TopSalesProduct() {
  const param = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productListing, setProductListing] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const products = await fetchProducts();
        const data = await products.json();
        setProductListing(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <StyledSection>
      <StyledHeader>
        <h1>Top Sales</h1>
        <ul>
          <li>
            <StyledLink to="/men">Men</StyledLink>
          </li>
          <li>
            <StyledLink to="/women">Women</StyledLink>
          </li>
          <li>
            <StyledLink to="/kids">Kids</StyledLink>
          </li>
          <li>
            <StyledLink to="/toddlers">Toddlers</StyledLink>
          </li>
        </ul>
      </StyledHeader>
      <Products products={productListing.data} isLoading={isLoading} />
    </StyledSection>
  );
}
