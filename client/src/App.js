import Login from "./pages/login/Login";
import Pay from "./components/pay/Pay";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/producList/ProductList";
import Product from "./pages/ProductPage/Product";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/productList" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/payment" element={<Pay />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
