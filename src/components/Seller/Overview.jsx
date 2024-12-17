import { StyledColAdmin } from "../../helper/GlobalStyles";
import DashboardHeader from "./DashboardHeader";
import Summary from "./Summary";

export default function Overview() {
  return (
    <StyledColAdmin>
      <DashboardHeader />
      <Summary />
    </StyledColAdmin>
  );
}
