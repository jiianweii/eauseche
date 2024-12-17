import Order from "./Order";
import Spinner from "../../helper/Spinner";
import { StyledTable } from "../../helper/GlobalStyles";

export default function OrderTable({ isLoading, data }) {
  if (isLoading) return <Spinner />;

  return (
    <StyledTable>
      <tr>
        <th>Order Date</th>
        <th>Order Id</th>
        <th>Order Items</th>
        <th>Total Price</th>
        <th>Order Status</th>
        <th>Action</th>
      </tr>
      {data.data.map((product, i) => (
        <Order key={i} product={product} />
      ))}
    </StyledTable>
  );
}
