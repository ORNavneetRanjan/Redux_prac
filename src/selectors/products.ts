import { State } from "../store";

export function productLoadingSelector(state: State) {
  return state.products.loading;
}

export function productsSelector(state: State) {
  return state.products.products;
}
