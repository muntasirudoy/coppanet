import React from "react";
import Job from "../../components/Job";
import MiniBanner from "../../components/MiniBanner";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import Container from "../../components/Container";
import Partner from "../about/Partner";
const JobList = () => {
  return (
    <>
      <MiniBanner text1="Job List" text2="Home" text3="Job List" />
      <div className="mt-20">
        <Container>
          <div className=" flex justify-center w-full">
            <Tabs
              activeTab="1"
              className=""
              ulClassName=""
              activityClassName="bg-success"
              onClick={(event, tab) => console.log(event, tab)}
            >
              <Tab title="Graphics Design" className="mr-3">
                <div className="mt-10">
                  {" "}
                  <Job />
                </div>
              </Tab>
              <Tab title="DevOps" className="mr-3">
                <div className="mt-10">
                  {" "}
                  <Job />
                </div>
              </Tab>
              <Tab title="Web Development" className="mr-3">
                <div className="mt-10">
                  {" "}
                  <Job />
                </div>
              </Tab>
            </Tabs>
          </div>
          <Partner />
        </Container>
      </div>
    </>
  );
};

export default JobList;
