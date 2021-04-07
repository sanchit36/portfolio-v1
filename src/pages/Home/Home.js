import axios from "axios";
import React, { useState } from "react";
import About from "../../components/sections/About/About";
import Banner from "../../components/sections/Banner/Banner";
import ProjectList from "../../components/sections/ProjectList/ProjectList";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useState(() => {
    axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
      setProjects(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Banner />

      <About />

      <ProjectList projects={projects} />
    </React.Fragment>
  );
};

export default Home;
