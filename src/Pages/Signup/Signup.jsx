import React from "react";
import "./Signup.css";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import SignupComponent from "./SignupComponent";

const Signup = () => {
  
  return (
    <>
      <Navbar />
      <SignupComponent/>
      <Footer />
    </>
  );
};

export default Signup;
