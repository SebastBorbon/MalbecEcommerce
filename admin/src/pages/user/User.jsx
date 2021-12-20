import {
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./user.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { format } from "timeago.js";

export default function User() {
  const location = useLocation();
  const malbecUserId = location.pathname.split("/")[2];
  const users = useSelector((state) =>
    state.users.malbecUsers.find((users) => users._id === malbecUserId)
  );
  const history = useHistory();

  useEffect(() => {
    if (!users) {
      history.push("/users");
    }
  }, [users, history]);
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{users.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Details</span>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">
                account created: {format(users.createdAt)}
              </span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{users.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{users.address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={users.username}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={users.email}
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={users.address}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
