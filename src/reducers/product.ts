import { AnyAction } from "redux";
import { produce } from "immer";
import {} from "../actions/mood-action";
import Product from "../models/Product";
import { LOADING_PRODUCTS, PRODUCTS_LOADED } from "../actions/products";
import { ORDER_DETAIL_LOADED, ORDERS_LOADED } from "../actions/order";
import { normalize, schema } from "normalizr";

type NormalizedProducts = {
  [id: number]: Product;
};

type State = {
  products: NormalizedProducts;
  loading: boolean;
};

export const initialState: State = {
  products: {},
  loading: false,
};

export default function productReducer(
  currentState = initialState,
  action: AnyAction
): State {
  switch (action.type) {
    case LOADING_PRODUCTS:
      return produce(currentState, (draft) => {
        draft.loading = true;
      });

    case PRODUCTS_LOADED:
      return produce(currentState, (draft) => {
        const products = action.payload;
        const normalizedProducts = products.reduce(function (
          previous: NormalizedProducts,
          current: Product
        ) {
          return { ...previous, [current.id]: current };
        });

        draft.products = normalizedProducts;
        draft.loading = false;
      });

    case ORDERS_LOADED:
      return produce(currentState, (draft) => {
        const orders = action.payload;

        const products = orders.reduce(function (
          previous: Product[],
          current: any
        ) {
          return [...previous, ...current.products];
        },
        []);

        const normalizedProducts = products.reduce(function (
          previous: NormalizedProducts,
          current: Product
        ) {
          return { ...previous, [current.id]: current };
        });

        draft.products = normalizedProducts;
      });

    case ORDER_DETAIL_LOADED:
      return produce(currentState, (draft) => {
        const order = action.payload;
        const productEntity = new schema.Entity("products");
        const data = normalize(order.products, [productEntity]);

        draft.products = { ...draft.products, ...data.entities.products };
      });
    default:
      return currentState;
  }
}
