import React, { useEffect, useState } from "react";
import cardStyle from "./Cards.module.css";
import { FiX } from "react-icons/fi";
import { FaAngleDoubleRight } from "react-icons/fa";
import courseData from "../../Assets/JSON files/CourseData.json";
import ManagersCourseData from "../../Assets/JSON files/ManagersCourseData.json";
import BrochureModal from "./BrochureModal";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  const [data, setData] = useState({ sidebar: [], courses: [] });
  const [managersCourses, setManagersCourses] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [activeProgram, setActiveProgram] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setData(courseData);
    setManagersCourses(ManagersCourseData);
    AOS.init({ duration: 800, once: true });
  }, []);

  const filterCoursesByProgram = (program) => {
    setActiveProgram(program);
    setShowAll(program === "Certification Courses");
    setIsSidebarOpen(false);
  };

  const filteredCourses =
    activeProgram === "" || showAll
      ? data.courses
      : data.courses.filter((course) =>
          course.target.toLowerCase().includes(activeProgram.toLowerCase())
        );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "brochure.pdf";
    link.click();
  };

  const handleBrochureClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (selectedCourse) {
      const link = document.createElement("a");
      link.href = "/src/Assets/brochure/brochure.pdf";
      link.download = "brochure.pdf";
      link.click();
    }
    setIsModalOpen(false);
  };

  return (
    <div className={`${cardStyle.container} ${cardStyle.fadeIn}`}>
      <div className={cardStyle.mobileHeader}>
        <FaAngleDoubleRight
          className={cardStyle.hamburger}
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>

      {isSidebarOpen && (
        <div
          className={cardStyle.overlay}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

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

      <main className={cardStyle.cardsSection}>
        <div className={cardStyle.cardGrid}>
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className={cardStyle.card}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {course.image && (
                <div className={cardStyle.imageWrapper}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className={cardStyle.cardImage}
                  />
                </div>
              )}
              {/* <div className={cardStyle.cardHeader}>
                <span className={cardStyle.provider}>{course.provider}</span>
              </div> */}
              <h3 className={cardStyle.title}>{course.title}</h3>
              <ul className={cardStyle.details}>
                <li>📅 {course.duration}</li>
                <li>🎓 {course.certification}</li>
                <li>👨‍💼 {course.target}</li>
              </ul>
              <div className={cardStyle.actions}>
                <button
                  className={cardStyle.brochureBtn}
                  onClick={() => setShowModal(true)}
                >
                  Brochure ⬇
                </button>
                <button className={cardStyle.viewBtn}>View Details</button>
              </div>
            </div>
          ))}
        </div>

        {!showAll && filteredCourses.length > 9 && (
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
                <div
                  key={index}
                  className={cardStyle.card}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
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
                    <button
                      className={cardStyle.brochureBtn}
                      onClick={() => handleBrochureClick(course)}
                    >
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

      <BrochureModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onDownload={handleDownload}
      />
    </div>
  );
};

export default Cards;
