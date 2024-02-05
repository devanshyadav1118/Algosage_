import React from "react";

const Team = () => {
  return (
    <>
      <section class="team">
        <h2>Meet Our Team</h2>
        <div class="container team__container">
          <article class="team__member">
            <div class="team__member-image">
              <img src="src/assets/images/tm1.jpg" alt="" />
            </div>
            <div class="team__member-info">
              <h4>Priyam Dalmai</h4>
              <p>MLE at American Express</p>
            </div>
            <div class="team__member-socials">
              <a href="https://instagram.com" target="_blank">
                <i class="uil uil-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i class="uil uil-twitter-alt"></i>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <i class="uil uil-linkedin-alt"></i>
              </a>
            </div>
          </article>

          <article class="team__member">
            <div class="team__member-image">
              <img src="src/assets/images/tm2.jpg" alt="" />
            </div>
            <div class="team__member-info">
              <h4>Divya Jaat</h4>
              <p>Expert Tutor</p>
            </div>
            <div class="team__member-socials">
              <a href="https://instagram.com" target="_blank">
                <i class="uil uil-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i class="uil uil-twitter-alt"></i>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <i class="uil uil-linkedin-alt"></i>
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Team;
