import styled from "styled-components";

export const StyledColAdmin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem;
  gap: 1rem;
  width: 100%;
  background-color: #e7e7e7;

  & h1 {
    font-size: 2rem;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 2rem;
`;

export const StyledTable = styled.table`
  background-color: #fff;
  border-collapse: collapse;

  & tr th {
    text-align: left;
    border-bottom: 1px solid #bdbdbd;
    font-weight: 300;
  }

  & td {
    border-bottom: 1px solid #bdbdbd;
    font-weight: 700;
  }

  & * {
    font-size: 1.2rem;
    padding: 5px;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  background-color: #3bad4e;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  width: 100vw;
  gap: 1.5rem;

  & h1 {
    font-size: 3rem;
  }
`;
