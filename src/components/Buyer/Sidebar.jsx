import styled from "styled-components";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  justify-content: space-between;
  height: 100vh;
  min-width: 20rem;
  box-shadow: 0 2px 4px #00000050;
`;

const StyledSideNav = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 10px;
  & p {
    color: #414141;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  font-weight: 600;
  text-decoration: none;

  padding: 1rem 3rem;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const StyledButton = styled.button`
  background-color: #d15151;
  border: none;
  border-radius: 12px;
  width: 70%;
  padding: 1rem 2rem;
  margin: 0 auto;
  color: #fff;
  cursor: pointer;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export default function Sidebar({ setIsLoggedOut }) {
  // IMPLEMENT LOG OUT BUTTON
  function handleLogOut() {
    setIsLoggedOut(true);
    toast.success("You have logged out successfully.");
  }
  return (
    <StyledSideBar>
      <StyledSideNav>
        <StyledLogo>
          <Logo />
        </StyledLogo>

        <StyledCol>
          <StyledLink to="/user/orders">My Orders</StyledLink>
        </StyledCol>
      </StyledSideNav>
      <StyledButton onClick={handleLogOut}>Log Out</StyledButton>
    </StyledSideBar>
  );
}
