import React from "react";
import "./Courses.css"; // add css

const coursesNames = ["bca", "bsc", "bsc", "bba", "ba","baa","bana","bbaan"];

const Courses = () => {
  return (
    <section id="courses-section">
      <div className="courses-container padding-inline">
        <h2 className="section-heading">courses</h2>

        <div className="courses-cards-container">
          {coursesNames.map((courseName) => {
            return (
              <div className='course-card'>
                <h4>{courseName}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
