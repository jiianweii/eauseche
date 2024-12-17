import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoLink = styled(NavLink)`
  font-size: 2.5rem;
  color: #000;
  text-decoration: none;
  font-weight: 500;
`;

export default function Logo() {
  return <LogoLink to="/">EAU SÈCHE</LogoLink>;
}
