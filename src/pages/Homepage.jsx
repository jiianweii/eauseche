import styled from "styled-components";
import Carousel from "../helper/Carousel";
import Policies from "../components/Policies";
import TopSalesProduct from "../components/TopSalesProduct";

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default function Homepage() {
  return (
    <HomeSection>
      <Carousel />
      <Policies />
      <TopSalesProduct />
    </HomeSection>
  );
}
