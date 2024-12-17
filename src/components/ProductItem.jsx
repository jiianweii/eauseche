import styled, { css } from "styled-components";
import DropDownList from "./DropDownList";
// import SellerCard from "./SellerCard";
import { useState } from "react";
import { addItem } from "../cart/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

// const sellerInfo = {
//   name: "Vos Leon",
//   image: "./../profile-picture.PNG",
//   followers: "12,491",
//   numBuyers: 10491,
//   ratings: 4.5,
//   completionRate: 87,
// };

const StyledDiv = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 5rem;
  height: 100vh;
`;

const StyledImage = styled.div`
  height: 100%;
  width: 60%;

  & img {
    height: 100%;
    width: 100%;
  }
`;

const StyledComponents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5rem;
  width: 30%;
`;

const StyledRow = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "0.2rem"};
  align-items: center;
  width: ${(props) => props.width || "auto"};

  ${(props) =>
    props.spacing === "space-between" &&
    css`
      justify-content: space-between;
    `}
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap && "1.5rem"};
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.color};
  height: 30px;
  width: 30px;
  border-radius: 9999px;
  padding: 5px;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
  ${(props) =>
    props.type == "color" &&
    css`
      height: 2rem;
      width: 2rem;
      border: none;
      padding: 10px;
      border-radius: 12px;
    `}

  ${(props) =>
    props.type == "atc" &&
    css`
      height: 100%;
      width: 100px;
      border: none;
      padding: 10px;
      background-color: #000;
      color: #fff;
      border-radius: 10px;
      &:hover {
        background-color: #3a3a3a;
      }
    `}

  ${(props) =>
    props.type == "size" &&
    css`
      height: 3.5rem;
      width: 3.5rem;
      padding: 7px;

      background-color: #fff;
      border-radius: 12px;
    `}

    ${(props) =>
    props.type == "color" &&
    props.active &&
    css`
      border: 2px solid #000;
    `}

    ${(props) =>
    props.type == "size" &&
    props.active &&
    css`
      color: #fff;
      border: 1px solid #fff;
      background-color: #000;
    `}
`;

const H1 = styled.h1`
  font-size: 3rem;
`;
const H2 = styled.h2`
  font-size: 2rem;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
`;

const ParaWarning = styled.p`
  color: #ff0000;
`;

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddItem() {
    const newCartItem = {
      id: product._id,
      name: product.name,
      image: product.image,
      quantity,
      price: quantity * product.price,
      size,
      color: color.toUpperCase(),
    };

    dispatch(addItem(newCartItem));
    toast.success("Item has been added to cart");
  }

  return (
    <StyledDiv>
      <StyledImage>
        <img src={`./../${product.image}`} />
      </StyledImage>
      <StyledComponents>
        <StyledCol gap>
          <H1>{product.name.toUpperCase()}</H1>
          <StyledRow>
            {product.colours.map((c, i) => (
              <StyledButton
                key={i}
                color={c}
                type="color"
                active={color === c}
                onClick={() => setColor(c)}
              />
            ))}
          </StyledRow>
          <p>COLOR: {color.toUpperCase()}</p>
          <StyledRow>
            {product.size.map((s, i) => (
              <StyledButton
                key={i}
                type="size"
                active={size === s}
                onClick={() => setSize(s)}
              >
                {s}
              </StyledButton>
            ))}
          </StyledRow>
          <H2>${product.price.toFixed(2)}</H2>
          {product.maxQuantity <= 10 && (
            <ParaWarning>
              This item is selling fast. Only {product.maxQuantity} left in
              stock!
            </ParaWarning>
          )}
          <StyledRow spacing="space-between">
            <StyledRow spacing="space-between" width="7rem">
              <StyledButton
                onClick={() =>
                  setQuantity(quantity > 1 ? quantity - 1 : quantity)
                }
                disabled={quantity === 1}
              >
                -
              </StyledButton>
              <H3>{quantity}</H3>
              <StyledButton
                onClick={() =>
                  setQuantity(
                    quantity < product.maxQuantity ? quantity + 1 : quantity
                  )
                }
                disabled={quantity === product.maxQuantity}
              >
                +
              </StyledButton>
            </StyledRow>
            <StyledButton
              type="atc"
              disabled={!color || !size || !quantity}
              onClick={handleAddItem}
            >
              Add To Cart
            </StyledButton>
          </StyledRow>
        </StyledCol>
        {/* <StyledCol>
          <SellerCard seller={sellerInfo} />
        </StyledCol> */}
        <StyledCol>
          <DropDownList
            title="Details"
            description={product.description}
            borderTop
          />
          <DropDownList
            title="Material"
            description={product.description}
            borderTop
          />
          <DropDownList
            title="Shipping"
            description={product.description}
            borderTop
            borderBot
          />
        </StyledCol>
      </StyledComponents>
    </StyledDiv>
  );
}
