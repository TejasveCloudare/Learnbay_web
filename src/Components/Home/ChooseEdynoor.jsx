import React, { useEffect, useRef, useState } from "react";
import ChoooseStyles from "./ChooseEdynoor.module.css";
import reasonsData from "../../Assets/JSON files/reasonsData.json";

const ChooseEdynoor = () => {
  const sectionRefs = useRef([]);
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    setReasons(reasonsData);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add(ChoooseStyles.fadeIn);
          target.classList.remove(ChoooseStyles.fadeOut);
        } else {
          target.classList.remove(ChoooseStyles.fadeIn);
          target.classList.add(ChoooseStyles.fadeOut);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [reasons]);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className={ChoooseStyles.backgroundWrapper}>
      <h1 className={ChoooseStyles.mainHeading}>
        Why choose <span className={ChoooseStyles.outlineText}>Edynoor?</span>
      </h1>

      <div className={ChoooseStyles.reasons}>
        {reasons.map((item, index) => (
          <div
            key={index}
            className={`${ChoooseStyles.sectionWrapper} ${ChoooseStyles.fadeOut}`}
            ref={addToRefs}
          >
            <div className={ChoooseStyles.trainingSection}>
              <div className={ChoooseStyles.iconColumn}>
                <div className={ChoooseStyles.iconCircle}>
                  <img src={item.icon} alt="Icon" />
                </div>
                {/* Remove vertical line only for the last section */}
                {index !== reasons.length - 1 && (
                  <div className={ChoooseStyles.verticalLine}></div>
                )}
              </div>

              <div className={ChoooseStyles.textColumn}>
                <h2 className={ChoooseStyles.subHeading}>{item.heading}</h2>
                <p className={ChoooseStyles.description}>{item.description}</p>

                {item.keyPoints && (
                  <div className={ChoooseStyles.keyPointList}>
                    {item.keyPoints.map((point, i) => (
                      <div key={i} className={ChoooseStyles.keyPointItem}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/709/709496.png"
                          alt="Bullet Icon"
                          className={ChoooseStyles.bulletIcon}
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {item.modeItems && (
                  <>
                    <div className={ChoooseStyles.modeItem}>
                      {item.modeItems.map((mode, modeIndex) => (
                        <div
                          key={modeIndex}
                          className={ChoooseStyles.modeItemBlock}
                        >
                          {mode.icon && (
                            <>
                              <img src={mode.icon} alt="Mode Icon" />
                              <span>
                                {mode.label.split("\n").map((line, i) => (
                                  <React.Fragment key={i}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))}
                              </span>
                            </>
                          )}

                          {mode.comp_icon && (
                            <>
                              <span>{mode.label}</span>
                              <img
                                src={mode.comp_icon}
                                alt="Company Icon"
                                className={ChoooseStyles.compIcon}
                              />
                            </>
                          )}
                        </div>
                      ))}
                    </div>

                    {item.note && (
                      <p className={ChoooseStyles.importantNote}>
                        <strong>*Important Note:</strong>{" "}
                        {item.note.replace("*Important Note: ", "")}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseEdynoor;
