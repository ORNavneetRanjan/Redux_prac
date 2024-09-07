import { AnyAction } from "redux";
import { produce } from "immer";
import {
  LOAD_ORDERS,
  ORDER_DETAIL_LOADED,
  ORDERS_LOADED,
} from "../actions/order";
import { Order } from "../models/Order";
import { normalize, schema } from "normalizr";

type NormalizedOrder = { [id: number]: Order };
export type State = {
  loading: boolean;
  orders: NormalizedOrder;
  order_products: { [orderId: number]: number[] };
};

export const initialState: State = {
  loading: false,
  orders: {},
  order_products: {},
};

export default function ordersReducer(
  currentState = initialState,
  action: AnyAction
): State {
  switch (action.type) {
    case LOAD_ORDERS:
      return produce(currentState, (draft) => {
        draft.loading = true;
      });
    case ORDERS_LOADED:
      return produce(currentState, (draft) => {
        draft.loading = false;
        const orderArr = action.payload;

        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders", {
          products: [productEntity],
        });

        const data = normalize(orderArr, [orderEntity]);
        console.log(data);
        draft.orders = data.entities.orders!;
      });

    case ORDER_DETAIL_LOADED:
      return produce(currentState, (draft) => {
        const order = action.payload;
        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders", {
          products: [productEntity],
        });

        const data = normalize(order, orderEntity);

        draft.orders[order.id] = data.entities.orders![order.id];
      });

    default:
      return currentState;
  }
}
