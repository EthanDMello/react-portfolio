import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import ProjectsPage from "./pages/Projects";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/contactMe" element={<ContactMe />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
