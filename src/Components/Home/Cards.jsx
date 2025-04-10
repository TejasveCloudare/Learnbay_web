import React, { useEffect, useState } from "react";
import cardStyle from "./Cards.module.css";

const Cards = () => {
  const [data, setData] = useState({ sidebar: [], courses: [] });
  const [managersCourses, setManagersCourses] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [activeProgram, setActiveProgram] = useState(""); // Track active program

  useEffect(() => {
    // Fetch main course data
    fetch("/CourseData.json")
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading CourseData.json:", error));

    // Fetch ManagersCourseData.json
    fetch("/ManagersCourseData.json")
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((json) => setManagersCourses(json.courses))
      .catch((error) =>
        console.error("Error loading ManagersCourseData.json:", error)
      );
  }, []);

  // Show only 9 courses if showAll is false
  const displayedCourses = showAll ? data.courses : data.courses.slice(0, 9);

  // Filter courses based on the selected program
  const filterCoursesByProgram = (program) => {
    setActiveProgram(program);
  };

  // Filter courses by active program
  const filteredCourses =
    activeProgram === ""
      ? data.courses
      : data.courses.filter((course) => course.target.includes(activeProgram));

  return (
    <div className={cardStyle.container}>
      {/* Sidebar */}
      <aside className={cardStyle.sidebar}>
        <h2 className={cardStyle.sidebarTitle}>Popular Programs</h2>
        <ul className={cardStyle.sidebarList}>
          {data.sidebar.map((item, index) => (
            <li
              key={index}
              className={`${cardStyle.sidebarItem} ${
                activeProgram === item ? cardStyle.active : ""
              }`} // Add active class if the program is selected
              onClick={() => filterCoursesByProgram(item)} // Set the active program
            >
              <span className={cardStyle.sidebarIcon}>📘</span>
              <span className={cardStyle.sidebarText}>{item}</span>
              {item === "GEN AI" && (
                <span className={cardStyle.sidebarNew}>NEW</span>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Cards Section */}
      <main className={cardStyle.cardsSection}>
        <div className={cardStyle.cardGrid}>
          {filteredCourses.map((course, index) => (
            <div key={index} className={cardStyle.card}>
              {course.image && (
                <div className={cardStyle.imageWrapper}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className={cardStyle.cardImage}
                  />
                </div>
              )}
              <div className={cardStyle.cardHeader}>
                <span className={cardStyle.provider}>{course.provider}</span>
              </div>
              <h3 className={cardStyle.title}>{course.title}</h3>
              <ul className={cardStyle.details}>
                <li>📅 {course.duration}</li>
                <li>🎓 {course.certification}</li>
                <li>👨‍💼 {course.target}</li>
              </ul>
              <div className={cardStyle.actions}>
                <button className={cardStyle.brochureBtn}>Brochure ⬇</button>
                <button className={cardStyle.viewBtn}>View Details</button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && data.courses.length > 9 && (
          <div className={cardStyle.viewMoreWrapper}>
            <button
              className={cardStyle.viewMoreBtn}
              onClick={() => setShowAll(true)}
            >
              View More
            </button>
          </div>
        )}

        {/* Extra Courses from ManagersCourseData.json */}
        {managersCourses.length > 0 && (
          <div className={cardStyle.extraCourses}>
            <h2 className={cardStyle.extraCoursesTitle}>
              More Courses for Managers
            </h2>
            <div className={cardStyle.cardGrid}>
              {managersCourses.map((course, index) => (
                <div key={index} className={cardStyle.card}>
                  {course.image && (
                    <div className={cardStyle.imageWrapper}>
                      <img
                        src={course.image}
                        alt={course.title}
                        className={cardStyle.cardImage}
                      />
                    </div>
                  )}
                  <div className={cardStyle.cardHeader}>
                    <span className={cardStyle.provider}>
                      {course.provider}
                    </span>
                  </div>
                  <h3 className={cardStyle.title}>{course.title}</h3>
                  <ul className={cardStyle.details}>
                    <li>📅 {course.duration}</li>
                    <li>🎓 {course.certification}</li>
                    <li>👨‍💼 {course.target}</li>
                  </ul>
                  <div className={cardStyle.actions}>
                    <button className={cardStyle.brochureBtn}>
                      Brochure ⬇
                    </button>
                    <button className={cardStyle.viewBtn}>View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cards;
