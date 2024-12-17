import styled from "styled-components";
import { useFetchOrdersById } from "./../../hooks/useHooks";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./../../helper/Spinner";
import Modal from "../Modal";
import { useState } from "react";
import { StyledDiv } from "../../helper/GlobalStyles";
import { useNavigate } from "react-router-dom";

const StyledOrdersDiv = styled.table`
  box-shadow: 0 4px 8px #00000025;
  width: 80%;

  text-align: left;
  border-collapse: collapse;

  & th {
    font-size: 1.2rem;
  }
  & th,
  td {
    border-bottom: 1px solid #00000040;
    padding: 0.5rem;
  }
`;

export default function TrackOrder() {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [currProduct, setCurrProduct] = useState({});
  const { isLoading, data, error } = useQuery({
    queryKey: ["order"],
    queryFn: () => useFetchOrdersById(id),
  });

  if (isLoading) return <Spinner />;
  // TOKEN expired / Incorrect Token
  if (data.status == "error") return navigate("/login");
  if (data.status == "fail")
    return (
      <StyledDiv>
        <h1>My Orders</h1>
        <p>No orders yet</p>
      </StyledDiv>
    );
  const products = data.data;
  return (
    <StyledDiv>
      <h1>My Orders</h1>
      <StyledOrdersDiv>
        <tr>
          <th>Order Id</th>
          <th>Order Date</th>
          <th>Order Items</th>
          <th>Total Price</th>
          <th>Order Status</th>
        </tr>
        {products.map((product) => {
          return (
            <tr
              onClick={() => {
                setCurrProduct(product);
                setIsOpenedModal(true);
              }}
            >
              <td>{product._id}</td>
              <td>{product.date}</td>
              <td>
                {product.products.map((p) => {
                  return (
                    <p>
                      {p.name} x{p.quantity} [{p.color}]
                    </p>
                  );
                })}
              </td>
              <td>${product.totalPrice + product.tax}</td>
              <td>{product.status}</td>
            </tr>
          );
        })}
      </StyledOrdersDiv>
      {isOpenedModal && (
        <Modal setIsOpenedModal={setIsOpenedModal} product={currProduct} />
      )}
    </StyledDiv>
  );
}
