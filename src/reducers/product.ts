import { AnyAction } from "redux";
import { produce } from "immer";
import {} from "../actions/mood-action";
import Product from "../models/Product";
import { LOADING_PRODUCTS, PRODUCTS_LOADED } from "../actions/products";

export type State = {
  products: Product[];
  loading: boolean;
};

export const initialState: State = {
  products: [],
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
        draft.products = action.payload;
        draft.loading = false;
      });
    default:
      return currentState;
  }
}
