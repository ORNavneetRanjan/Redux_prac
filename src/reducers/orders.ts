import { AnyAction } from "redux";
import { produce } from "immer";
import { LOAD_ORDERS, ORDERS_LOADED } from "../actions/order";
import { Order } from "../models/Order";

type NormalizedOrder = { [id: number]: Order };
export type State = {
  loading: boolean;
  orders: NormalizedOrder;
};

export const initialState: State = {
  loading: false,
  orders: {},
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
        const normalizedOrder = orderArr.reduce(function (
          previous: NormalizedOrder,
          current: Order
        ) {
          // delete (current as any)["product"];
          return { ...previous, [current.id]: current };
        },
        {});
        draft.orders = normalizedOrder;
      });
    default:
      return currentState;
  }
}
