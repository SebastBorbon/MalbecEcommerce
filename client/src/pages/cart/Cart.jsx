import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51K4szeFnWhKaaSIYZQC8u4CsYNcIs7xfYZclOULVwtAG72nfWToBFrSIqsUHQuRhpA9FvjeSsUNdqoxRISR8Cjsb004orMmqWe";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          }
        );
        navigate("/success", { state: { data: res.data, products: cart } });
      } catch (err) {
        console.log(err);
      }
    };
    if (stripeToken && cart.total > 1) {
      makeRequest();
    }
  }, [stripeToken, cart, navigate]);

  return (
    <div className="Cart-Container">
      <Navbar />
      <Announcement />
      <div className="Cart-Wrapper">
        <h1 className="Cart-Title">YOUR BAG</h1>
        <div className="Cart-Top">
          <button className="BtnTop">Continue Shopping</button>
          <div className="TextCart-Container">
            <span className="TextTop">Shopping Bag (N)</span>
            <span className="TextTop">Your wishlist (N)</span>
          </div>
          <button className="BtnTop">Check Out</button>
        </div>
        <div className="Cart-Bottom">
          <div className="Cart-Info">
            {cart.products.map((product) => {
              return (
                <div className="Cart-Products">
                  <div className="Cart-Detail">
                    <img
                      className="CartProduct-img"
                      src={product.imageUrl}
                      alt="can't charge the img"
                    />
                    <div className="CartProduct-Details">
                      <span className="CartProduct-Name">
                        <b>Product: </b> {product.title}
                      </span>
                      <span className="CartProduct-Size">
                        <b>Size: </b>
                        {product.size}
                      </span>
                      <span className="CartProduct-Id">
                        <b>ID: </b>
                        {product._id}
                      </span>
                    </div>
                  </div>
                  <div className="CartPrice-Detail">
                    <div className="CartPrice-Container">
                      <AddIcon />
                      <div className="CartPrice-Product">
                        {product.quantity}
                      </div>
                      <RemoveIcon />
                    </div>
                    <div className="CartProduct-Price">
                      $ {product.price * product.quantity}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Cart-Summary">
            <h1 className="CartSummary-Title">Order Summary</h1>
            <div className="CartSummary-Items">
              <span className="CartSummary-Text">Subtotal</span>
              <span className="CartSummary-Text">$ {cart.total}</span>
            </div>
            <div className="CartSummary-Items">
              <span className="CartSummary-Text">Shipping</span>
              <span className="CartSummary-Text">$ 9.90</span>
            </div>
            <div className="CartSummary-Items">
              <span className="CartSummary-Text">Total</span>
              <span className="CartSummary-Total">$ {cart.total}</span>
            </div>
            <StripeCheckout
              name="Malbec"
              image=""
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="BtnPayCart">Pay Now</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
