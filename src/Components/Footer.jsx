import React, { useEffect, useState } from "react";
import footerStyles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import address from "../../src/Assets/JSON files/addresses.json";

function Footer() {
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    setAddresses(address);
  }, []);

  // useEffect(() => {
  //   fetch("/addresses.json")
  //     .then((res) => res.json())
  //     .then((data) => setAddresses(data))
  //     .catch((err) => console.error("Failed to load addresses:", err));
  // }, []);

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
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
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
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
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
