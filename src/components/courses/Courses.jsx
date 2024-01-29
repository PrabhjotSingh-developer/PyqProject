import React from "react";
import "./Courses.css"; // add css

const ugCourses = [
  { abbr: "bca", fullForm: "bachelor of computer applications" },
  { abbr: "bca", fullForm: "bachelor of computer applications" },
  { abbr: "bca", fullForm: "bachelor of computer applications" },
  { abbr: "bca", fullForm: "bachelor of computer applications" },
  { abbr: "bca", fullForm: "bachelor of computer applications" },
  { abbr: "bca", fullForm: "bachelor of computer applications" },
];

const pgCourses = [
  { abbr: "bca", fullForm: "bachelor of computer applications" },
  { abbr: "bca", fullForm: "bachelor of computer applications" },
  { abbr: "bca", fullForm: "bachelor of computer applications" },
  { abbr: "bca", fullForm: "bachelor of computer applications" },
  { abbr: "bca", fullForm: "bachelor of computer applications" },
  { abbr: "bca", fullForm: "bachelor of computer applications" },
];

const Courses = () => {
  return (
    <section id="courses-section">
      <div className="courses-container padding-inline">
        <div className="ug-courses">
          <h2 className="section-heading">UG courses</h2>

          <div className="courses-cards-container">
            {ugCourses.map((course) => {
              return (
                <div className="course-card">
                  <h4>{course.abbr}</h4>
                  <h6>{course.fullForm}</h6>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pg-courses">
          <h2 className="section-heading">PG courses</h2>

          <div className="courses-cards-container">
            {pgCourses.map((course) => {
              return (
                <div className="course-card">
                  <h4>{course.abbr}</h4>
                  <h6>{course.fullForm}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
