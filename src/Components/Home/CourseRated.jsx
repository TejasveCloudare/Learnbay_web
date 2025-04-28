import React, { useEffect, useState } from "react";
import CourseRatedStyles from "./CourseRated.module.css";
import courseRatedData from "../../Assets/JSON files/courseRatedData.json";

const CourseRated = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    setRatings(courseRatedData.courseRated);
  }, []);

  return (
    <section className={CourseRatedStyles.courseRatedSection}>
      <div className={CourseRatedStyles.container}>
        {/* Left: Rating Cards */}
        {/* <div className={CourseRatedStyles.leftSection}>
          <h2 className={CourseRatedStyles.heading}>Courses Top Rated in:</h2>
          <p className={CourseRatedStyles.subTitle}>
            Discover what our learners say about us
          </p>
          <div className={CourseRatedStyles.gridContainer}>
            {ratings.map((item, index) => (
              <div key={index} className={CourseRatedStyles.card}>
                <div className={CourseRatedStyles.imageWrapper}>
                  <img src={`${item.image}`} alt={item.platform} />
                </div>
                <div className={CourseRatedStyles.details}>
                  {item.rating === "Top Rated" ? (
                    <span className={CourseRatedStyles.topRated}>
                      {item.rating}
                    </span>
                  ) : (
                    <span className={CourseRatedStyles.rating}>
                      {item.rating} ★
                    </span>
                  )}
                  <span className={CourseRatedStyles.platform}>
                    {item.platform}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Right: YouTube Video */}
        <div className={CourseRatedStyles.rightSection}>
          <div className={CourseRatedStyles.videoWrapper}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/OeTmV6rk0Ig"
              title="Learnbay Success Stories"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseRated;
