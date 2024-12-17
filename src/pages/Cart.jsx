import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart, getCart } from "../cart/cartSlice";
import CartItem from "../components/Cart/CartItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateOrder } from "../hooks/useHooks";
import toast from "react-hot-toast";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 4rem;

  padding: 2rem 1rem;
  & h1 {
    font-size: 3rem;
    align-self: center;
  }
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: ${(props) => props.type || "center"};
  align-items: ${(props) => props.alignItems || ""};
  gap: ${(props) => props.gap || "4rem"};
`;

const StyledMainCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50rem;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.type || "space-between"};
  height: ${(props) => props.height || "100%"};
  gap: ${(props) => props.gap};
  & h1 {
    font-size: 2rem;
    align-self: flex-start;
  }
`;

const StyledPriceSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30rem;
  width: 30rem;
  border: 8px solid #000;
  padding: 2rem;

  & h1 {
    font-size: 2rem;
  }
`;

const StyledDiscount = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  & input {
    padding: 10px 5px;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  padding: 12px;
  background-color: #000;
  border: none;
  bottom: 0;
  right: 0;
`;

const StyledCheckOut = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
`;

const StyledPara = styled.p`
  color: ${(props) => props.color || "#000"};
`;

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((total, curr) => total + curr.price, 0);
      setTotal(sum.toFixed(2));
      setTax((sum * 0.09).toFixed(2));
    }
  }, [cart]);

  const createOrder = async () => {
    try {
      const id = localStorage.getItem("id");
      if (!id) {
        toast.error("You are not logged in");
        navigate("/login");
      }
      const order = {
        customerId: id,
        products: [...cart],
        totalPrice: total,
        tax,
        status: "Processing",
      };
      const data = await useCreateOrder(order);

      if (data.status == "success") {
        toast.success("Your order has been submitted!");
        dispatch(clearCart());
      }
      if (data.status == "error") toast.error(data.message);
    } catch (err) {
      toast.error(err.message);
    }
  };
  function handleCheckOut() {
    // Check if user is logged in
    if (
      localStorage.getItem("jwt") == null ||
      localStorage.getItem("id") == null
    ) {
      toast.error("Please login before checking out.");
      return navigate("/login");
    }

    createOrder();
  }

  return (
    <StyledSection>
      <h1>Shopping Cart</h1>
      <StyledRow>
        <StyledMainCart>
          {cart.length > 0 ? (
            cart.map((c) => (
              <CartItem
                StyledRow={StyledRow}
                StyledColumn={StyledColumn}
                Item={c}
              />
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </StyledMainCart>
        {cart.length > 0 && (
          <StyledPriceSummary>
            <h1>SUMMARY</h1>
            <StyledDiscount>
              <label htmlFor="discount">DISCOUNT CODE</label>
              <input id="discount" />
              <StyledButton>
                <FontAwesomeIcon icon={faArrowRight} color="white" />
              </StyledButton>
            </StyledDiscount>
            <StyledColumn type="center" height="auto">
              <StyledRow type="space-between">
                <StyledPara>SUBTOTAL:</StyledPara>
                <StyledPara>${total}</StyledPara>
              </StyledRow>
              <StyledRow type="space-between">
                <StyledPara>TAX:</StyledPara>
                <StyledPara>${total > 0 ? tax : "0.00"}</StyledPara>
              </StyledRow>
              <StyledRow type="space-between">
                <StyledPara>DISCOUNT:</StyledPara>
                <StyledPara>$0.00</StyledPara>
              </StyledRow>
              <StyledRow type="space-between">
                <StyledPara color="#ff1f00">TOTAL:</StyledPara>
                <StyledPara color="#ff1f00">
                  $
                  {total > 0
                    ? (Number(total) + Number(tax)).toFixed(2)
                    : "0.00"}
                </StyledPara>
              </StyledRow>
            </StyledColumn>
            <StyledCheckOut onClick={handleCheckOut}>Check Out</StyledCheckOut>
          </StyledPriceSummary>
        )}
      </StyledRow>
    </StyledSection>
  );
}
