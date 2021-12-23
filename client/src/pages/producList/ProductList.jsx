import { useLocation } from "react-router-dom";
import { useState } from "react";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import "./ProductList.css";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState("Newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className="ProductList-Container">
      <Announcement />
      <Navbar />
      <div className="ProductList-FilterContainer">
        <div className="ProductList-Filter">
          <span className="Text-Filter">Filter Products:</span>
          <select
            className="ProductList-Select"
            name="brand"
            onChange={handleFilters}
          >
            <option className="ProductList-Option">nike</option>
            <option className="ProductList-Option">jordan</option>
            <option className="ProductList-Option">adidas</option>
            <option className="ProductList-Option">puma</option>
          </select>
          <select
            className="ProductList-Select"
            name="size"
            onChange={handleFilters}
          >
            <option className="ProductList-OptionTitle" disabled>
              Size
            </option>
            <option className="ProductList-Option">9</option>
            <option className="ProductList-Option">9.5</option>
            <option className="ProductList-Option">10</option>
            <option className="ProductList-Option">10.5</option>
            <option className="ProductList-Option">11</option>
          </select>
        </div>
        <div className="ProductList-Filter">
          <span className="Text-Filter">Sort Products:</span>
          <select
            className="ProductList-Select"
            onChange={(e) => setSort(e.target.value)}
          >
            <option className="ProductList-Option" value="newest">
              Newest
            </option>
            <option className="ProductList-Option" value="asc">
              Price (asc)
            </option>
            <option className="ProductList-Option" value="desc">
              Price (desc)
            </option>
          </select>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default ProductList;
