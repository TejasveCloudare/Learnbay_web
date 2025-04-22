import React, { useEffect, useState } from "react";
import tdStyles from "./TechnologiesAndDomains.module.css";
import clientsData from "../../Assets/JSON files/clients.json";
import techDomainsData from "../../Assets/JSON files/techDomains.json";

const TechnologiesAndDomains = () => {
  const [techDomains, setTechDomains] = useState({
    leftToRight: [],
    rightToLeft: [],
  });
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(clientsData);
    setTechDomains(techDomainsData);
  }, []);

  return (
    <div className={tdStyles.tdContainer}>
      <div className={tdStyles.leftRightWrapper}>
        {/* Left Section */}
        <div className={tdStyles.leftContainer}>
          <div className={tdStyles.aboutContainer}>
            <p className={tdStyles.aboutP}>
              <strong style={{ color: "orange" }}>Edynoor</strong> is a smart
              learning platform that personalizes education with interactive
              tools and progress tracking. Built for students and educators
              alike, it enhances learning experiences. A{" "}
              <strong style={{ color: "orange" }}>
                <a
                  href="https://www.cloudare.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cloudare product,
                </a>
              </strong>{" "}
              Edynoor brings innovation to education.
            </p>
            <a
              href="https://www.cloudare.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="CloudareLogo.png"
                alt="Cloudare Logo"
                className={tdStyles.cloudareLogo}
              />
            </a>
          </div>
          <div className={tdStyles.clientsSection}>
            <h2>Our Clients</h2>
            <div className={tdStyles.clientSlider}>
              <div className={tdStyles.clientTrack}>
                {[...clients, ...clients].map((client, index) => (
                  <div key={index} className={tdStyles.clientSlide}>
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={tdStyles.clientLogo}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={tdStyles.rightContainer}>
          <div className={tdStyles.container}>
            <h2>
              Upskill and transform your career in latest{" "}
              <span className={tdStyles.highlight}>technologies</span> and{" "}
              <span className={tdStyles.highlight}>domains</span>
            </h2>

            {/* Left to Right Slider */}
            <div className={tdStyles.slider}>
              <div
                className={`${tdStyles.sliderTrack} ${tdStyles.leftToRight}`}
              >
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
              <div
                className={`${tdStyles.sliderTrack} ${tdStyles.rightToLeft}`}
              >
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
