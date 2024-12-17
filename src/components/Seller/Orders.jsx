import { useQuery } from "@tanstack/react-query";
import { useFetchOrders } from "../../hooks/useHooks";
import { StyledColAdmin, StyledH1 } from "../../helper/GlobalStyles";
import OrderTable from "./OrderTable";
import Spinner from "../../helper/Spinner";

export default function Orders() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["order"],
    queryFn: useFetchOrders,
  });

  if (isLoading) return <Spinner />;
  return (
    <StyledColAdmin>
      <StyledH1>All Orders</StyledH1>
      <OrderTable isLoading={isLoading} data={data} />
    </StyledColAdmin>
  );
}
