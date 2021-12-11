import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Product.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Product = () => {
  return (
    <div className="Product-Container">
      <Navbar />
      <Announcement />
      <div className="Product-Wrapper">
        <div className="Product-ImgContainer">
          <img
            className="Product-Img"
            src="https://gamarraecommerce.com/wp-content/uploads/2020/06/Jordan-1-Mid-Milan-2.jpg"
            alt="can't charge img"
          />
        </div>
        <div className="Product-InfoContainer">
          <h1 className="Title-InfoProduct">JORDAN 1 MILAN 2</h1>
          <p className="Desc-InfoProduct">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare
          </p>
          <span className="Price-InfoProduct">$ 100</span>

          <div className="Product-FilterContainer">
            <button className="Product-BtnSize">9</button>
            <button className="Product-BtnSize">10</button>
            <button className="Product-BtnSize">11</button>
            <button className="Product-BtnSize">11.5</button>
            <button className="Product-BtnSize">12</button>
            <button className="Product-BtnSize">13</button>
          </div>
          <div className="Product-AddContainer">
            <div className="Product-AmountContainer">
              <RemoveIcon />
              <span className="Product-Amount">1</span>
              <AddIcon />
            </div>
            <button className="Product-BtnCart">ADD TO CART</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
