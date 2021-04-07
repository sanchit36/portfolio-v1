import React, { useState } from "react";
import About from "../../components/sections/About/About";
import Banner from "../../components/sections/Banner/Banner";
import CTA from "../../components/sections/CTA/CTA";
import ProjectList from "../../components/sections/ProjectList/ProjectList";
import { db } from "../../firebase";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useState(() => {
    setLoading(true);
    db.collection("projects")
      .orderBy("order", "asc")
      .get()
      .then((ref) => {
        setProjects(ref.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <Banner />

      <About />

      <ProjectList loading={loading} projects={projects} />

      <CTA />
    </React.Fragment>
  );
};

export default Home;
