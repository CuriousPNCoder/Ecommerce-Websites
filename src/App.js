// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/productlist";
import CategoryProducts from "./components/categoryproducts";
import Topnav from "./components/styles/topnav";
import HeroSection from "./components/styles/herosection";
import Cart from "./components/cart";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./store";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Topnav />
        <HeroSection />
        <div>
          <main>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route
                path="/product/:categoryId"
                element={<CategoryProducts />}
              />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
