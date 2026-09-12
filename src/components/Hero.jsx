import { useState, useEffect } from 'react';
import { ArrowRight, FolderGit2, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import TerminalWidget from './TerminalWidget';

export const Hero = ({ onNavigateSection }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const updateSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, updateSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden">
      
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Hook & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-term-card border border-term-border text-xs font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-term-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-term-green"></span>
              </span>
              <span>status: <strong className="text-term-green font-medium">{personalInfo.status}</strong></span>
            </div>

            {/* Headline with prompt prefix */}
            <div className="space-y-2">
              <div className="font-mono text-sm sm:text-base text-term-dim flex items-center gap-2">
                <span>$ whoami</span>
                <span className="text-term-green">--greeting</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
                Hey, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-term-green via-teal-300 to-term-cyan">{personalInfo.name}</span>.
              </h1>

              {/* Dynamic Typewriter Role */}
              <div className="h-10 sm:h-12 flex items-center font-mono text-lg sm:text-2xl text-slate-300">
                <span className="text-term-cyan mr-2">&gt;</span>
                <span className="text-emerald-400 font-semibold">{displayText}</span>
                <span className="inline-block w-2.5 h-6 bg-term-green animate-blink ml-1"></span>
              </div>
            </div>

            {/* Subtext description */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              Crafting high-performance web applications, robust backend architectures, and delightful user interfaces with a technical, command-line refined touch.
            </p>

            {/* Key Specs / Badges */}
            <div className="grid grid-cols-3 gap-3 py-1 font-mono text-xs max-w-lg">
              <div className="p-2.5 rounded bg-term-card/60 border border-term-border">
                <div className="text-term-dim text-[10px]">EXPERIENCE</div>
                <div className="text-slate-100 font-bold mt-0.5">2+ Years</div>
              </div>
              <div className="p-2.5 rounded bg-term-card/60 border border-term-border">
                <div className="text-term-dim text-[10px]">STACK</div>
                <div className="text-slate-100 font-bold mt-0.5">React / Node</div>
              </div>
              <div className="p-2.5 rounded bg-term-card/60 border border-term-border">
                <div className="text-term-dim text-[10px]">LOCATION</div>
                <div className="text-slate-100 font-bold mt-0.5">Remote OK</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); onNavigateSection('projects'); }}
                className="px-6 py-3 rounded-lg bg-term-green text-black font-semibold font-mono text-sm hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-neon-green group"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); onNavigateSection('contact'); }}
                className="px-6 py-3 rounded-lg bg-term-card border border-term-border hover:border-term-green/50 text-slate-200 hover:text-term-green font-mono text-sm transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Prompt helper tip */}
            <div className="text-xs font-mono text-term-dim flex items-center gap-2 pt-2">
              <span className="text-term-cyan font-bold">INFO:</span>
              <span>Use the terminal to the right to run live interactive commands.</span>
            </div>

          </div>

          {/* Right Column: Interactive Terminal Widget */}
          <div className="lg:col-span-6 w-full">
            <div className="relative group">
              {/* Outer neon border glow on focus */}
              <div className="absolute -inset-1 bg-gradient-to-r from-term-green/30 to-term-cyan/30 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative">
                <TerminalWidget onNavigateSection={onNavigateSection} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
