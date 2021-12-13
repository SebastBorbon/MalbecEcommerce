import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
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
            <div className="Cart-Products">
              <div className="Cart-Detail">
                <img
                  className="CartProduct-img"
                  src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F09%2Fg-dragon-peaceminusone-af1-para-noise-2-0-release-date-dd3223-100-000.jpg"
                  alt="can't charge the img"
                />
                <div className="CartProduct-Details">
                  <span className="CartProduct-Name">
                    <b>Product: </b> Nike Air Force 1 Paraonise
                  </span>
                  <span className="CartProduct-Size">
                    <b>Size: </b>
                    10
                  </span>
                  <span className="CartProduct-Id">
                    <b>ID: </b>55555555555555
                  </span>
                </div>
              </div>
              <div className="CartPrice-Detail">
                <div className="CartPrice-Container">
                  <AddIcon />
                  <div className="CartPrice-Product">1</div>
                  <RemoveIcon />
                </div>
                <div className="CartProduct-Price">$ 150</div>
              </div>
            </div>
          </div>
          <div className="Cart-Summary">
            <h1 className="CartSummary-Title">Order Summary</h1>
            <div className="CartSummary-Items">
              <span className="CartSummary-Text">Subtotal</span>
              <span className="CartSummary-Text">$ 150</span>
            </div>
            <div className="CartSummary-Items">
              <span className="CartSummary-Text">Shipping</span>
              <span className="CartSummary-Text">$ 9.90</span>
            </div>
            <div className="CartSummary-Items">
              <span className="CartSummary-Text">Total</span>
              <span className="CartSummary-Total">$ 150</span>
            </div>
            <button className="BtnPayCart">Check Out Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
