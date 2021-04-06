import React from "react";
import About from "../../components/sections/About/About";
import Banner from "../../components/sections/Banner/Banner";
import ProjectList from "../../components/sections/ProjectList/ProjectList";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />

      <About />

      <ProjectList />
    </React.Fragment>
  );
};

export default Home;
