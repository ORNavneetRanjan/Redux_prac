import { Link, Route, Routes } from "react-router-dom";

import OrderList from "./products/OrderList";
import OrderDetails from "./products/OrderDetails";
import Home from "./Home";
import ProductList from "./products/ProductList";

function App() {
  return (
    <>
      <div className=" bg-gray-200 min-h-screen  flex flex-col items-center">
        <Routes>
          <Route index element={<ProductList />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/orders/:orderId" element={<OrderDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
