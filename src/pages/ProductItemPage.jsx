import { useParams } from "react-router-dom";
import { getReviewById, useFetchProductById } from "../hooks/useHooks";
import Spinner from "../helper/Spinner";

import ProductItem from "../components/ProductItem";
import styled from "styled-components";
import Reviews from "../components/Reviews";
import { useEffect, useState } from "react";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  gap: 1.5rem;
`;

export default function ProductItemPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [review, setReview] = useState({});
  const { category, id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const curr = await useFetchProductById(category, id);
        const data = await curr.json();

        const currReview = await getReviewById(id);
        setProduct(data.data);
        setReview(currReview);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <StyledSection>
      <ProductItem product={product} />
      <Reviews reviews={review} />
    </StyledSection>
  );
}
