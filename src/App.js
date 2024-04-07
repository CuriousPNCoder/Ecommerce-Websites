// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/productlist";
import CategoryProducts from "./components/categoryproducts";
import Topnav from "./components/styles/topnav";
import HeroSection from "./components/styles/herosection";

const App = () => {
  return (
    <Router>
      <Topnav />
      <HeroSection />
      <div>
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:categoryId" element={<CategoryProducts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
