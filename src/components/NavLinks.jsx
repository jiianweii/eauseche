import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid #00000050;
  & li {
    list-style: none;

    &:hover {
      padding-top: 9px;
      border-bottom: 3px solid #000;
      /* box-shadow: 0px 2px #000; */
      height: 100%;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-size: 1.2rem;
`;

export default function NavLinks() {
  return (
    <StyledUl>
      <li>
        <StyledNavLink to="/men">Men</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/women">Women</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/kids">Kids</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/toddlers">Toddlers</StyledNavLink>
      </li>
    </StyledUl>
  );
}
