import React from "react";
import Footer from "./components/Footer/Footer";
import GlobalStyles from "./globalStyles";
import Home from "./pages/Home/Home";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <main>
        <Home />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
