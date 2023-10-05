import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../../assets/me.jpg";

import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed Projects</small>
            </article>
          </div>
          <p>
            An accomplished professional with a broad range of skills and
            experience in the field of web and mobile development.
          </p>
          <p>
            Experienced Fullstack Engineer with proficiency in developing
            high-quality software solutions and collaborating with
            cross-functional teams. My extensive knowledge of web development
            technologies such as HTML, CSS, Bootstrap, Tailwind CSS, JavaScript,
            TypeScript, React, Next and Mobile development technologies like
            Dart, Flutter, React Native, Swift, Kotlin allows me to build
            applications that are efficient and optimized.
          </p>
          <p>
            My approach to development is rooted in delivering high-quality,
            maintainable code that solves complex problems. Collaboration is key
            to my development philosophy and I am a team player who can work
            seamlessly with cross-functional teams to deliver projects on time
            and within budget.
          </p>
          <p>
            I am seeking a challenging opportunity to leverage my skills and
            experience in a dynamic and collaborative environment to drive
            innovation and create impactful products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
