import styled from "styled-components";

// const reviews = [
//   {
//     name: "Taylor Napkin",
//     ratings: 4,
//     description:
//       "Shirt quality is good, my boyfriend really loves it. Delivery is quick.",
//   },
//   {
//     name: "Axel Razor",
//     ratings: 5,
//     description: "Very good quality",
//   },
//   {
//     name: "Xandar Martian",
//     ratings: 3,
//     description: "Quick delivery but the deliveryman molested me though.",
//   },
//   {
//     name: "Devon Rapier",
//     ratings: 5,
//     description:
//       "I love this shirt so much, it brings out more flavour to my perfume when I sweat excessively",
//   },
// ];

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledReviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const StyledReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  border: 2px solid #000;
  width: 22.3%;
  height: 10rem;
  padding: 2rem;
`;

const H1 = styled.h1`
  font-size: 3rem;
`;

export default function Reviews({ reviews }) {
  return (
    <StyledDiv>
      <H1>Reviews</H1>
      {reviews.data.length > 0 ? (
        <StyledReviews>
          {reviews.data.map((review) => (
            <StyledReviewCard>
              <h1>{review.customerName}</h1>
              <p>Ratings: {review.ratings}/5</p>
              <p>{review.description}</p>
            </StyledReviewCard>
          ))}
        </StyledReviews>
      ) : (
        <p>No reviews found at the moment</p>
      )}
    </StyledDiv>
  );
}
