import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import headerStyle from "./Header.module.css";
import ApplyModal from "./Home/ApplyModal";
import menu from "../../src/Assets/JSON files/menuData.json";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubMenuClick = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("cardsSection");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#cardsSection");
      setTimeout(() => {
        const section = document.getElementById("cardsSection");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // allow time for route change
    }
  };

  useEffect(() => {
    setMenuData(menu.courses);
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
                src="/Grey Orange Simple Letter Logo.png"
                alt="edynoorLogo Logo"
                className={headerStyle.logo}
              />
            </Link>
          </div>

          {/* Courses Button */}
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
                      <div
                        key={subIdx}
                        className={headerStyle.subMenuItem}
                        onClick={() => {
                          handleSubMenuClick();
                          setDropdownOpen(false);
                        }}
                      >
                        <strong>{subItem.name}</strong>
                        <p style={{ margin: "4px 0" }}>{subItem.duration}</p>
                        <p style={{ margin: "4px 0", fontStyle: "italic" }}>
                          {subItem.certification}
                        </p>
                      </div>
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
          <Link to="/about" className={headerStyle.navLink}>
            About Us
          </Link>
          {/* <a
            href="https://blogs.cloudare.in/"
            target="_blank"
            rel="noopener noreferrer"
            className={headerStyle.navLink}
          >
            Alumni Reviews
          </a>
          <Link to="/" className={headerStyle.navLink}>
            ProjectLab
          </Link> */}
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
              <Link to="/about" className={headerStyle.mobileLink}>
                About Us
              </Link>
              {/* <a
                href="https://blogs.cloudare.in/"
                target="_blank"
                rel="noopener noreferrer"
                className={headerStyle.mobileLink}
              >
                Alumni Reviews
              </a>
              <Link
                to="/project-lab"
                className={headerStyle.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                ProjectLab
              </Link> */}
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
                        <div
                          key={subIdx}
                          className={headerStyle.sidebarSubMenuItem}
                          onClick={() => {
                            handleSubMenuClick();
                            setSidebarOpen(false);
                          }}
                        >
                          <strong>{subItem.name}</strong>
                          <p style={{ margin: "4px 0" }}>{subItem.duration}</p>
                          <p style={{ margin: "4px 0", fontStyle: "italic" }}>
                            {subItem.certification}
                          </p>
                        </div>
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
