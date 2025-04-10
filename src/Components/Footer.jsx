import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";

function Footer() {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch("/addresses.json")
      .then((res) => res.json())
      .then((data) => setAddresses(data))
      .catch((err) => console.error("Failed to load addresses:", err));
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.addressSection}>
        <h3>Project Innovation Lab Address</h3>
        <div className={styles.grid}>
          {addresses.map((item, idx) => (
            <div key={idx} className={styles.addressBox}>
              <strong>{item.city}</strong>
              <p>{item.address}</p>
            </div>
          ))}
        </div>
        <button className={styles.viewMore}>View More ↓</button>
      </div>

      <div className={styles.bottomBar}>
        <img
          src="/edynoorLogo.jpeg"
          alt="edynoor Logo"
          className={styles.logo}
        />
        <p>© {new Date().getFullYear()} Edynoor. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
