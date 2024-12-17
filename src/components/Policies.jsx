import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const PolicySection = styled.section`
  display: flex;
  justify-content: center;
  gap: 15rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #000;
`;

const PolicyDiv = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 20rem;
`;

const PolicyDivHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  height: 2.5rem;
`;

export default function Policies() {
  return (
    <PolicySection>
      <PolicyDiv>
        <StyledIcon icon={faTruck} />
        <PolicyDivHeader>
          <h1>Fast Delivery</h1>
          <p>Your items will be delivered between 1-3 working days</p>
        </PolicyDivHeader>
      </PolicyDiv>
      <PolicyDiv>
        <StyledIcon icon={faCreditCard} />
        <PolicyDivHeader>
          <h1>Fast and Secured Payment</h1>
          <p>
            We will ensure that your private information will be safeguarded
          </p>
        </PolicyDivHeader>
      </PolicyDiv>
      <PolicyDiv>
        <StyledIcon icon={faBagShopping} />
        <PolicyDivHeader>
          <h1>Returns and Refunds</h1>
          <p>
            We will refund your money if you are unsatisfied with the product
          </p>
        </PolicyDivHeader>
      </PolicyDiv>
    </PolicySection>
  );
}
