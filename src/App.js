import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ProductList from "./components/productlist";
import CategoryProducts from "./components/categoryproducts";
import Topnav from "./components/styles/topnav";
import HeroSection from "./components/styles/herosection";
import Cart from "./components/cart";
import { Provider } from "react-redux";
import store from "./store";
import OrderForm from "./components/styles/orderform";
import Footer from "./components/styles/footer";
import Blog from "./components/blog";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Topnav />
      {isHomePage && <HeroSection />}
      <div>
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:categoryId" element={<CategoryProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/buynow" element={<OrderForm />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
