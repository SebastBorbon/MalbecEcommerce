import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { GET_URL } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  const TOKEN = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).currentUser
  ).token;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${GET_URL}user/?new=true`, {
          headers: { token: `Bearer ${TOKEN}` },
        });
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();
  }, [TOKEN]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => {
          return (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  users.img ||
                  "https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
