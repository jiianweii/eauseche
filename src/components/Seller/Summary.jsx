import {
  faBagShopping,
  faDollarSign,
  faListCheck,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import Spinner from "../../helper/Spinner";
import OrderTable from "./OrderTable";
import { useQuery } from "@tanstack/react-query";
import { useFetchOrders } from "../../hooks/useHooks";

const StyledH1 = styled.h1`
  font-size: 2rem;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
  ${(props) =>
    props.type == "cards" &&
    css`
      gap: 3rem;
      /* justify-content: space-between; */
    `};
  ${(props) =>
    props.type == "container" &&
    css`
      justify-content: space-between;
    `}
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${(props) => props.gap};
`;

const StyledSummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1rem;
  width: 25%;
  border-radius: 12px;
  box-shadow: 0 2px 4px #00000050;

  & h1 {
    font-size: 1.5rem;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;
  padding: 2px;
  background-color: ${(props) => props.bg};
  border-radius: 9999px;
`;

export default function Summary() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["order"],
    queryFn: useFetchOrders,
  });

  if (isLoading) return <Spinner />;

  const totalRevenue = data.data.reduce(
    (val, curr) => val + curr.totalPrice + curr.tax,
    0
  );
  return (
    <StyledCol gap="2rem">
      <StyledCol gap="1rem">
        <StyledH1>Overview</StyledH1>
        <StyledRow type="cards">
          <StyledSummaryCard>
            <StyledRow gap="0.5rem">
              <StyledIcon bg="#95D7A3">
                <FontAwesomeIcon icon={faDollarSign} size="xl" />
              </StyledIcon>
              <StyledCol>
                <h1>Total Revenue</h1>
                <h2>S${totalRevenue.toFixed(2)}</h2>
              </StyledCol>
            </StyledRow>
          </StyledSummaryCard>
          <StyledSummaryCard>
            <StyledRow gap="0.5rem">
              <StyledIcon bg="#D15151">
                <FontAwesomeIcon icon={faUserGroup} size="xl" />
              </StyledIcon>
              <StyledCol>
                <h1>Total Users</h1>
                <h2>{data.userLength}</h2>
              </StyledCol>
            </StyledRow>
          </StyledSummaryCard>
          <StyledSummaryCard>
            <StyledRow gap="0.5rem">
              <StyledIcon bg="#3153D8">
                <FontAwesomeIcon icon={faListCheck} size="xl" />
              </StyledIcon>
              <StyledCol>
                <h1>Total Orders</h1>
                <h2>{data.length}</h2>
              </StyledCol>
            </StyledRow>
          </StyledSummaryCard>
          <StyledSummaryCard>
            <StyledRow gap="0.5rem">
              <StyledIcon bg="#ecc956">
                <FontAwesomeIcon icon={faBagShopping} size="xl" />
              </StyledIcon>
              <StyledCol>
                <h1>Total Product</h1>
                <h2>{data.productLength}</h2>
              </StyledCol>
            </StyledRow>
          </StyledSummaryCard>
        </StyledRow>
      </StyledCol>
      <StyledCol gap="1rem">
        <StyledH1>Recent Orders</StyledH1>
        <OrderTable isLoading={isLoading} data={data} />
      </StyledCol>
    </StyledCol>
  );
}
