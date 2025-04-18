import React, { useEffect, useState } from "react";
import founderStyles from "./FounderSection.module.css";
import data from "../../Assets/JSON files/FounderSection.json";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const FounderSection = () => {
  const [foundersData, setFoundersData] = useState({
    heading: "",
    founders: [],
  });

  useEffect(() => {
    setFoundersData(data);
  }, []);

  return (
    <section className={founderStyles.founderSection}>
      <div className={founderStyles.container}>
        <motion.h2
          className={founderStyles.heading}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {foundersData.heading}
        </motion.h2>

        <div className={founderStyles.cards}>
          {foundersData.founders.map((founder, index) => (
            <motion.div
              key={index}
              className={founderStyles.card}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 20px 35px rgba(0,0,0,0.15)",
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <img
                src={founder.image}
                alt={founder.name}
                className={founderStyles.image}
              />
              <h3 className={founderStyles.name}>{founder.name}</h3>
              <p className={founderStyles.title}>{founder.title}</p>
              <p className={founderStyles.quote}>"{founder.quote}"</p>

              <div className={founderStyles.socials}>
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={founderStyles.socialIcon}
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
