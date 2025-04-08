import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroStyles from "./HeroSection.module.css";
import ApplyModal from "./ApplyModal";

function HeroSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={heroStyles.heroSection}>
        <div className={heroStyles.insideContainer}>
          <div className={heroStyles.leftContainer}>
            <div className={heroStyles.headText}>
              <h1 className={heroStyles.heroTitle}>
                India’s{" "}
                <span className={heroStyles.highlightText}>
                  #1 Project-based
                </span>{" "}
                Upskilling Platform for Professionals
              </h1>
            </div>
            <div className={heroStyles.bulletContainer}>
              <li>
                ✔ Get ready to crack your <strong>dream job interview</strong>
              </li>
              <li>
                ✔ Learn from industry experts on <strong>real projects</strong>
              </li>
            </div>
            <div className={heroStyles.btnContainer}>
              <button
                className={heroStyles.ctaButton}
                onClick={() => setModalOpen(true)}
              >
                Apply for Counselling →
              </button>
            </div>
            <div className={heroStyles.companyContainer}>
              <div className={heroStyles.logoContainer}>
                <img src="/ibm.png" alt="IBM" className={heroStyles.logo} />
                <span className={heroStyles.separator}>|</span>
                <img
                  src="/RE1Mu3b.png"
                  alt="Microsoft"
                  className={heroStyles.logo}
                />
                <span className={heroStyles.separator}>|</span>
                <img
                  src="/e and ict.jpg"
                  alt="IIT Guwahati"
                  className={heroStyles.logo}
                />
                <span className={heroStyles.separator}>|</span>
                <img
                  src="/woolf.png"
                  alt="Woolf University"
                  className={heroStyles.logo}
                />
              </div>
            </div>
          </div>

          <div className={heroStyles.rightContainer}>
            <aside className={heroStyles.eligibilityCard}>
              <div className={heroStyles.rightUp}>
                <h3 className={heroStyles.checkEligibility}>
                  Check your eligibility!
                </h3>
                <ul className={heroStyles.eligibilityList}>
                  <li>Get personalized career guidance</li>
                  <li>30 min call with industry expert</li>
                  <li>Discover your upskilling path</li>
                </ul>
              </div>
              <div className={heroStyles.rightDown}>
                <div className={heroStyles.rightDownLeft}>
                  <button
                    className={heroStyles.eligibilityButton}
                    onClick={() => setModalOpen(true)}
                  >
                    Book Free Session Now
                  </button>
                  <img
                    src="/coun_round.avif"
                    alt="coun_round_logo"
                    style={{ width: "90px", height: "30px" }}
                  />
                </div>
                <p className={heroStyles.explore}>
                  No strings attached—explore your career options with expert
                  advice!
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <ApplyModal showModal={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default HeroSection;
