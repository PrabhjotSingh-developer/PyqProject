import React from "react";
import "./Courses.css"; // add css

// all under graduate courses
const ugCourses = [
  { abbr: "bca", fullForm: "Bachelor of Computer Applications" },
  { abbr: "bba", fullForm: "Bachelor of Business Administration" },
  { abbr: "bcom", fullForm: "Bachelor of Commerce" },
  { abbr: "btech", fullForm: "Bachelor of Technology" },
  { abbr: "ba", fullForm: "Bachelor of Arts" },
  { abbr: "bsc", fullForm: "Bachelor of Science" },
  { abbr: "barch", fullForm: "Bachelor of Architecture" },
  { abbr: "bed", fullForm: "Bachelor of Education" },
  { abbr: "bfa", fullForm: "Bachelor of Fine Arts" },
  { abbr: "bfsc", fullForm: "Bachelor of Fisheries Science" },
  { abbr: "bpharm", fullForm: "Bachelor of Pharmacy" },
  { abbr: "bds", fullForm: "Bachelor of Dental Surgery" },
  { abbr: "bhms", fullForm: "Bachelor of Homeopathic Medicine and Surgery" },
  { abbr: "bams", fullForm: "Bachelor of Ayurvedic Medicine and Surgery" },
  { abbr: "bnb", fullForm: "Bachelor of Naturopathy and Yogic Sciences" },
  { abbr: "bpt", fullForm: "Bachelor of Physiotherapy" },
  { abbr: "llb", fullForm: "Bachelor of Laws" },
];

// all post graduate courses
const pgCourses = [
  { abbr: "mca", fullForm: "Master of Computer Applications" },
  { abbr: "mba", fullForm: "Master of Business Administration" },
  { abbr: "mcom", fullForm: "Master of Commerce" },
  { abbr: "mtech", fullForm: "Master of Technology" },
  { abbr: "ma", fullForm: "Master of Arts" },
  { abbr: "msc", fullForm: "Master of Science" },
  { abbr: "march", fullForm: "Master of Architecture" },
  { abbr: "med", fullForm: "Master of Education" },
  { abbr: "mfa", fullForm: "Master of Fine Arts" },
  { abbr: "mpharm", fullForm: "Master of Pharmacy" },
  { abbr: "mds", fullForm: "Master of Dental Surgery" },
  { abbr: "mhms", fullForm: "Master of Homeopathic Medicine and Surgery" },
  { abbr: "mams", fullForm: "Master of Ayurvedic Medicine and Surgery" },
  { abbr: "mpt", fullForm: "Master of Physiotherapy" },
  { abbr: "llm", fullForm: "Master of Laws" },
];

const Courses = () => {
  return (
    // courses-section
    <section id="courses-section">
      {/* courses-container */}
      <div className="courses-container padding-inline">
        {/* under-graduate courses */}
        <div className="ug-courses">
          {/* section-heading */}
          <h2 className="section-heading">UG courses</h2>

          {/* courses-cards container */}
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

        {/* post-graduate courses */}
        <div className="pg-courses">
          {/* section-heading */}
          <h2 className="section-heading">PG courses</h2>

          {/* courses-cards container */}
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
