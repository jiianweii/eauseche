import styled from "styled-components";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MainNav = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #00000050;
`;

const ButtonNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  position: relative;
`;

const Icon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
`;

export default function AppNav() {
  const IF_USER_EXISTS = localStorage.getItem("id");
  return (
    <MainNav>
      <Logo />
      <ButtonNav>
        <Link to="/cart">
          <Icon icon={faCartShopping} color="black" />
        </Link>

        <Link
          to={
            IF_USER_EXISTS
              ? localStorage.getItem("isAdmin")
                ? "/admin"
                : "/user"
              : "/login"
          }
        >
          <Icon icon={faUser} color="black" />
        </Link>
      </ButtonNav>
    </MainNav>
  );
}
