import React from "react";
import "./ProductItem.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ProductItem = ({ item }) => {
  return (
    <div className="ProducItem-Container">
      <div className="ProductItem-Circle">
        <img className="ProductImg" src={item.img} alt="can't charge img" />
        <div className="ProductItem-Info">
          <div className="ProductItem-Icon">
            <ShoppingCartOutlinedIcon />
          </div>
          <div className="ProductItem-Icon">
            <SearchOutlinedIcon />
          </div>
          <div className="ProductItem-Icon">
            <FavoriteBorderOutlinedIcon />
          </div>
        </div>
      </div>
      <h2 className="ProductItem-Name">{item.name}</h2>
    </div>
  );
};
export default ProductItem;
