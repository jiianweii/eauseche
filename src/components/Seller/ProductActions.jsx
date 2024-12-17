import styled from "styled-components";
import { StyledTable } from "../../helper/GlobalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const StyledAction = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
`;

export default function ProductActions({
  products,
  setCurrentProduct,
  setIsOpenedModal,
}) {
  function handleOpenModal(product) {
    setCurrentProduct(product);
    setIsOpenedModal(true);
  }
  return (
    <StyledTable>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Colors</th>
        <th>Sizes</th>
        <th>Description</th>
        <th>Gender</th>
        <th>Age Group</th>
        <th>Type</th>
        <th>Total Quantity</th>
        <th>Actions</th>
      </tr>
      {products.data.map((product) => {
        return (
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.colours.toString().split(",").join(", ")}</td>
            <td>{product.size.toString().split(",").join(", ")}</td>
            <td>{product.description}</td>
            <td>{product.gender}</td>
            <td>{product.ageGroup}</td>
            <td>{product.type}</td>
            <td>{product.maxQuantity}</td>
            <td>
              <StyledAction onClick={() => handleOpenModal(product)}>
                <FontAwesomeIcon icon={faEllipsisV} />
              </StyledAction>
            </td>
          </tr>
        );
      })}
    </StyledTable>
  );
}
