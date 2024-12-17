import { faCheck, faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  background-color: #000000;
  height: 1rem;
  position: relative;
  margin: 0 auto;
`;

const StyledProgressBarCompletion = styled.div`
  width: ${(props) => props.complete};
  background-color: #45db31;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 15px -20px 0;
  z-index: 2;
`;

const StyledProgressStatusIcon = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
  background-color: #fff;
  border: 2px solid #000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProgressStatusInfo = styled.div``;

export default function Progress({ status }) {
  const statusArr = [
    "Processing",
    "Confirmed",
    "Packed",
    "Out for Delivery",
    "Delivered",
  ];

  const stage = statusArr.indexOf(status);

  return (
    <StyledProgressBar>
      <StyledProgressBarCompletion complete={(stage / 4) * 100 + "%"} />
      {statusArr.map((val, i) => {
        return (
          <StyledDiv>
            <StyledProgressStatusIcon key={i}>
              <FontAwesomeIcon icon={stage >= i ? faCheck : faHourglass} />
            </StyledProgressStatusIcon>
            <StyledProgressStatusInfo>{val}</StyledProgressStatusInfo>
          </StyledDiv>
        );
      })}
    </StyledProgressBar>
  );
}
