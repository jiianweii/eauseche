import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const StyledDropDown = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  border-top: ${(props) => (props.bordertop ? "1px solid #000" : "none")};
  padding: 1.5rem 0.2rem;
  border-bottom: ${(props) => (props.borderbot ? "1px solid #000" : "none")};
  gap: 1.5rem;
`;

const StyledDropDownTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    font-size: 1.5rem;
  }
`;

const StyledDropDownDes = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
`;
export default function DropDownList({
  title,
  description,
  borderTop,
  borderBot,
}) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <StyledDropDown
      onClick={() => setIsOpened(!isOpened)}
      bordertop={borderTop}
      borderbot={borderBot}
    >
      <StyledDropDownTitle>
        <h1>{title}</h1>

        {isOpened ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </StyledDropDownTitle>
      <StyledDropDownDes display={isOpened}>{description}</StyledDropDownDes>
    </StyledDropDown>
  );
}
