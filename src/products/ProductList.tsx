import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadingProductsAction,
  productLoadedAction,
} from "../actions/products";
import {
  productLoadingSelector,
  productsSelector,
} from "../selectors/products";
import Loading from "../Loading";
import axios from "axios";
import Product from "./Products";

type ProductListPageProps = {};

const ProductListPage: FC<ProductListPageProps> = () => {
  const loading = useSelector(productLoadingSelector);
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingProductsAction());
    axios
      .get("https://myeasykart.codeyogi.io/products")
      .then((response) => dispatch(productLoadedAction(response.data.data)));
  }, []);
  if (loading) {
    return <Loading />;
  }
  console.log(products);
  return (
    <>
      <div className="flex flex-wrap m-auto items-center justify-center">
        {products &&
          products.map((p) => {
            console.log(p);
            if (p) {
              return (
                <Product
                  id={p.id}
                  title={p.title}
                  brand={p.brand}
                  price={p.price}
                  description={p.description}
                  thumbnail={p.thumbnail}
                />
              );
            }
          })}
      </div>
    </>
  );
};
ProductListPage.defaultProps = {};
export default memo(ProductListPage);
