import { FC, memo } from "react";
import Clear from "./clear";
import HappyIncrementor from "./HappyIncrementor";
import HappyTracker from "./HappyTracker";
import ProductList from "./products/ProductList";
import SadIncrementor from "./SadIncrementor";
import SadTracker from "./SadTracker";

type HomeProps = {};
const Home: FC<HomeProps> = () => {
  return (
    <>
      <HappyTracker />
      <HappyIncrementor />
      <SadTracker />
      <SadIncrementor />
      <Clear />
      <ProductList />
    </>
  );
};
Home.defaultProps = {};
export default memo(Home);
