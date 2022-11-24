import React from "react";
import img1 from "../assets/images/bg/section-bg1.png";
import img2 from "../assets/images/bg/team31.png";
import img3 from "../assets/images/bg/team32.png";
import img4 from "../assets/images/bg/team1.jpg";
import img5 from "../assets/images/bg/team34.png";
import img6 from "../assets/images/bg/team35.png";
import Container from "./Container";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
const item = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: [0, 1, 0],
  },
  transition: {
    delayChildren: 0.1,
    staggerChildren: 0.1,
  },
};
const Team = () => {
  return (
    <>
      <div className="team-section pt-120 pb-120">
        <img src={img1} alt="image" className="img-fluid water-mark1" />
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-8 flex justify-center">
              <motion.ul viewport={{ amount: 1 }}>
                <div className="section-title primary5 w-[650px]">
                  <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ bounce: 2, duration: 0.3 }}
                  >
                    <span>-Our Team-</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ bounce: 2, duration: 0.4 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <h3>Our Creative Minds</h3>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ bounce: 2, duration: 0.5 }}
                  >
                    <p className="para ">
                      Get the most of reduction in your team’s operating costs
                      for the whole product which creates amazing UI/UX
                      experiences.
                    </p>
                  </motion.li>
                </div>
              </motion.ul>
            </div>
          </div>
          <div className="row flex justify-between gap-4">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper w-full relative pb-12"
            >
              <SwiperSlide className="pb-12">
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ bounce: 2, duration: 0.6 }}
                  viewport={{}}
                >
                  <TeamCard
                    name="Muballig Karim"
                    designation="Operations Manager"
                    img={img4}
                    className="w-[24%]"
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ bounce: 2, duration: 0.6 }}
                >
                  <TeamCard
                    name="Shariful Islam"
                    designation="Social Media Manager"
                    img={img3}
                  />
                </motion.div>
              </SwiperSlide>

              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ bounce: 2, duration: 0.6 }}
                >
                  <TeamCard
                    name="Tarequl Islam"
                    designation="Full-Stack Developer"
                    img={img2}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ bounce: 2, duration: 0.6 }}
                >
                  <TeamCard
                    name="Muntasir Udoy"
                    designation="Frontend Developer"
                    img={img5}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ bounce: 2, duration: 0.6 }}
                >
                  <TeamCard
                    name="Saif Rahman"
                    designation="Frontend Developer"
                    img={img6}
                  />
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Team;
