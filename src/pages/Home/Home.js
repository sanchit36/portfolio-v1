import React from "react";
import About from "../../components/sections/About/About";
import Banner from "../../components/sections/Banner/Banner";
import Contact from "../../components/sections/Contact/Contact";
import ProjectList from "../../components/sections/ProjectList/ProjectList";

const Home = ({ setLoading, intro, about, projects }) => {
  return (
    <React.Fragment>
      <Banner intro={intro} />

      <About about={about} />

      <ProjectList projects={projects} />

      <Contact />
    </React.Fragment>
  );
};

export default Home;
