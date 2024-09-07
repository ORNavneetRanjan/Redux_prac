import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ordersProductsSelector, ordersMapSelector } from "../selectors/orders";
import axios from "axios";
import { orderDetailLoadedAction } from "../actions/order";
import Loading from "../Loading";
type OrderDetailsProps = {};
const OrderDetails: FC<OrderDetailsProps> = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const orderId = params.orderId ? +params.orderId : 1;

  const ordersMap = useSelector(ordersMapSelector);
  const ordersProudctMap = useSelector(ordersProductsSelector);
  const order = ordersMap[orderId];
  const products = ordersProudctMap[orderId];

  useEffect(() => {
    if (!ordersMap[orderId]) {
      axios.get("https://dummyjson.com/carts/" + orderId).then((response) => {
        dispatch(orderDetailLoadedAction(response.data));
      });
    }
  }, [ordersMap, orderId]);

  if (!order) {
    return <Loading />;
  }

  return (
    <>
      <h1>This is detail page for order number {orderId}</h1>
      <div>
        {products.map((p) => (
          <div key={p.id}>{p.title}</div>
        ))}
      </div>
    </>
  );
};
OrderDetails.defaultProps = {};
export default memo(OrderDetails);
