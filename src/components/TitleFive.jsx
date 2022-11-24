import React from "react";
import { motion } from "framer-motion";
const TitleFive = ({ heading, subheading, para }) => {
  return (
    <>
      <motion.ul viewport={{ amount: 1 }}>
        <div className="section-title primary5 w-[650px]">
          <motion.li
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ bounce: 2, duration: 0.3 }}
          >
            <span>-{subheading}-</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ bounce: 2, duration: 0.4 }}
            whileTap={{ scale: 0.8 }}
          >
            <h3>{heading}</h3>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ bounce: 2, duration: 0.5 }}
          >
            <p className="mt-3">{para}</p>
          </motion.li>
        </div>
      </motion.ul>
    </>
  );
};

export default TitleFive;
