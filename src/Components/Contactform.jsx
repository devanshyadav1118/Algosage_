import React from 'react';



const Contactform = () => {
  return (
    <section className="contact">
      <div className="container contact__container">
        <aside className="contact__aside">
          <div className="aside__image">
          <img src="src/assets/images/Contact.svg" alt="" />
          </div>
          <h2>Contact Us</h2>
          <p>
            Have a question or eager to learn more? Reach out to us! Our team is here to assist you on your journey
            with Algosage—your destination for mastering Data Structures, Algorithms, and Competitive Coding.
          </p>
          <ul className="contact__details">
            <li>
              <i className="uil uil-phone-times"></i>
              <h5>+91 9305366856</h5>
            </li>
            <li>
              <i className="uil uil-envelope"></i>
              <h5>dydevansh@gmail.com</h5>
            </li>
            <li>
              <i className="uil uil-location-point"></i>
              <h5>Punjab, India</h5>
            </li>
          </ul>
          <ul className="contact__socials">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-instagram-alt"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-linkedin-alt"></i>
              </a>
            </li>
          </ul>
        </aside>

        <form action="https://formspree.io/f/mgejgopb" method="POST" className="contact__form">
          <div className="form__name">
            <input type="text" name="First Name" placeholder="First Name" required />
            <input type="text" name="Last Name" placeholder="Last Name" required />
          </div>
          <input type="email" name="Email Address" placeholder="Your Email Address" required />
          <textarea name="Message" rows="7" placeholder="Message..." required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contactform;
