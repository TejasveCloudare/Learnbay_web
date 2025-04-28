import React from "react";
import otlStyles from "./OthersVsLearnbay.module.css";

const OthersVsLearnbay = () => {
  return (
    <div className={otlStyles.sectionWrapper}>
      {/* ===== Top Company Logos Section ===== */}
      <div className={otlStyles.logoSection}>
        <div className={otlStyles.companyLogos}>
          {[
            "jpmorgan",
            "kpmGG",
            "microsoft",
            "samsung",
            "boch",
            "deloitte",
            "PWC",
          ].map((logo, index) => (
            <div
              key={logo}
              className={`${otlStyles.logoBox} ${otlStyles.slideIn} ${otlStyles.zoomOnHover}`}
              style={{ animationDelay: `${index * 0.1}s` }} // Adds a delay for animation effect
            >
              <img src={`/${logo}.avif`} alt={logo} />
            </div>
          ))}
        </div>
        <p className={otlStyles.hiringText}>Get hired at 250+ companies</p>
      </div>

      {/* ===== Comparison Section ===== */}
      <div className={otlStyles.comparisonSection}>
        <div>
          <h2 className={otlStyles.title}>Others Vs Edynoor</h2>
        </div>
        <div className={otlStyles.comparisonContainer}>
          {/* Left Column */}
          <div
            className={`${otlStyles.comparisonColumn} ${otlStyles.lightColumn}`}
          >
            <div className={otlStyles.row}>Training Mode</div>
            <div className={otlStyles.row}>Support</div>
            <div className={otlStyles.row}>Placement</div>
            <div className={otlStyles.row}>Faculty</div>
            <div className={otlStyles.row}>Real-Time Projects</div>
          </div>

          {/* Middle Column - Learnbay */}
          <div
            className={`${otlStyles.comparisonColumn} ${otlStyles.learnbayColumn}`}
          >
            <h3 className={otlStyles.brand}>Edynoor</h3>
            <ul className={otlStyles.pointList}>
              <li>
                <span>
                  <img src="/sign_mark.avif" alt="check" /> 100% Online & Hybrid
                  (Online + Classroom)
                </span>
              </li>
              <li>
                <span>
                  <img src="/sign_mark.avif" alt="check" /> 24/7 Student Support
                </span>
              </li>
              <li>
                <span>
                  <img src="/sign_mark.avif" alt="check" /> 100% Placement
                  Assistance
                </span>
              </li>
              <li>
                <span>
                  <img src="/sign_mark.avif" alt="check" /> Experienced Industry
                  Professionals
                </span>
              </li>
              <li>
                <span>
                  <img src="/sign_mark.avif" alt="check" /> Practice with Live
                  Projects & Team Management
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column - Others */}
          <div
            className={`${otlStyles.comparisonColumn} ${otlStyles.othersColumn}`}
          >
            <h3 className={otlStyles.brand}>Others</h3>
            <ul className={otlStyles.pointList}>
              <li className={otlStyles.rightLi}>
                <img src="/wrong_icon.avif" alt="wrong" /> Only recorded class &
                few live online
              </li>
              <li className={otlStyles.rightLi}>
                <img src="/wrong_icon.avif" alt="wrong" /> Limited Support Hours
              </li>
              <li className={otlStyles.rightLi}>
                <img src="/wrong_icon.avif" alt="wrong" /> Limited Placement
                Support
              </li>
              <li className={otlStyles.rightLi}>
                <img src="/wrong_icon.avif" alt="wrong" /> Academics and
                Trainers
              </li>
              <li className={otlStyles.rightLi}>
                <img src="/wrong_icon.avif" alt="wrong" /> Simulated Projects
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OthersVsLearnbay;
