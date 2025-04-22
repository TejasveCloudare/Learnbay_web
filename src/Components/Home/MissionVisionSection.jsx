import React, { useEffect, useState } from "react";
import styles from "./MissionVision.module.css";
import missionData from "../../Assets/JSON files/missionVision.json";
import { motion } from "framer-motion";

const MissionVisionSection = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(missionData);
  }, []);

  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.mainHeading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {data.heading}
      </motion.h2>

      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.subHeading}>{data.missionTitle}</h3>
          <p className={styles.paragraph}>{data.missionContent}</p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.subHeading}>{data.visionTitle}</h3>
          <p className={styles.paragraph}>{data.visionContent}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
