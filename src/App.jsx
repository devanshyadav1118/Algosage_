import React from "react";

import About from "./Pages/About/About";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
