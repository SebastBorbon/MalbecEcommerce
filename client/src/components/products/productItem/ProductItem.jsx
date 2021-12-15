import React from "react";
import "./ProductItem.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
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
            <Link to={`/product/${item._id}`}>
              <SearchOutlinedIcon />
            </Link>
          </div>
        </div>
      </div>
      <h2 className="ProductItem-Name">{item.title}</h2>
    </div>
  );
};
export default ProductItem;
