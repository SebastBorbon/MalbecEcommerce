import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { logOut } from "../../redux/userReducer";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/products/${search}`);
    }
  };
  const HandlelogOut = () => {
    if (user) {
      dispatch(logOut());
      window.location.reload();
    }
  };
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="navbar-Language">EN</span>
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
          {user ? (
            <div className="navbar-User">
              <div className="MenuItem">
                Hi: <b>{user.username}!</b>
              </div>
              <div className="MenuItem">
                <button className="BtnLogOut" onClick={HandlelogOut}>
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div className="navbar-User">
              <div className="MenuItem">
                <Link to="/register" className="LinkItem">
                  Sign up
                </Link>
              </div>
              <div className="MenuItem">
                <Link to="/login" className="LinkItem">
                  Sign in
                </Link>
              </div>
            </div>
          )}
          <Link to="/cart" className="LinkItem">
            <div className="MenuItem">
              <Badge color="primary">
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
