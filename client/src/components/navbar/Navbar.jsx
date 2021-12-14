import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="navbar-Language">EN</span>
          <div className="SearchContainer">
            <input className="SearchInput" />
            <SearchIcon
              style={{ color: "black", fontSize: 18, cursor: "pointer" }}
            />
          </div>
        </div>

        <div className="navbar-center">
          <h1 className="Logo">MALBEC</h1>
        </div>
        <div className="navbar-right">
          <div className="MenuItem">Sign up</div>
          <div className="MenuItem">Sign in</div>
          <Link to="/cart">
            <div className="MenuItem">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
