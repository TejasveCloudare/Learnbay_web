import React, { useEffect, useState } from "react";
import cardStyle from "./Cards.module.css";
import { FiMenu, FiX } from "react-icons/fi"; // You can use any icon lib

const Cards = () => {
  const [data, setData] = useState({ sidebar: [], courses: [] });
  const [managersCourses, setManagersCourses] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [activeProgram, setActiveProgram] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For responsive

  useEffect(() => {
    fetch("/CourseData.json")
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading CourseData.json:", error));

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

  const filterCoursesByProgram = (program) => {
    setActiveProgram(program);
    setIsSidebarOpen(false); // Close sidebar on mobile click
  };

  const filteredCourses =
    activeProgram === ""
      ? data.courses
      : data.courses.filter((course) => course.target.includes(activeProgram));

  return (
    <div className={cardStyle.container}>
      {/* Hamburger for mobile */}
      <div className={cardStyle.mobileHeader}>
        <FiMenu
          className={cardStyle.hamburger}
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className={cardStyle.overlay}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`${cardStyle.sidebar} ${
          isSidebarOpen ? cardStyle.showSidebar : ""
        }`}
      >
        <div className={cardStyle.mobileClose}>
          <FiX onClick={() => setIsSidebarOpen(false)} />
        </div>
        <h2 className={cardStyle.sidebarTitle}>Popular Programs</h2>
        <ul className={cardStyle.sidebarList}>
          {data.sidebar.map((item, index) => (
            <li
              key={index}
              className={`${cardStyle.sidebarItem} ${
                activeProgram === item ? cardStyle.active : ""
              }`}
              onClick={() => filterCoursesByProgram(item)}
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
