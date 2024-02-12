import React from "react";
import "../App.css";
const Testimonials = () => {
  return (
    <>
      <div className="container testimonials__container mySwiper">
        <h2>Student's Testimonials</h2>
        <div className="swiper-wrapper">
          <article className="testimonial swiper-slide">
            <div className="avatar">
              <img src="src/assets/images/avatar7.jpg" />
            </div>
            <div className="testimonial__info">
              <h5>Abhay Gupta</h5>
              <small>Student</small>
            </div>
            <div className="testimonial__body">
              <p>
                "Algosage transformed my coding skills! The 'Master C++ for
                Competitive Coding' course is top-notch. With expert guidance
                and a vibrant community, I've conquered challenges and landed a
                competitive programming internship. Algosage is a must for
                coding excellence!"{" "}
              </p>
            </div>
          </article>

          <article className="testimonial swiper-slide">
            <div className="avatar">
              <img src="src/assets/images/avatar5.jpg" />
            </div>
            <div className="testimonial__info">
              <h5>Jane Doe</h5>
              <small>Web Developer</small>
            </div>
            <div className="testimonial__body">
              <p>
                "Algosage is a coding gem! The 'Master C++ for Competitive
                Coding' course is a game-changer. I've sharpened my skills,
                cracked coding challenges, and landed exciting opportunities.
                Algosage is the secret sauce for coding success!"
              </p>
            </div>
          </article>

          <article className="testimonial swiper-slide">
            <div className="avatar">
              <img src="src/assets/images/avatar6.jpg" />
            </div>
            <div className="testimonial__info">
              <h5>Anne Rose</h5>
              <small>Fashion Designer</small>
            </div>
            <div className="testimonial__body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, inventore explicabo eveniet voluptatem dolor labore
                sit quibusdam veniam! Incidunt aliquid culpa cumque. Non modi
                consequuntur voluptatum explicabo placeat error nam.
              </p>
            </div>
          </article>

          <article className="testimonial swiper-slide">
            <div className="avatar">
              <img src="src/assets/images/avatar3.jpg" />
            </div>
            <div className="testimonial__info">
              <h5>Edem Quist</h5>
              <small>Student</small>
            </div>
            <div className="testimonial__body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, inventore explicabo eveniet voluptatem dolor labore
                sit quibusdam veniam! Incidunt aliquid culpa cumque. Non modi
                consequuntur voluptatum explicabo placeat error nam.
              </p>
            </div>
          </article>

          <article className="testimonial swiper-slide">
            <div className="avatar">
              <img src="src/assets/images/avatar1.jpg" />
            </div>
            <div className="testimonial__info">
              <h5>Clara Faya</h5>
              <small>Student</small>
            </div>
            <div className="testimonial__body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, inventore explicabo eveniet voluptatem dolor labore
                sit quibusdam veniam! Incidunt aliquid culpa cumque. Non modi
                consequuntur voluptatum explicabo placeat error nam.
              </p>
            </div>
          </article>

          <article className="testimonial swiper-slide">
            <div className="avatar">
              <img src="src/assets/images/avatar2.jpg" />
            </div>
            <div className="testimonial__info">
              <h5>Ernest Achiever</h5>
              <small>Student</small>
            </div>
            <div className="testimonial__body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, inventore explicabo eveniet voluptatem dolor labore
                sit quibusdam veniam! Incidunt aliquid culpa cumque. Non modi
                consequuntur voluptatum explicabo placeat error nam.
              </p>
            </div>
          </article>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default Testimonials;
