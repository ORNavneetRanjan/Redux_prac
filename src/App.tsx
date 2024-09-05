import Clear from "./clear";
import HappyIncrementor from "./HappyIncrementor";
import HappyTracker from "./HappyTracker";
import ProductList from "./products/ProductList";
import SadIncrementor from "./SadIncrementor";
import SadTracker from "./SadTracker";

function App() {
  return (
    <>
      <div className=" bg-gray-200 min-h-screen  flex flex-col items-center">
        <HappyTracker />
        <HappyIncrementor />
        <SadTracker />
        <SadIncrementor />
        <Clear />
        <ProductList />
      </div>
    </>
  );
}

export default App;
