import "./Success.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Success = () => {
  const location = useLocation();
  const data = location.state.data;
  const cart = location.state.products;
  const [orderId, setOrderId] = useState(null);
  const user = useSelector((state) => state.user.currentUser);
  console.log(location.state);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post("http://localhost:3000/api/orders", {
          userId:
            user._id ??
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjE0ZmM5MWM3ZWMzNTYxZjRjYjNiMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTQzNjEzMH0.mAWnGaeeppSJOliicW3g4w_LCKjqIL2jfu4xjEe20p8",
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch (err) {
        console.log(err);
      }
    };
    if (data) {
      createOrder();
    }
  }, [cart, data]);
  return (
    <div className="Success-Container">
      {orderId
        ? `Thanks for your purchase!  
        Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to="/">
        <button className="btnSuccess">Return to Home</button>
      </Link>
    </div>
  );
};

export default Success;
