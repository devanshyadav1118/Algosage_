import React from "react";
import "../index.css";
const Categories = () => {
  return (
    <>
      {" "}
      <section class="categories">
        <div class="container categories__container">
          <div class="categories__left">
            <h1>Categories</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto praesentium facilis voluptatum illum blanditiis
              distinctio nulla quisquam enim quos fugit accusamus, nesciunt
              doloremque tempora quod quo incidunt sint! Iure, reiciendis!
            </p>
            <a href="#" class="btn">
              Learn More
            </a>
          </div>

          <div class="categories__right">
            <article class="category">
              <span class="category__icon">
                <i class="uil uil-bitcoin-circle"></i>
              </span>
              <h5>Blockchain</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
                animi.
              </p>
            </article>

            <article class="category">
              <span class="category__icon">
                <i class="uil uil-palette"></i>
              </span>
              <h5>Graphic Desing</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
                animi.
              </p>
            </article>

            <article class="category">
              <span class="category__icon">
                <i class="uil uil-usd-circle"></i>
              </span>
              <h5>Finance</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
                animi.
              </p>
            </article>

            <article class="category">
              <span class="category__icon">
                <i class="uil uil-megaphone"></i>
              </span>
              <h5>Marketing</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
                animi.
              </p>
            </article>

            <article class="category">
              <span class="category__icon">
                <i class="uil uil-music"></i>
              </span>
              <h5>Music</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
                animi.
              </p>
            </article>

            <article class="category">
              <span class="category__icon">
                <i class="uil uil-puzzle-piece"></i>
              </span>
              <h5>Business</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
                animi.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
