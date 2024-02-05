import React from "react";

import Homepage from "./Pages/Homepage";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";



const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage/>} />
       
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
