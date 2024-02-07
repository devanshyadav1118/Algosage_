import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Acheivements from "../../Components/Acheivements";
import Team from "../../Components/Team";
import './About.css'
const About = () => {
  return (
    <>
      <Navbar />
      <Acheivements />
      <Team />
      <Footer />
    </>
  );
};

export default About;
