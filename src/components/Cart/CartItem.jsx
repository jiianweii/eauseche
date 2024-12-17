import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeItem } from "../../cart/cartSlice";
import toast from "react-hot-toast";

const StyledCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #000;
  padding-top: 1rem;
  gap: 1rem;
`;

const StyledImg = styled.div`
  height: 10rem;
  width: 10rem;
  background-color: grey;
  & img {
    height: 100%;
    width: 100%;
  }
`;

const StyledRemoveBtn = styled.button`
  background-color: #ff1f00;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  border: none;
  padding: 0 1rem;
  height: 100%;
`;

export default function CartItem({ StyledRow, StyledColumn, Item }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(removeItem(Item.id));
    toast.success(`${Item.name} has been removed.`);
  }
  return (
    <StyledCart>
      <StyledRow alignItems="center" gap="1rem">
        <p>{Item.quantity}x</p>
        <StyledImg>
          <img src={Item.image} />
        </StyledImg>
        <StyledColumn gap="0.5rem">
          <h1>{Item.name}</h1>
          <p>COLOR: {Item.color}</p>
          <p>SIZE: {Item.size}</p>
          <p>PRICE: ${Item.price.toFixed(2)}</p>
        </StyledColumn>
      </StyledRow>
      <StyledRemoveBtn onClick={handleDelete}>X</StyledRemoveBtn>
    </StyledCart>
  );
}
