import React, { useEffect, useRef, useState } from "react";
import styles from "./RealStories.module.css";

const RealStories = () => {
  const [data, setData] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("/realStoriesData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSlide = (direction) => {
    if (!data) return;
    const maxIndex = Math.floor(data.profiles.length / 5);
    let newIndex = currentSlide + direction;
    newIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentSlide(newIndex);
    sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
  };

  const renderStars = (count) => {
    return (
      <span className={styles.stars}>
        {"★".repeat(count)}
        {"☆".repeat(5 - count)}
      </span>
    );
  };

  if (!data) return null;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.subTitle}>{data.subTitle}</p>

      <div className={styles.sliderContainer}>
        <button onClick={() => handleSlide(-1)} className={styles.arrowLeft}>
          ‹
        </button>
        <div className={styles.sliderViewport}>
          <div className={styles.sliderTrack} ref={sliderRef}>
            {data.profiles.map((profile, index) => (
              <div className={styles.card} key={index}>
                <img
                  src={profile.image}
                  alt={profile.name}
                  className={styles.profileImg}
                />
                <h4>{profile.name}</h4>
                <p>{profile.designation}</p>
                <img
                  src={`/companies/${profile.company.toLowerCase()}.png`}
                  alt={profile.company}
                  className={styles.companyLogo}
                />
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => handleSlide(1)} className={styles.arrowRight}>
          ›
        </button>
      </div>
    </div>
  );
};

export default RealStories;
