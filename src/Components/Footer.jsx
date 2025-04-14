import React, { useEffect, useState } from "react";
import footerStyles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch("/addresses.json")
      .then((res) => res.json())
      .then((data) => setAddresses(data))
      .catch((err) => console.error("Failed to load addresses:", err));
  }, []);

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.addressSection}>
        <h3>Project Innovation Lab Address</h3>
        <div className={footerStyles.grid}>
          {addresses.map((item, idx) => (
            <div key={idx} className={footerStyles.addressBox}>
              <strong>{item.city}</strong>
              <p>{item.address}</p>
            </div>
          ))}
        </div>
        <button className={footerStyles.viewMore}>View More ↓</button>
      </div>
      <div className={footerStyles.bottomBar}>
        <div className={footerStyles.logoSection}>
          <Link to="/" className={footerStyles.logoLink}>
            <img
              src="/Grey Orange Simple Letter Logo.jpg"
              alt="edynoorLogo Logo"
              className={footerStyles.logo}
            />
          </Link>
          <h1 className={footerStyles.logoText}>Edynoor</h1>
        </div>
        <p>© {new Date().getFullYear()} Edynoor. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
