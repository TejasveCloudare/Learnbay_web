import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import headerStyle from "./Header.module.css";
import ApplyModal from "./Home/ApplyModal";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("/menuData.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data.courses))
      .catch((err) => console.error("Error loading menu data:", err));
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSubMenu = (index) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <nav className={headerStyle.navbar}>
        <div className={headerStyle.leftSection}>
          <div className={headerStyle.logoSection}>
            <Link to="/" className={headerStyle.logoLink}>
              <img
                src="/Grey Orange Simple Letter Logo.jpg"
                alt="edynoorLogo Logo"
                className={headerStyle.logo}
              />
            </Link>
          </div>

          {/* Courses Button - Desktop Dropdown / Mobile Sidebar */}
          <div className={headerStyle.dropdownContainer} ref={dropdownRef}>
            <button
              onClick={() => {
                if (window.innerWidth <= 1024) {
                  setSidebarOpen(true);
                } else {
                  setDropdownOpen((prev) => !prev);
                }
              }}
              className={headerStyle.dropdownButton}
            >
              Courses{" "}
              {isDropdownOpen ? (
                <FaChevronUp className={headerStyle.icon} />
              ) : (
                <FaChevronDown className={headerStyle.icon} />
              )}
            </button>

            {/* Desktop Dropdown */}
            <div
              className={`${headerStyle.dropdownMenu} ${
                isDropdownOpen ? headerStyle.dropdownVisible : ""
              }`}
            >
              {menuData.map((menu, idx) => (
                <div className={headerStyle.menuGroup} key={idx}>
                  <div className={headerStyle.dropdownItem}>{menu.title}</div>
                  <div className={headerStyle.subMenu}>
                    {menu.subMenu.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.link}
                        className={headerStyle.subMenuItem}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className={headerStyle.hamburger}>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Right Nav */}
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

      {/* Mobile Sidebar for Courses */}
      {sidebarOpen && (
        <div className={headerStyle.sidebarOverlay}>
          <div className={headerStyle.sidebar}>
            <div className={headerStyle.sidebarHeader}>
              <h3>Courses</h3>
              <button onClick={() => setSidebarOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <div className={headerStyle.sidebarContent}>
              {menuData.map((menu, idx) => (
                <div key={idx}>
                  <div
                    className={headerStyle.sidebarMenuTitle}
                    onClick={() => toggleSubMenu(idx)}
                  >
                    {menu.title}
                    <span>
                      {expandedMenus[idx] ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                  {expandedMenus[idx] && (
                    <div className={headerStyle.sidebarSubMenu}>
                      {menu.subMenu.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          to={subItem.link}
                          className={headerStyle.sidebarSubMenuItem}
                          onClick={() => setSidebarOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <ApplyModal showModal={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default Header;
