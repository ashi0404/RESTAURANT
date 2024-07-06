import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to FOODY FRESH COMPANY, where culinary excellence meets a warm, inviting atmosphere. Our chefs are dedicated to crafting delicious, innovative dishes using only the freshest, locally-sourced ingredients. From our farm-to-table approach to our diverse menu, we offer a unique dining experience that caters to all palates.

Our commitment to quality extends beyond the kitchen. We pride ourselves on exceptional service, ensuring every guest feels valued and at home. Whether you're here for a casual lunch, an intimate dinner, or a special celebration, our elegant ambiance and attention to detail promise a memorable visit. Come and savor the flavors of Gourmet Haven, where every meal is a celebration of taste and tradition.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;