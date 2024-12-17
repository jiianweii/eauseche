import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { fetchProducts } from "../hooks/useHooks";
import styled from "styled-components";
import Spinner from "../helper/Spinner";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import { useQuery } from "@tanstack/react-query";

const StyledSection = styled.section`
  display: flex;
  width: 70%;
  margin: 0 auto;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 50px;
  margin-top: 50px;
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
`;

const StyledSubHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & ul {
    display: flex;
    padding-left: 80px;
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

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

const StyledDropDownSelect = styled.select`
  padding: 10px 5px;
`;

export default function ProductPage() {
  const { category } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [sortValue, setSortValue] = useState("price");
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    isLoading,
    data: productListing,
    error,
  } = useQuery({
    queryKey: [
      "product",
      category,
      searchParams.get("type"),
      sortValue,
      pageNumber,
    ],
    queryFn: async () => {
      const products = await fetchProducts(
        category,
        searchParams.get("type"),
        sortValue,
        pageNumber
      );
      const data = await products.json();

      return data;
    },
  });

  useEffect(() => {
    setPageNumber(1);
  }, [category, searchParams.get("type")]);

  if (isLoading) return <Spinner />;

  return (
    <StyledSection>
      <StyledHeader>
        <h1>ALL {category.toLocaleUpperCase()}</h1>
        <StyledSubHeader>
          <p>Showing 1 to {productListing.data.length} items</p>
          <ul>
            <li>
              <StyledLink to={`/${category}?type=T-Shirt`}>T-Shirt</StyledLink>
            </li>
            <li>
              <StyledLink to={`/${category}?type=Shorts`}>Shorts</StyledLink>
            </li>
            <li>
              <StyledLink to={`/${category}?type=Pants`}>Pants</StyledLink>
            </li>
            <li>
              <StyledLink to={`/${category}?type=Jeans`}>Jeans</StyledLink>
            </li>
          </ul>
          <StyledDropDownSelect
            value={sortValue}
            onChange={(e) => {
              setSortValue(e.target.value);
            }}
          >
            <option value="price">Sort By Price: Lowest to Highest</option>
            <option value="-price">Sort By Price: Highest to Lowest</option>
            <option value="maxQuantity">Sort By Stock</option>
            <option value="ratings">Sort By Ratings</option>
          </StyledDropDownSelect>
        </StyledSubHeader>
      </StyledHeader>
      <Products products={productListing.data} isLoading={isLoading} />
      <StyledFooter>
        <Pagination
          length={productListing.totalPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </StyledFooter>
    </StyledSection>
  );
}
