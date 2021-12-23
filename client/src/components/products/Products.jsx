import "./Products.css";
import ProductItem from "./productItem/ProductItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { GET_URL } from "../../requestMethods";
const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `${GET_URL}products?category=${category}`
            : `${GET_URL}products`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    if (filters) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "Newest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div className="Products-Container">
      {category
        ? filteredProducts.map((item) => {
            return <ProductItem item={item} key={item._id} />;
          })
        : products.slice(0, products.length).map((item) => {
            return <ProductItem item={item} key={item._id} />;
          })}
    </div>
  );
};
export default Products;
