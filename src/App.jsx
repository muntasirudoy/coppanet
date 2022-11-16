import Layout from "./layout";
import About from "./pages/about";
import Home from "./pages/home";
import "./App.css";
import "./assets/boxicons.min.css";
import Team from "./pages/Team";
import { Faq } from "./pages/faq/Faq";
import JobList from "./pages/job_list";
import OurProjects from "./pages/our_projects";
import { ProjectDetails } from "./pages/projects_details";
import Contact from "./pages/contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* <Home /> */}
        {/* <About /> */}
        {/* <Team /> */}
        {/* <Faq /> */}
        {/* <JobList /> */}
        {/* <OurProjects /> */}
        {/* <ProjectDetails /> */}
        {/* <Contact /> */}
      </Layout>
    </>
  );
}

export default App;
