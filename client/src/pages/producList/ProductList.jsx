import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="ProductList-Container">
      <Announcement />
      <Navbar />

      <h1 className="Title-Filter">FILTER</h1>
      <div className="ProductList-FilterContainer">
        <div className="ProductList-Filter">
          <span className="Text-Filter">Filter Products:</span>
          <select className="ProductList-Select">
            <option className="ProductList-OptionTitle" disabled selected>
              Color
            </option>
            <option className="ProductList-Option">Nike</option>
            <option className="ProductList-Option">Jordan</option>
            <option className="ProductList-Option">Adidas</option>
            <option className="ProductList-Option">Puma</option>
            <option className="ProductList-Option">Yeezi</option>
            <option className="ProductList-Option">Off White</option>
          </select>
          <select className="ProductList-Select">
            <option className="ProductList-OptionTitle" disabled selected>
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
          <select className="ProductList-Select">
            <option className="ProductList-Option" selected>
              Newest
            </option>
            <option className="ProductList-Option">Price (asc)</option>
            <option className="ProductList-Option">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default ProductList;
