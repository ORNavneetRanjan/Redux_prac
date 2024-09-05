import { ActionCreator } from ".";
import Product from "../models/Product";

export const LOADING_PRODUCTS = "{LOADING_PRODUCTS} ";

export const loadingProductsAction: ActionCreator = () => ({
  type: LOADING_PRODUCTS,
  payload: undefined,
});

export const PRODUCTS_LOADED = "{PRODUCTS_LOADED}";

export const productLoadedAction: ActionCreator<Product[]> = (
  products: Product[]
) => ({
  type: PRODUCTS_LOADED,
  payload: products,
});
