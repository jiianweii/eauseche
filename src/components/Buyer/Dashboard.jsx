import styled from "styled-components";
import Sidebar from "./Sidebar";

const StyledDashboard = styled.section`
  display: flex;
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem;
  width: 100%;
  background-color: #e7e7e7;
`;

export default function Dashboard({ setIsLoggedOut, children }) {
  return (
    <StyledDashboard>
      <Sidebar setIsLoggedOut={setIsLoggedOut} />
      {children}
    </StyledDashboard>
  );
}
