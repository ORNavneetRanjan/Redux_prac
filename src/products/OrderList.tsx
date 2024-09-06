import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOrderAction, ordersLoadedAction } from "../actions/order";
import axios from "axios";
import { orderLoadingSelector, ordersSelector } from "../selectors/orders";
import Loading from "../Loading";
import { Link } from "react-router-dom";
type OrderListProps = {};
const OrderList: FC<OrderListProps> = () => {
  const dispatch = useDispatch();

  const ordersLoading = useSelector(orderLoadingSelector);
  const orders = useSelector(ordersSelector);

  useEffect(() => {
    dispatch(loadOrderAction());
    axios.get("https://dummyjson.com/carts").then((response) => {
      dispatch(ordersLoadedAction(response.data.carts));
    });
  }, []);
  if (ordersLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        {orders.map((o) => (
          <div key={o.id}>
            <Link
              to={"/orders/" + o.id}
              className="text-blue-400 cursor-pointer"
            >
              Order number {o.id}
            </Link>
            , total: {o.total}
            products: {o.totalProducts}
          </div>
        ))}
      </div>
    </>
  );
};
OrderList.defaultProps = {};
export default memo(OrderList);
