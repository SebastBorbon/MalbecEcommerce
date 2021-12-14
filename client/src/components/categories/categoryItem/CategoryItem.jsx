import "./CategoryItem.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4);
`;
const CategoryItem = ({ item }) => {
  return (
    <div className="CategoryItem-Container">
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <div className="InfoCategory">
          <h1 className="TitleCategory">{item.title}</h1>
          <button className="ButtonCategory">Know More</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
