import "./CategoryItem.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="CategoryItem-Container">
      <img className="CategoryImages" src={item.img} alt=" " />
      <div className="InfoCategory">
        <h1 className="TitleCategory">{item.title}</h1>
        <button className="ButtonCategory">
          <Link className="Link-Category" to={`/product/${item.id}`}>
            Know More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
