import { State } from "../store";

export function orderLoadingSelector(state: State) {
  return state.orders.loading;
}

export function ordersSelector(state: State) {
  const normalizedOrder = state.orders.orders;

  const orderArr = Object.keys(normalizedOrder).map((orderId) => {
    return normalizedOrder[+orderId];
  });
  return orderArr;
}
