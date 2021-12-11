import React from "react";
import Navbar from "../components/navbar/Navbar";
import Announcement from "../components/announcement/Announcement";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
