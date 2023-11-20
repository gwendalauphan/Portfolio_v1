import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

import { AnimatePresence } from "framer-motion";

import { ProgressProvider } from "./components/Context/ProgressContext";
import { ToggleProvider } from "./components/Context/ToggleContext";
import { ScrollProvider } from "./components/Context/ScrollContext";

const StarsCanvas = loadable(
  () => import("./components/canvas").then((module) => module.StarsCanvas),
  {
    fallback: <div>Loading...</div>, // Vous pouvez personnaliser le fallback
  }
);

import Navbar from "./components/Navigation/Navbar/Navbar";
import ToggleSwitch from "./components/Switch/Switch";
import Indication from "./components/Switch/Indication";
import ProgressBar from "./components/Navigation/Lateralbar/Lateralbar";
import Sidebar from "./components/Contact/Social/Sidebar";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const MorePage = lazy(() => import("./pages/MorePage"));

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Oops! La page que vous cherchez n'existe pas.</p>
    </div>
  );
}

function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [showIndication, setShowIndication] = useState(true);

  const handleToggleChange = (value) => {
    setIsEnabled(value);
    if (value) {
      setShowIndication(false);
    }
  };
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <ToggleProvider value={{ isEnabled, setIsEnabled }}>
      <ProgressProvider value={{ scrollPercentage, setScrollPercentage }}>
        <ScrollProvider>
          <Router>
            <div className="relative z-0 ">
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 10,
                }}
                className={` ${scrolled ? "bg-primary" : "bg-transparent"}`}
              >
                <div className="relative flex bg-opacity-40 bg-black rounded-[25px] max-w-5xl mx-auto justify-center lg:text-base sm:text-sm xs:text-xs ">
                  <Navbar />
                  <ToggleSwitch
                    isEnabled={isEnabled}
                    onToggleChange={handleToggleChange}
                  />
                  {showIndication && (
                    <Indication onClose={() => setShowIndication(false)} />
                  )}
                </div>
              </div>

              <ProgressBar />
              <Sidebar />

              <AnimatePresence mode="wait">
                <Suspense fallback={<div>Chargement...</div>}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/work" element={<WorkPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/more" element={<MorePage />} />
                    <Route path="*" element={<NoMatch />} />
                  </Routes>
                </Suspense>
              </AnimatePresence>

              <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-primary">
                <StarsCanvas />
              </div>
            </div>
          </Router>
        </ScrollProvider>
      </ProgressProvider>
    </ToggleProvider>
  );
}

export default App;
