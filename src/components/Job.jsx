import React from "react";
import Container from "./Container";
import img1 from "../assets/images/icons/job-icon1.svg";
import img2 from "../assets/images/icons/location-prm2.svg";
import img3 from "../assets/images/icons/time-prm2.svg";
import img4 from "../assets/images/icons/job-icon2.svg";
import img5 from "../assets/images/icons/location-prm2.svg";
import img6 from "../assets/images/icons/time-prm2.svg";
import img7 from "../assets/images/icons/job-icon3.svg";
import img8 from "../assets/images/icons/location-prm2.svg";
import img9 from "../assets/images/icons/time-prm2.svg";
import JobCard from "./JobCard";
import { motion } from "framer-motion";
import TitleFive from "./TitleFive";
const Job = () => {
  return (
    <>
      <div className="job-section pb-20">
        <Container>
          <div className="row justify-content-center">
            <div className="flex justify-center">
              <TitleFive
                heading="Our Recent Job Post"
                subheading="- Our Jobs-"
                para=" "
              />
            </div>
          </div>
          <div className="row flex justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ bounce: 2, duration: 0.4, delay: 0.3 }}
              viewport={{ amount: 0.5 }}
            >
              <JobCard
                para="We’re hiring Want craft the best Full-Stack Developer job vacancy or
            hiring post? Get inspired by these examples."
                location=" London, UK"
                time="Full Time"
                leftTime="1 Day Ago"
                title="Full-Stack Developer Wanted"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ bounce: 2, duration: 0.4, delay: 0.4 }}
              viewport={{ amount: 1 }}
            >
              <JobCard
                para="We’re hiring Want craft the best Full-Stack Developer job vacancy or
            hiring post? Get inspired by these examples."
                location=" London, UK"
                time="Full Time"
                leftTime="1 Day Ago"
                title="Full-Stack Developer Wanted"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ bounce: 2, duration: 0.4, delay: 0.5 }}
              viewport={{ amount: 1 }}
            >
              <JobCard
                para="We’re hiring Want craft the best Full-Stack Developer job vacancy or
            hiring post? Get inspired by these examples."
                location=" London, UK"
                time="Full Time"
                leftTime="1 Day Ago"
                title="Full-Stack Developer Wanted"
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Job;
