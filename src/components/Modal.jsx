import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Progress from "./Progress";

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
  background-color: #fff;
  height: 80%;
  width: 60%;
  position: relative;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  width: 80%;
  margin: 0 auto;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & div {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20rem;

    & h1 {
      font-size: 1.2rem;
    }
    & p {
      font-size: 1.2rem;
    }
  }
  & h1 {
    font-size: 1.2rem;
  }
`;

const StyleCloseBtn = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 1%;
  left: 1%;
  cursor: pointer;
`;

const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  margin: 0 auto;
`;

const H1 = styled.p`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 50px;
`;

export default function Modal({ setIsOpenedModal, product }) {
  return (
    <StyledBg>
      <StyledOrder>
        <StyleCloseBtn onClick={() => setIsOpenedModal(false)}>
          <FontAwesomeIcon icon={faX} color="black" />
        </StyleCloseBtn>
        <StyledDiv>
          <StyledHeader>
            <H1>
              Order ID: {product._id} ({product.status})
            </H1>
            <h2>Date: {product.date}</h2>
            <div>
              <h3>
                To: {product.name} ({product.email})
              </h3>
              <h3>Payment By: VISA</h3>
            </div>
          </StyledHeader>

          <Progress status={product.status} />
          <StyledTable>
            <tr>
              <th>Product Id</th>
              <th>Name</th>
              <th>Color</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {product.products.map((p, i) => {
              return (
                <tr key={i}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.color}</td>
                  <td>{p.quantity}</td>
                  <td>${p.price.toFixed(2)}</td>
                </tr>
              );
            })}
          </StyledTable>
          <StyledTotal>
            <div>
              <h1>Tax: </h1>
              <p>${product.tax}</p>
            </div>
            <div>
              <h1>Discount: </h1>
              <p>$0.00</p>
            </div>
            <div>
              <h1>Total: </h1>
              <p>${product.tax + product.totalPrice}</p>
            </div>
          </StyledTotal>
        </StyledDiv>
      </StyledOrder>
    </StyledBg>
  );
}
