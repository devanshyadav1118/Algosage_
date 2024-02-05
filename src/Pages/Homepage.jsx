import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import Courseshoe from "../Components/Courseshome";
import Faqs from "../Components/Faqs";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
const Homepage = () => {
  return (
    <>
      <div className="font-montserrat sans-serif leading-7   text-white bg-bg">
        <Navbar />
        <Header />
        <Categories />
        <Courseshoe />
        <Faqs />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
