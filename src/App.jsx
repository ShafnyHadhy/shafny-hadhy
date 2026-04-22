import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Resume />
    <Contact />
  </>
);

function App() {
  return (
    <div className="bg-primary flex flex-col min-h-screen overflow-x-hidden">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects limit={0} showViewMore={false} showBackButton={true} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
