import React from "react";
import Container from "../../components/Container";
import MiniBanner from "../../components/MiniBanner";
import ProjectCard from "../../components/ProjectCard";
import Projects from "../../components/Projects";
import img2 from "../../assets/images/bg/portfolio12.png";
import allproject from "../../assets/projects.json";
const OurProjects = () => {
  return (
    <div className="  bg-red-50">
      <MiniBanner text1="Our all Projects" text2="Home" text3="Projects" />
      <Container>
        <div className=" flex justify-between w-full py-[100px] flex-wrap gap-6">
          {allproject.map((e) => (
            <div className=" w-[31%]">
              <ProjectCard
                appName={e.appName}
                platform={e.platform}
                img={img2}
                id={e.id}
                liveLink={e.liveLink}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurProjects;
