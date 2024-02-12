import React from "react";
import Courses from "./Pages/Courses/Courses.jsx";
import About from "./Pages/About/About";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Signup from "./Pages/Signup/Signup.jsx";
import Login from "./Pages/Login/Login.jsx";
import Contentes from "./Pages/Contentes/Contentes.jsx";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Contentes" element={<Contentes/>} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
