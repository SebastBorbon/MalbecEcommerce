import React from "react";
import "./topbar.css";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOut } from "../../redux/userReducer";
import { useDispatch } from "react-redux";

export default function Topbar() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const HandlelogOut = () => {
    if (user) {
      dispatch(logOut());
      window.localStorage.removeItem("TOKEN");
      window.localStorage.removeItem("persist:root");
      history.push("/");
    }
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Malbec Admin</span>
        </div>
        <div className="topRight">
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
                <Link to="/" className="LinkItem">
                  Sign in
                </Link>
              </div>
            </div>
          )}
          <img
            src="https://raw.githubusercontent.com/SebastBorbon/Portfolio/main/public/profileellie.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
