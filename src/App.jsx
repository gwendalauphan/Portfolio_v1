import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { AnimatePresence } from "framer-motion";


import Navbar from './components/Navigation/Navbar/Navbar';
import { StarsCanvas, EarthCanvas } from './components/canvas';

import HomePage from './pages/HomePage';
import World1Page from './pages/World1Page';
import World2Page from './pages/World2Page';
import World3Page from './pages/World3Page';
import World4Page from './pages/World4Page';

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Oops! La page que vous cherchez n'existe pas.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="relative z-0">
        <div className="flex bg-hero-pattern bg-no-repeat bg-center bg-opacity-40 bg-black rounded-[25px] max-w-5xl mx-auto justify-center lg:text-base sm:text-sm xs:text-xs ">
          <Navbar />
          
        </div>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<World1Page />} />
            <Route path="/world1" element={<World1Page />} />
            <Route path="/world2" element={<World2Page />} />
            <Route path="/world3" element={<World3Page />} />
            <Route path="/world4" element={<World4Page />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </AnimatePresence>

        <div className='fixed top-0 left-0 w-full h-full z-[-1] bg-primary'>
          
          <StarsCanvas />
          
          
        </div>
      </div>
    </Router>
  );
}

export default App;
