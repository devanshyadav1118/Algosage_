import React from "react";

const Section = () => {
  return (
    <>
      <section class="courses">
        <div class="container courses__container">
          <article class="course">
            <div class="course__image">
              <img src="src/assets/images/C++.png" />
            </div>
            <div class="course__info">
              <h4>
                ASGE 101: Master C++
                <br /> For Competitive Coding
              </h4>
              <p>
                Unlock the full potential of C++ and elevate your competitive
                coding skills with our comprehensive course. Whether you're a
                beginner looking to grasp the fundamentals or an experienced
                coder aiming to refine your techniques, "Master C++ for
                Competitive Coding" is designed to empower you with the
                expertise needed to excel in programming competitions and
                real-world scenarios.{" "}
              </p>
              <a href="courses.html" class="btn btn-primary">
                Learn More
              </a>
            </div>
          </article>

          <article class="course">
            <div class="course__image">
              <img src="src/assets/images/course22.png" />
            </div>
            <div class="course__info">
              <h4>ASGE Premium A1</h4>
              <p>
                <ul>
                  <li>Includes an interview bootcamp </li>
                  <li>
                    Enjoy access to our content for one year(paid extensions
                    available){" "}
                  </li>
                </ul>
              </p>
              <a href="courses.html" class="btn btn-primary">
                Learn More
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Section;
