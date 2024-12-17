import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Spinner from "../../helper/Spinner";
import { useUpdateStatus } from "../../hooks/useHooks";
import toast from "react-hot-toast";

const StyledStatus = styled.div`
  padding: 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #7cdb46;
  ${(props) =>
    props.status == "Processing" &&
    css`
      background-color: #e45454;
    `}
`;

const StyledActionBtn = styled.select`
  width: 100%;
  padding: 0.5rem;
`;

export default function Order({ product }) {
  const [currentProduct, setCurrentProduct] = useState(product);
  const [currentAction, setCurrentAction] = useState(product.status);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const changeStatus = async () => {
      try {
        setIsLoading(true);
        const data = await useUpdateStatus(product._id, currentAction);
        const res = await data.json();
        setCurrentProduct({
          ...currentProduct,
          status: currentAction,
        });

        return res;
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };

    changeStatus();
  }, [currentAction]);

  const statusList = [
    "Processing",
    "Confirmed",
    "Packed",
    "Out for Delivery",
    "Delivered",
  ];

  const toRemove = statusList.indexOf(currentProduct.status);
  const newArr = statusList.splice(toRemove);

  if (isLoading) return <Spinner />;

  return (
    <tr>
      <td>{currentProduct.date}</td>
      <td>{currentProduct._id}</td>
      <td>
        {currentProduct.products.map((p) => {
          return (
            <p>
              {p.name} x{p.quantity} [{p.color}]
            </p>
          );
        })}
      </td>
      <td>${(currentProduct.totalPrice + currentProduct.tax).toFixed(2)}</td>
      <td>
        <StyledStatus status={currentProduct.status}>
          {currentProduct.status}
        </StyledStatus>
      </td>
      <td>
        <StyledActionBtn
          onChange={(e) => {
            toast.success("You have successfully updated the status");
            setCurrentAction(e.target.value);
          }}
          value={currentAction}
        >
          {newArr.map((val, key) => {
            return (
              <option value={val} key={key}>
                {val}
              </option>
            );
          })}
        </StyledActionBtn>
      </td>
    </tr>
  );
}
