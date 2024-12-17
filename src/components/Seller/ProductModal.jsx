import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import {
  useCreateProduct,
  useDeleteProduct,
  useUpdateProduct,
} from "../../hooks/useHooks";

const StyledBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #00000080;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 4rem;
  position: relative;
`;

const StyleCloseBtn = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 2%;
  left: 3%;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

const StyledInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 26rem;

  & input {
    border: 1px solid #000;
    padding: 0.5rem;
  }
  & textarea {
    height: 100px;
    border: 1px solid #000;
    color: #000;
  }
`;

const StyledBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const StyledBtn = styled.button`
  padding: 0.5rem;
  background-color: ${(props) => props.color};
  color: #fff;
`;

const initialState = {
  name: "",
  price: 0,
  image: "TBA",
  colours: "",
  size: "",
  description: "",
  gender: "",
  ageGroup: "",
  type: "",
  maxQuantity: 0,
};

export default function ProductModal({ setIsOpenedModal, product }) {
  const IS_PRODUCT_EXIST = product._id;
  const [currentProduct, setCurrentProduct] = useState(
    IS_PRODUCT_EXIST ? product : initialState
  );

  const [error, setError] = useState("");

  function handleOnChange(type, e) {
    const value = e.target.value;
    setCurrentProduct((previous) => ({
      ...previous,
      [type]: value,
    }));

    if (currentProduct.gender != "" && currentProduct.type != "") {
      setCurrentProduct((previous) => ({
        ...previous,
        image: `${previous.gender}-${previous.type}-1.jpg`.toLowerCase(),
      }));
    }
  }

  function isValid() {
    for (let item in currentProduct) {
      if (currentProduct[item] == "" || currentProduct[item] == 0) {
        return false;
      }
    }

    return true;
  }

  function handleCRUD(type) {
    if (type == "Create" && !isValid()) return;

    if (type == "Create") {
      useCreateProduct(currentProduct);
    }

    if (type == "Update") {
      useUpdateProduct(currentProduct, product._id);
    }

    if (type == "Delete") {
      useDeleteProduct({ _id: product._id });
    }

    setIsOpenedModal(false);
    setCurrentProduct(initialState);
  }

  return (
    <StyledBg>
      <StyledOrder>
        <StyleCloseBtn onClick={() => setIsOpenedModal(false)}>
          <FontAwesomeIcon icon={faX} color="black" />
        </StyleCloseBtn>
        <StyledDiv>
          <StyledInputDiv>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={currentProduct.name}
              onChange={(e) => handleOnChange("name", e)}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              value={currentProduct.price}
              onChange={(e) => handleOnChange("price", e)}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="colours">Colours:</label>
            <input
              type="text"
              id="colours"
              value={currentProduct.colours}
              placeholder="Ex. Black, Blue, Green..."
              onChange={(e) => handleOnChange("colours", e)}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="size">Size:</label>
            <input
              type="text"
              id="size"
              value={currentProduct.size}
              placeholder="Ex. S, M, L, XL..."
              onChange={(e) => handleOnChange("size", e)}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="description">Description:</label>
            <textarea
              type="text"
              id="description"
              value={currentProduct.description}
              onChange={(e) => handleOnChange("description", e)}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              value={currentProduct.image}
              disabled={true}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              value={currentProduct.gender}
              onChange={(e) => handleOnChange("gender", e)}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="ageGroup">Age Group:</label>
            <input
              type="text"
              id="ageGroup"
              value={currentProduct.ageGroup}
              onChange={(e) => handleOnChange("ageGroup", e)}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="type">Type:</label>
            <input
              type="text"
              id="type"
              value={currentProduct.type}
              onChange={(e) => handleOnChange("type", e)}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="maxQuantity">Quantity:</label>
            <input
              type="text"
              id="maxQuantity"
              value={currentProduct.maxQuantity}
              onChange={(e) => handleOnChange("maxQuantity", e)}
            />
          </StyledInputDiv>
          <StyledBtnDiv>
            <StyledBtn
              color="#2dc034"
              onClick={() => {
                handleCRUD(IS_PRODUCT_EXIST ? "Update" : "Create");
              }}
            >
              {IS_PRODUCT_EXIST ? "Update" : "Create"}
            </StyledBtn>
            {IS_PRODUCT_EXIST && (
              <StyledBtn
                color="#ee4c4c"
                onClick={() => {
                  handleCRUD("Delete");
                }}
              >
                Delete
              </StyledBtn>
            )}
          </StyledBtnDiv>
        </StyledDiv>
      </StyledOrder>
    </StyledBg>
  );
}
