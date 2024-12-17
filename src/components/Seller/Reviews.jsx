import { useQuery } from "@tanstack/react-query";
import { getAllReviews } from "../../hooks/useHooks";
import {
  StyledColAdmin,
  StyledH1,
  StyledTable,
} from "../../helper/GlobalStyles";
import Spinner from "../../helper/Spinner";
import Review from "./Review";

export default function Reviews() {
  const {
    isLoading,
    data: reviews,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: getAllReviews,
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledColAdmin>
      <StyledH1>All Reviews</StyledH1>
      <StyledTable>
        <tr>
          <th>Date of Review</th>
          <th>Product Info</th>
          <th>Reviewed By</th>
          <th>Ratings</th>
          <th>Description</th>
        </tr>
        {reviews.data.map((review) => (
          <Review review={review} />
        ))}
      </StyledTable>
    </StyledColAdmin>
  );
}
