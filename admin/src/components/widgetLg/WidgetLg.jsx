import "./widgetLg.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  const TOKEN = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).currentUser
  ).token;

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/orders/", {
          headers: { token: `Bearer ${TOKEN}` },
        });
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getOrders();
  }, [TOKEN]);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders?.map((order) => {
          return (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{order.userId}</span>
              </td>
              <td className="widgetLgDate">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">${order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
