 import React from 'react'
 
 const Courseshome = () => {
   return (
    <>
    {" "}
    <section class="courses">
      <h2>Our Popular Courses</h2>
      <div class="container courses__container">
        <article class="course">
          <div class="course__image">
            <img src="src/assets/images/C++.png" />
          </div>
          <div class="course__info">
            <h4>Responsive Social Media Website UI Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              ab, nisi iusto nemo aut debitis maiores.
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
            <h4>Responsive SmartHome Website Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              ab, nisi iusto nemo aut debitis maiores.
            </p>
            <a href="courses.html" class="btn btn-primary">
              Learn More
            </a>
          </div>
        </article>
      </div>
    </section>
  </>
   )
 }
 
 export default Courseshome