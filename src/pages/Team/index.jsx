import React from "react";
import MiniBanner from "../../components/MiniBanner";
import Team from "../../components/Team";
import TeamCard from "../../components/TeamCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import img2 from "../../assets/images/bg/team31.png";
import img3 from "../../assets/images/bg/team32.png";
import img4 from "../../assets/images/bg/team33.png";
import img1 from "../../assets/images/bg/team1.jpg";

import Container from "../../components/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
const index = () => {
  return (
    <>
      <MiniBanner text1="Team Member" text2="Home" text3="Team" />
      <Container>
        <div className="row flex w-full justify-between gap-4 py-[100px] relative">
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
            className="mySwiper w-full"
          >
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ bounce: 2, duration: 0.6, delay: 0.3 }}
                viewport={{}}
              >
                <TeamCard
                  name="Muballig Karim"
                  designation="Operations Manager"
                  img={img1}
                  className="w-[24%]"
                />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ bounce: 2, duration: 0.6, delay: 0.4 }}
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
                transition={{ bounce: 2, duration: 0.6, delay: 0.5 }}
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
                transition={{ bounce: 2, duration: 0.6, delay: 0.6 }}
              >
                <TeamCard
                  name="Muntasir Udoy"
                  designation="Frontend Developer"
                  img={img4}
                />
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default index;
