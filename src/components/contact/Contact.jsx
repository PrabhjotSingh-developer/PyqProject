import React from "react";
import "./Contact.css"; // add css
const Contact = () => {
  return (
    <section id="about">
      <div className="about-container section-padding-block common-padding-inline">
        <h2 className="section-heading">About us</h2>

        <div className="about-content">
          <h3>
            welcome to&nbsp;
            <h3 className="logo">
              paper<span className="primary-color-text">dekho</span>
              <span>.com</span>
            </h3>
            &nbsp;- Your Ultimate Exam Companion!
          </h3>
          <p>
            Hello there! We are Aman Kumar and Prabhjot Singh, the minds behind
            [paperdekho.com]. As final year BCA students at DAV College, Abohar,
            we understand the challenges that come with preparing for exams,
            especially when it comes to finding reliable resources.
          </p>
          <p>
            Driven by our passion for education and technology, we embarked on a
            mission to create a comprehensive platform that simplifies the
            process of accessing and revising previous year papers for all
            bachelor's and postgraduate degrees. [paperdekho.com] is the result
            of our dedication to making academic resources easily accessible to
            students across India.
          </p>
        </div>

        <div className="about-content">
          <h3>
            why&nbsp;
            <h3 className="logo">
              paper<span className="primary-color-text">dekho</span>
              <span className="dotcom">.com</span>
            </h3>
          </h3>

          <ul>
            <li>
              <span>Extensive Collection :</span>
              <span>
                We've curated an extensive collection of previous year papers
                for various courses, making it a one-stop destination for exam
                preparation.
              </span>
            </li>
            <li>
              <span>User-Friendly Interface: </span>
              <span>
                We've curated an extensive collection of previous year papers
                for various courses, making it a one-stop destination for exam
                preparation.
              </span>
            </li>
            <li>
              <span>Collaborative Effort: </span>
              <span>
                Our user-friendly interface ensures a seamless experience,
                allowing you to quickly find and download the papers you need.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
