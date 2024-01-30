import React from "react";
import "./About.css"; // add css
const About = () => {
  return (
    <section id="about">
      <div className="about-container section-padding-block common-padding-inline">
        <h2 className="section-heading">About us</h2>

        <div>
          <h3>
            welcome to
            <span className="logo">
              paper <span className="primary-color-text">dekho</span>
              <span className="dotcom">.com</span>
            </span>
            - Your Ultimate Exam Companion!
          </h3>
          <p>
            Hello there! We are Aman Kumar and Prabhjot Singh, the minds behind
            []. As final year BCA students at DAV College, Abohar, we understand
            the challenges that come with preparing for exams, especially when
            it comes to finding reliable resources.
          </p>
          <p>
            Driven by our passion for education and technology, we embarked on a
            mission to create a comprehensive platform that simplifies the
            process of accessing and revising previous year papers for all
            bachelor's and postgraduate degrees. [Your Web App Name] is the
            result of our dedication to making academic resources easily
            accessible to students across India.
          </p>
        </div>

        <div>
          <h3>
            why
            <span className="logo">
              paper <span className="primary-color-text">dekho</span>
              <span className="dotcom">.com</span>
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
