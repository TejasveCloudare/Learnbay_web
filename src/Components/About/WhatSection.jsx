import React, { useEffect, useState } from "react";
import whatStyles from "./WhatSection.module.css";
import about from "../../Assets/JSON files/about.json";
import { motion } from "framer-motion";

const WhatSection = () => {
  const [data, setData] = useState({ heading: "", content: "", image: "" });

  useEffect(() => {
    setData(about);
  }, []);

  return (
    <section className={whatStyles.whatSection}>
      <motion.div
        className={whatStyles.container}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={whatStyles.left}>
          <h2 className={whatStyles.heading}>{data.heading}</h2>
          <p className={whatStyles.content}>{data.content}</p>
        </div>
        <div className={whatStyles.right}>
          <img
            src={data.image}
            alt="Edynoor"
            className={whatStyles.image}
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default WhatSection;
