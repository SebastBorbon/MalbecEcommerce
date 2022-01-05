import "./newProduct.css";
import { useState } from "react";
import { addProducts } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}
export default function NewProduct() {
  const [size, setSizes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSizes = (e) => {
    setSizes(e.target.value.split(","));
  };
  const handleCategories = (e) => {
    setCategories(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault(e);
    const product = { ...inputs, size, categories };
    addProducts(product, dispatch);
    toast("new product created!");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            name="imageUrl"
            type="text"
            id="file"
            placeholder="image link"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Product Name</label>
          <input
            name="title"
            type="text"
            placeholder="Shoes Name"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>description</label>
          <input
            name="description"
            type="text"
            placeholder="Description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="$  USD"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input type="text" placeholder="text" onChange={handleSizes} />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="text" onChange={handleCategories} />
        </div>
        <div className="addProductItem">
          <label>Brand</label>
          <select name="brand" onChange={handleChange}>
            <option value="adidas">adidas</option>
            <option value="nike">nike</option>
            <option value="jordan">jordan</option>
            <option value="new balance">new balance</option>
            <option value="puma">puma</option>
            <option value="off white">off white</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Stock</label>
          <select name="Stock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleClick}>
          Create
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
