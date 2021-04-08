import React, { useState } from "react";
import About from "../../components/sections/About/About";
import Banner from "../../components/sections/Banner/Banner";
import Contact from "../../components/sections/Contact/Contact";
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
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Banner />

      <About />

      <ProjectList loading={loading} projects={projects} />

      <Contact />
    </React.Fragment>
  );
};

export default Home;
