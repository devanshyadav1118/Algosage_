import React from "react";

const Faqs = () => {
  return (
    <>
      <section class="faqs">
        <h2>Frequently Asked Questions</h2>
        <div class="container faqs__container">
          <article class="faq">
            <div class="faq__icon">
              <i class="uil uil-plus"></i>
            </div>
            <div class="question__answer">
              <h4>Why Should I Prefer This Site?</h4>
              <p>
                Choose Algosage for a transformative learning experience! Our
                platform stands out with expert-led courses, real-world
                applications, and a supportive community. Whether you're a
                beginner or seasoned coder, Algosage is your gateway to
                mastering Data Structures, Algorithms, and Competitive Coding
                for a successful tech journey{" "}
              </p>
            </div>
          </article>

          <article class="faq">
            <div class="faq__icon">
              <i class="uil uil-plus"></i>
            </div>
            <div class="question__answer">
              <h4>How Do I Know The Right Courses For Me?</h4>
              <p>
                Discover the perfect courses tailored for your coding journey at
                Algosage! Our user-friendly platform offers detailed course
                descriptions, learning objectives, and prerequisites. If you're
                unsure, our support team is ready to guide you. Whether you're a
                novice or expert, find the ideal path to elevate your skills in
                Data Structures, Algorithms, and Competitive Coding.{" "}
              </p>
            </div>
          </article>

          <article class="faq">
            <div class="faq__icon">
              <i class="uil uil-plus"></i>
            </div>
            <div class="question__answer">
              <h4>What are the Prices of Your Package Web Software?</h4>
              <p>
                Explore our competitive pricing plans for web software packages
                at Algosage. We offer flexible options to suit various needs,
                providing access to high-quality courses on Data Structures,
                Algorithms, and Competitive Coding. Check out our pricing page
                for detailed information and choose the package that aligns with
                your learning goals and preferences.{" "}
              </p>
            </div>
          </article>

          <article class="faq">
            <div class="faq__icon">
              <i class="uil uil-plus"></i>
            </div>
            <div class="question__answer">
              <h4>How can I access the course materials after enrollment?</h4>
              <p>
                Once you enroll in a course at Algosage, you will gain instant
                access to our user-friendly platform. Simply log in to your
                account, where you'll find all course materials, lectures, and
                supplementary resources. Our platform is designed for seamless
                navigation, making it easy for you to progress through the
                content at your own pace. Should you encounter any issues, our
                dedicated support team is readily available to assist you on
                your learning journey.{" "}
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Faqs;
