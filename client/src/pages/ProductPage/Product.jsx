import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Product.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/products/find/" + id
        );

        setProduct(res.data);
        console.log(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    //update cart
    dispatch(addProduct({ ...product, quantity, size }));
  };

  return (
    <div className="Product-Container">
      <Navbar />
      <Announcement />
      <div className="Product-Wrapper">
        <div className="Product-ImgContainer">
          <img
            className="Product-Img"
            src={product.imageUrl}
            alt="can't charge img"
          />
        </div>
        <div className="Product-InfoContainer">
          <h1 className="Title-InfoProduct">{product.title}</h1>
          <p className="Desc-InfoProduct">{product.description}</p>
          <span className="Price-InfoProduct">$ {product.price}</span>

          <div className="Product-FilterContainer">
            {product.size?.map((size) => {
              return (
                <button
                  className="Product-BtnSize"
                  key={size}
                  onClick={() => setSize(size)}
                >
                  {size}
                </button>
              );
            })}
          </div>
          <div className="Product-AddContainer">
            <div className="Product-AmountContainer">
              <RemoveIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              />
              <span className="Product-Amount">{quantity}</span>
              <AddIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              />
            </div>
            <button className="Product-BtnCart" onClick={handleClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
