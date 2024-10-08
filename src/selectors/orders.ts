import { createSelector } from "reselect";
import Product from "../models/Product";
import { State } from "../store";
import { productsMapSelector } from "./products";

export function orderStateSelector(state: State) {
  return state.orders;
}

export const orderLoadingSelector = createSelector(
  orderStateSelector,
  function (orderState) {
    return orderState.loading;
  }
);

export const ordersMapSelector = createSelector(
  orderStateSelector,
  (orderSate) => orderSate.orders
);

export const ordersSelector = createSelector(
  ordersMapSelector,
  (normalizedOrders) =>
    Object.keys(normalizedOrders).map((orderId) => normalizedOrders[+orderId])
);

export const ordersProductsSelector = createSelector(
  ordersMapSelector,
  productsMapSelector,
  (orderMap, productsMap) =>
    Object.keys(orderMap).reduce<{
      [orderId: number]: Product[];
    }>((previous, currentOrderId) => {
      const order = orderMap[+currentOrderId];
      const products = order.products.map((pid) => productsMap[pid]);
      return { ...previous, [currentOrderId]: products };
    }, {})
);
