import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid #000;
  padding: 20px;
`;

const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
`;

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCartInfo = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledCartSubInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${(props) =>
    props.borderRight &&
    css`
      border-right: 2px solid #000;
      padding-right: 30px;
    `}
  ${(props) =>
    props.borderLeft &&
    css`
      border-left: 2px solid #000;
      padding-left: 30px;
    `}
`;

const StyledProfilePicture = styled.img`
  height: 30px;
  border-radius: 9999px;
`;

const StyledButton = styled(Link)`
  padding: 10px;
  background-color: #000;
  text-decoration: none;
  color: #fff;
  border-radius: 8px;
`;
export default function SellerCard({ seller }) {
  return (
    <StyledCard>
      <StyledCartHeader>
        <StyledProfile>
          <StyledProfilePicture src={seller.image} />
          <StyledProfileInfo>
            <h1>{seller.name}</h1>
            <p>{seller.followers} followers</p>
          </StyledProfileInfo>
        </StyledProfile>

        <StyledButton to="/">Visit Seller</StyledButton>
      </StyledCartHeader>
      <StyledCartInfo>
        <StyledCartSubInfo borderRight>
          <p>Number of Buyers</p>
          <h1>{seller.numBuyers}</h1>
        </StyledCartSubInfo>
        <StyledCartSubInfo>
          <p>Total Ratings</p>
          <h1>{seller.ratings}/5.0</h1>
        </StyledCartSubInfo>
        <StyledCartSubInfo borderLeft>
          <p>C/F Rate</p>
          <h1>{seller.completionRate}%</h1>
        </StyledCartSubInfo>
      </StyledCartInfo>
    </StyledCard>
  );
}
