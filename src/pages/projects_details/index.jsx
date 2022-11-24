import React, { useState, useEffect } from "react";
import MiniBanner from "../../components/MiniBanner";
import img1 from "../../assets/images/bg/proj-details.jpg";
import img2 from "../../assets/images/icons/client-icon.svg";
import img3 from "../../assets/images/icons/category-icon.svg";
import img4 from "../../assets/images/icons/calendar2.svg";
import img5 from "../../assets/images/bg/project-d1.png";
import img6 from "../../assets/images/bg/project-d2.png";
import img7 from "../../assets/images/bg/testi11.png";
import Container from "../../components/Container";
import { Routes, Route, useParams } from "react-router-dom";
import projectdetails from "../../assets/projects.json";
export const ProjectDetails = () => {
  const param = useParams();
  const [details, setDetails] = useState("");
  useEffect(() => {
    const data = projectdetails.find((e) => e.id == param.id);
    setDetails(data);
  });

  const {
    clientsName,
    appNme,
    category,
    completeDate,
    paraOne,
    paraTwo,
    paraThree,
    paraFour,
    headinOne,
    subHeadinOne,
    headinTwo,
    headinThree,
    headinFour,
  } = details;
  return (
    <>
      <MiniBanner
        text1="Details all the projects"
        text2="Home"
        text3="Projects Details"
      />
      <div class="project-details-section pt-120 pb-20" id="project-details">
        <Container>
          <div class="row flex justify-center gap-5">
            <div class="w-[65%]">
              <div class="proj-details-single">
                <img src={img1} alt="image" class="img-fluid" />
                <ul class="project-meta-list gap-3">
                  <li>
                    <div class="icon">
                      <img src={img2} alt="image" />
                    </div>
                    <div class="text">
                      <h5>Client Name</h5>
                      <p>{clientsName}</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <img src={img3} alt="image" />
                    </div>
                    <div class="text">
                      <h5>Category</h5>
                      <p>{category}</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <img src={img4} alt="image" />
                    </div>
                    <div class="text">
                      <h5>Complete Date</h5>
                      <p>{completeDate}</p>
                    </div>
                  </li>
                </ul>
                <h4>{headinOne}</h4>
                <p class="para">{paraOne}</p>
                <div class="challenge-box">
                  <h4>{headinThree}</h4>
                  <p class="para">{paraThree}</p>
                  <ul class="challenge-list">
                    <li>
                      Analyzing research data and identifying trends and
                      patterns
                    </li>
                    <li>Conducting usability testing sessions with users</li>
                    <li>Amazing Timing and Experience</li>
                    <li>
                      Gathering user feedback through surveys and questionnaires
                    </li>
                  </ul>
                </div>
                <h4>{headinFour}</h4>
                <p class="para mb-0">{paraFour}</p>
              </div>
            </div>
            <div class="w-[35%]">
              <div class="proj-details-right">
                <div class="title-area">
                  <span>Ui/Ux Design</span>
                  <h2>{headinTwo}</h2>
                </div>
                <p class="para">{paraTwo}</p>
                <div class="proj-details-imgs">
                  <div class="row flex gap-4">
                    <div class="col-lg-6 col-md-6 col-sm-6 text-center">
                      <img src={img5} class="img-fluid" alt="image" />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 text-center">
                      <img src={img6} class="img-fluid" alt="image" />
                    </div>
                  </div>
                </div>
                <h3>Client Feedback This Project</h3>
                <div
                  class="testimonial-single hover-border1 wow fadeInDown"
                  data-wow-duration="1.5s"
                  data-wow-delay=".2s"
                >
                  <img
                    alt="image"
                    src="assets/images/icons/quote-icon.svg"
                    class="quote-icon"
                  />
                  <div class="testi-img">
                    <img alt="image" src={img7} />
                  </div>
                  <div class="testi-content">
                    <div class="testi-designation">
                      <h5>Ronald Richards</h5>
                      <p>Co Founder</p>
                    </div>
                    <p>
                      The Pacific Grove Chamber of Commerce would like to thank
                      eLab Communications and Mr. Will Elkadi for all the
                      efforts and suggestions that assisted.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
