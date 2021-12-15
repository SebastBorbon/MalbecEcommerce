import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/products/${search}`);
    }
  };
  const HandlelogOut = () => {
    if (user) {
      window.localStorage.removeItem("persist:root");
      window.location.reload();
    }
  };
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <div className="SearchContainer">
            <input
              className="SearchInput"
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon
              onClick={handleClick}
              style={{ color: "black", fontSize: 18, cursor: "pointer" }}
            />
          </div>
        </div>

        <div className="navbar-center">
          <Link to="/" className="LinkItem">
            <h1 className="Logo">MALBEC</h1>
          </Link>
        </div>
        <div className="navbar-right">
          <div className="MenuItem">Sign up</div>
          <div className="MenuItem">Sign in</div>
          <Link to="/cart">
            <div className="MenuItem">
>>>>>>> main
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
