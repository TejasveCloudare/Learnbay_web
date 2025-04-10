import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import headerStyle from "./Header.module.css";
import ApplyModal from "./Home/ApplyModal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(`.${headerStyle.dropdownContainer}`)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <nav className={headerStyle.navbar}>
        {/* Logo + Courses */}
        <div className={headerStyle.leftSection}>
          <div className={headerStyle.logoSection}>
            <Link to="/" className={headerStyle.logoLink}>
              <img
                src="/edynoor_logo_without_title.jpg"
                alt="edynoorLogo Logo"
                className={headerStyle.logo}
              />
            </Link>
            <h1 className={headerStyle.logoText}>Edynoor</h1>
          </div>

          {/* Courses Dropdown */}
          <div
            className={`${headerStyle.dropdownContainer}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={headerStyle.dropdownButton}
            >
              Courses{" "}
              {isOpen ? (
                <FaChevronUp className={headerStyle.icon} />
              ) : (
                <FaChevronDown className={headerStyle.icon} />
              )}
            </button>

            {isOpen && (
              <div
                className={headerStyle.dropdownMenu}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <Link to="/course1" className={headerStyle.dropdownItem}>
                  Course 1
                </Link>
                <Link to="/course2" className={headerStyle.dropdownItem}>
                  Course 2
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className={headerStyle.hamburger}>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Right Nav - Desktop */}
        <div className={headerStyle.rightNav}>
          <Link to="/career-services" className={headerStyle.navLink}>
            Career Services
          </Link>
          <Link to="/alumni-reviews" className={headerStyle.navLink}>
            Alumni Reviews
          </Link>
          <Link to="/project-lab" className={headerStyle.navLink}>
            ProjectLab
          </Link>
          <button
            className={headerStyle.applyBtn}
            onClick={() => setModalOpen(true)}
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className={headerStyle.mobileMenu}>
            <div className={headerStyle.mobileMenuContent}>
              <Link
                to="/career-services"
                className={headerStyle.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                Career Services
              </Link>
              <Link
                to="/alumni-reviews"
                className={headerStyle.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                Alumni Reviews
              </Link>
              <Link
                to="/project-lab"
                className={headerStyle.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                ProjectLab
              </Link>
              <button
                className={headerStyle.mobileApplyBtn}
                onClick={() => {
                  setMenuOpen(false);
                  setModalOpen(true);
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Reusable Counselling Modal */}
      <ApplyModal showModal={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default Header;
