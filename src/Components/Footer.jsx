import React, { useEffect, useState } from "react";
import footerStyles from "./Footer.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

import address from "../../src/Assets/JSON files/addresses.json";

function Footer() {
  const [addresses, setAddresses] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setAddresses(address);
  }, []);

  const handleScrollToCourses = () => {
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
      }, 100); // wait for route change
    }
  };

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.topSection}>
        <div className={footerStyles.footerColumn}>
          <Link to="/" className={footerStyles.logoLink}>
            <img
              src="/Grey Orange Simple Letter Logo.png"
              alt="edynoor logo"
              className={footerStyles.logo}
            />
          </Link>
          <p className={footerStyles.description}>
            Edynoor is a platform empowering learners through curated content
            and expert mentorship.
          </p>
        </div>

        <div className={footerStyles.footerColumn}>
          <h4>Useful Links</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button
                onClick={handleScrollToCourses}
                className={footerStyles.linkButton}
              >
                Courses
              </button>
            </li>
          </ul>
        </div>

        <div className={footerStyles.footerColumn}>
          <h4>Our Centers</h4>
          {addresses.slice(0, 5).map((item, idx) => (
            <div key={idx} className={footerStyles.addressBox}>
              <strong>{item.city}</strong>
              <p className={footerStyles.address}>{item.address}</p>
            </div>
          ))}
          {addresses.length > 5 && (
            <button className={footerStyles.viewMore}>View More ↓</button>
          )}
        </div>

        <div className={footerStyles.footerColumn}>
          <h4>Follow Us</h4>
          <div className={footerStyles.socialIcons}>
            <a
              href="https://www.linkedin.com/company/edynoor/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/edynoorglobal?igsh=YzE1dDM0am4xeG1u"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className={footerStyles.bottomBar}>
        <p className={footerStyles.copyRight}>
          © {new Date().getFullYear()} Edynoor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
