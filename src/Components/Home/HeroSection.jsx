import React, { useEffect, useState } from "react";
import heroStyles from "./HeroSection.module.css";
import ApplyModal from "./ApplyModal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner from "../../Assets/JSON files/heroBanners.json";
import { useInView } from "react-intersection-observer";

function HeroSection() {
  const [bannerData, setBannerData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    setBannerData(banner);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [bannerData]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  const jumpToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!bannerData.length) return null;

  const currentBanner = bannerData[currentIndex];

  return (
    <>
      <div
        className={`${heroStyles.heroSection} ${
          inView ? heroStyles.fadeIn : ""
        }`}
        style={{ background: currentBanner.background }}
        ref={ref}
      >
        <div className={heroStyles.slideControls}>
          <button className={heroStyles.arrowBtn} onClick={handlePrev}>
            <ChevronLeft size={32} />
          </button>
          <button className={heroStyles.arrowBtn} onClick={handleNext}>
            <ChevronRight size={32} />
          </button>
        </div>

        <div className={heroStyles.insideContainer}>
          <div className={`${heroStyles.leftContainer} ${heroStyles.slideUp}`}>
            <div className={heroStyles.headText}>
              <h1 className={heroStyles.heroTitle}>
                {currentBanner.title.split(currentBanner.highlight)[0]}
                <span className={heroStyles.highlightText}>
                  {currentBanner.highlight}
                </span>
                {currentBanner.title.split(currentBanner.highlight)[1]}
              </h1>
            </div>
            <div className={heroStyles.bulletContainer}>
              {currentBanner.bullets.map((bullet, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }} />
              ))}
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
                {currentBanner.logos.map((logo, idx) => (
                  <React.Fragment key={idx}>
                    <img
                      src={logo}
                      alt={`Logo ${idx}`}
                      className={heroStyles.logo}
                    />
                    {idx !== currentBanner.logos.length - 1 && (
                      <span className={heroStyles.separator}>|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`${heroStyles.rightContainer} ${heroStyles.slideRight}`}
          >
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

        <div className={heroStyles.dotsContainer}>
          {bannerData.map((_, index) => (
            <span
              key={index}
              onClick={() => jumpToSlide(index)}
              className={`${heroStyles.dot} ${
                index === currentIndex ? heroStyles.activeDot : ""
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ApplyModal showModal={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default HeroSection;
