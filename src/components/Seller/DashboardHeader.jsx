import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  & h1 {
    font-size: 2rem;
  }
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;

  gap: 0.8rem;
  background-color: #fff;
  border-radius: 24px;
  padding: 1rem 1.5rem;
  & h1 {
    font-size: 1rem;
  }
`;

const StyledProfileImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 9999px;
`;

export default function DashboardHeader() {
  return (
    <StyledHeader>
      <h1>DASHBOARD</h1>
      <StyledProfile>
        <StyledProfileImg src="./../profile-picture.PNG" />
        <h1>{localStorage.getItem("name")}</h1>
      </StyledProfile>
    </StyledHeader>
  );
}
