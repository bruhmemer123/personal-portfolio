import { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const App = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    // Prevent browser from restoring scroll to the middle of the page
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleNavigateSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchClick = () => {
    handleNavigateSection('projects');
    setTimeout(() => {
      projectsRef.current?.focusSearch();
    }, 400);
  };

  return (
    <div className="min-h-screen bg-term-bg text-slate-200 font-sans selection:bg-term-green/20 selection:text-emerald-300">
      {/* Top Navbar */}
      <Navbar onSearchClick={handleSearchClick} />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Hero Section with Interactive Terminal */}
        <Hero onNavigateSection={handleNavigateSection} />

        {/* About Section with Neofetch dossier */}
        <About />

        {/* Skills Section with CLI telemetry */}
        <Skills />

        {/* Projects Showcase with Search & Filters */}
        <Projects ref={projectsRef} />

        {/* Education & Experience Git Log Timeline */}
        <Experience />

        {/* Contact Section with Interactive Form */}
        <Contact />
      </main>

      {/* System Telemetry Footer */}
      <Footer />
    </div>
  );
};

export default App;