import "./Products.css";
import { popularProducts } from "../../data";
import ProductItem from "./productItem/ProductItem";
const Products = () => {
  return (
    <div className="Products-Container">
      {popularProducts.map((item) => {
        return <ProductItem item={item} key={item.id} />;
      })}
    </div>
  );
};
export default Products;
