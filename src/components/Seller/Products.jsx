import { useQuery } from "@tanstack/react-query";
import {
  StyledButton,
  StyledColAdmin,
  StyledH1,
  StyledRow,
} from "../../helper/GlobalStyles";
import ProductActions from "./ProductActions";
import { useFetchAllProducts } from "../../hooks/useHooks";
import Spinner from "../../helper/Spinner";
import styled from "styled-components";
import ProductModal from "./ProductModal";
import { useState } from "react";

const StyledDiv = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  background-color: #e7e7e7;
`;

export default function Products() {
  const [currentProduct, setCurrentProduct] = useState({});
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const { isLoading, data, error } = useQuery({
    queryKey: ["product"],
    queryFn: useFetchAllProducts,
  });

  if (isLoading) return <Spinner />;

  function handleOpenModal() {
    setCurrentProduct({});
    setIsOpenedModal(true);
  }
  return (
    <StyledDiv>
      <StyledColAdmin>
        <StyledRow>
          <StyledH1>Products</StyledH1>
          <StyledButton onClick={handleOpenModal}>Add New Product</StyledButton>
        </StyledRow>
        <ProductActions
          products={data}
          setCurrentProduct={setCurrentProduct}
          setIsOpenedModal={setIsOpenedModal}
        />
      </StyledColAdmin>
      {isOpenedModal && (
        <ProductModal
          product={currentProduct}
          setIsOpenedModal={setIsOpenedModal}
        />
      )}
    </StyledDiv>
  );
}
