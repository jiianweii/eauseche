import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

export default function Pagination({ length, pageNumber, setPageNumber }) {
  function handlePrevPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }
  function handleNextPage() {
    if (pageNumber < length) {
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <StyledDiv>
      <button onClick={handlePrevPage} disabled={pageNumber === 1}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button>{pageNumber}</button>
      <button onClick={handleNextPage} disabled={pageNumber === length}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </StyledDiv>
  );
}
