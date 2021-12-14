import Login from "./pages/login/Login";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/producList/ProductList";
import Product from "./pages/ProductPage/Product";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import Success from "./pages/success/Success";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
