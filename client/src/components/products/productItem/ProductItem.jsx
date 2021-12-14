import React from "react";
import "./ProductItem.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  return (
    <div className="ProducItem-Container">
      <div className="ProductItem-Circle">
        <img
          className="ProductImg"
          src={item.imageUrl}
          alt="can't charge img"
        />
        <div className="ProductItem-Info">
          <div className="ProductItem-Icon">
            <ShoppingCartOutlinedIcon />
          </div>
          <div className="ProductItem-Icon">
            <Link to={`/product/${item._id}`}>
              <SearchOutlinedIcon />
            </Link>
          </div>
          <div className="ProductItem-Icon">
            <FavoriteBorderOutlinedIcon />
          </div>
        </div>
      </div>
      <h2 className="ProductItem-Name">{item.title}</h2>
    </div>
  );
};
export default ProductItem;
