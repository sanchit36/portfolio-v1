import React, { useState } from "react";
import instance from "./axios";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";
import GlobalStyles from "./globalStyles";
import Home from "./pages/Home/Home";

function App() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [about, setAbout] = useState({});
  const [intro, setIntro] = useState({});

  useState(() => {
    setLoading(true);
    const promise1 = instance.get("project");
    const promise2 = instance.get("about/1");
    const promise3 = instance.get("intro/1");

    Promise.all([promise1, promise2, promise3]).then((res) => {
      setProjects(res[0].data);
      setAbout(res[1].data);
      setIntro(res[2].data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <React.Fragment>
        <GlobalStyles />
        <Loader />
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <GlobalStyles />
      <main>
        <Home
          projects={projects}
          about={about}
          intro={intro}
          setLoading={setLoading}
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
