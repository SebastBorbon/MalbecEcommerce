import React from "react";
import "./Categories.css";
import { categories } from "../../data";
import CategoryItem from "./categoryItem/CategoryItem";

const Categories = () => {
  return (
    <div className="Categories-Container">
      {categories.map((item) => {
        return <CategoryItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Categories;
