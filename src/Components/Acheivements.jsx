import React from "react";

const Acheivements = () => {
  return (
    <>
      <section class="about__achievements">
        <div class="container about__achievements-container">
          <div class="about__achievements-left">
          <img src="src/assets/images/about achievements.svg" alt="" />
          </div>

          <div class="about__achievements-right">
            <h1>Achievements</h1>
            <p>
              At Algosage, we take pride in the early successes and positive
              impact our courses have had on students and the programming
              community. Though in the nascent stages of our journey, we are
              excited to share some noteworthy achievements:{" "}
            </p>
            <div class="achievements__cards">
              <article class="achievement__card">
                <span class="achievement__icon">
                  <i class="uil uil-video"></i>
                </span>
                <h3>60 hrs+</h3>
                <p>Video Content</p>
              </article>

              <article class="achievement__card">
                <span class="achievement__icon">
                  <i class="uil uil-users-alt"></i>
                </span>
                <h3>100+</h3>
                <p>Students</p>
              </article>

              <article class="achievement__card">
                <span class="achievement__icon">
                  <i class="uil uil-award"></i>
                </span>
                <h3>8+</h3>
                <p>Mentors</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Acheivements;
