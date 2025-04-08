import React, { useEffect, useState } from "react";
import tdStyles from "./TechnologiesAndDomains.module.css";

const TechnologiesAndDomains = () => {
  const [techDomains, setTechDomains] = useState({
    leftToRight: [],
    rightToLeft: [],
  });

  useEffect(() => {
    fetch("/techDomains.json")
      .then((res) => res.json())
      .then((data) => setTechDomains(data))
      .catch((err) => console.error("Error loading techDomains:", err));
  }, []);

  return (
    <div className={tdStyles.tdContainer}>
      <div className={tdStyles.container}>
        <h2>
          Upskill and transform your career in latest{" "}
          <span className={tdStyles.highlight}>technologies</span> and{" "}
          <span className={tdStyles.highlight}>domains</span>
        </h2>

        {/* Left to Right Slider */}
        <div className={tdStyles.slider}>
          <div className={`${tdStyles.sliderTrack} ${tdStyles.leftToRight}`}>
            {techDomains.leftToRight
              .concat(techDomains.leftToRight)
              .map((item, index) => (
                <div key={index} className={tdStyles.slideItem}>
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Right to Left Slider */}
        <div className={tdStyles.slider}>
          <div className={`${tdStyles.sliderTrack} ${tdStyles.rightToLeft}`}>
            {techDomains.rightToLeft
              .concat(techDomains.rightToLeft)
              .map((item, index) => (
                <div key={index} className={tdStyles.slideItem}>
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className={tdStyles.careerSection}>
        <h2>Kickstart your career with our programs</h2>
        <p>Our programs have helped thousands launch careers in tech</p>

        <ul className={tdStyles.benefitsList}>
          <li>
            ✅ <strong>200-400 hours</strong> of learning
          </li>
          <li>
            ✅ <strong>Live, interactive sessions</strong>
          </li>
          <li>
            ✅ <strong>Hybrid training mode</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechnologiesAndDomains;
