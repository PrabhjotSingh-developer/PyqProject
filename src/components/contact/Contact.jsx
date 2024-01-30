import React from "react";
import "./Contact.css"; // add css
const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container section-padding-block common-padding-inline">
        <h2 className="section-heading">Contact us</h2>

        <div className="contact-content">
          <h3>Have a Question or Feedback?</h3>
          <p>
            We value your thoughts, questions, and feedback. Feel free to reach
            out to us using the contact information below. Whether you have a
            suggestion for improvement, a question about our platform, or just
            want to say hello, we're here for you.
          </p>
        </div>
        <div className="contact-content">
          <h3>Emails</h3>
          <p className="email">webwithaman06@gmail.com</p>
          <p className="email">prabhjotsingh@gmail.com</p>
        </div>
        <div className="contact-content">
          <h3>
            Thank You for Choosing&nbsp;
            <h3 className="logo">
              paper<span className="primary-color-text">dekho</span>
              <span className="dotcom">.com</span>
            </h3>
          </h3>
          <p>
            We appreciate your interest in our platform and look forward to
            hearing from you. Your feedback helps us continuously improve and
            enhance the user experience for all students. <br /> <br />
            Best Regards,
          </p>
          <h5 className="founders">
            Aman Kumar & Prabhjot Singh (Founders of{" "}
            <span className="logo">
              paper<span className="primary-color-text">dekho</span>
              <span className="dotcom">.com</span>
            </span>
            )
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Contact;
