import LogIn from "./components/LogIn/LogIn";
import Pay from "./components/pay/Pay";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/producList/ProductList";
import Product from "./pages/ProductPage/Product";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ProductList" element={<ProductList />} />
        <Route path="/Product" element={<Product />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/payment" element={<Pay />} />
      </Routes>
    </>
  );
}

export default App;
