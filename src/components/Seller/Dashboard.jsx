import styled from "styled-components";
import Sidebar from "./Sidebar";

const StyledDashboard = styled.section`
  display: flex;
`;

export default function Dashboard({ setIsLoggedOut, Outlet }) {
  return (
    <StyledDashboard>
      <Sidebar setIsLoggedOut={setIsLoggedOut} />
      <Outlet />
    </StyledDashboard>
  );
}
