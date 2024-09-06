import { FC, memo } from "react";
import { useParams } from "react-router-dom";
type OrderDetailsProps = {};
const OrderDetails: FC<OrderDetailsProps> = () => {
  const params = useParams();
  const orderId = params.orderId && +params.orderId;
  return (
    <>
      <h1>This is detail page for order number {orderId}</h1>
    </>
  );
};
OrderDetails.defaultProps = {};
export default memo(OrderDetails);
