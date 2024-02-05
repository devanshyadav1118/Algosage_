import React from "react";
import "../index.css"
const Header = () => {
  return (
    <>
      <header>
        <div class="container header__container">
          <div class="header__left">
            <h1>Empowering Tomorrow's Tech, One Algorithm at a Time!</h1>
            <p>
              Welcome to Algosage – where we are dedicated to Empowering
              Tomorrow's Tech, One Algorithm at a Time! Here, we believe in the
              transformative power of mastering Data Structures and Algorithms.
              Join us on this exciting journey of learning and innovation, as we
              pave the way for a future fueled by coding excellence. Let's code,
              create, and conquer the tech landscape together!{" "}
            </p>
            <a href="courses.html" class="btn btn-primary">
              Get Started
            </a>
          </div>

          <div class="header__right">
            <div class="header__right-image">
            <img src="src/assets/images/header.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
