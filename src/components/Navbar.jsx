import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Search, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ onSearchClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '/about', href: '#about', label: '01. about' },
    { name: '/skills', href: '#skills', label: '02. skills' },
    { name: '/projects', href: '#projects', label: '03. projects' },
    { name: '/experience', href: '#experience', label: '04. experience' },
    { name: '/contact', href: '#contact', label: '05. contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-term-bg/85 backdrop-blur-md border-b border-term-border shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Terminal Path */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded bg-term-card border border-term-border flex items-center justify-center text-term-green group-hover:border-term-green/60 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="font-mono text-sm sm:text-base flex items-center gap-1.5">
            <span className="text-term-green font-bold">~/{personalInfo.handle}</span>
            <span className="text-term-dim text-xs hidden sm:inline">(main)</span>
            <span className="inline-block w-2 h-2 rounded-full bg-term-green animate-pulse ml-1" title="Online / Available"></span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs lg:text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-term-green transition-colors py-1 relative group"
            >
              <span className="text-term-dim group-hover:text-term-green/70 transition-colors mr-1">
                {link.label.split(' ')[0]}
              </span>
              <span>{link.label.split(' ')[1]}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-term-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Action Tools */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick Search trigger */}
          <button
            onClick={onSearchClick}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-term-card/80 border border-term-border hover:border-term-green/50 text-term-dim hover:text-term-text text-xs font-mono transition-all group shadow-sm"
            title="Press '/' anytime to search projects"
          >
            <Search className="w-3.5 h-3.5 text-term-dim group-hover:text-term-green" />
            <span className="hidden lg:inline">Find project</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 text-term-green rounded border border-slate-700">
              /
            </kbd>
          </button>

          {/* Resume / CV Link */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-emerald-500/10 border border-term-green/40 hover:bg-term-green hover:text-black text-term-green text-xs font-mono font-medium transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>resume.pdf</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onSearchClick}
            aria-label="Search"
            className="p-2 rounded bg-term-card border border-term-border text-term-dim hover:text-term-green"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded bg-term-card border border-term-border text-term-text hover:text-term-green hover:border-term-green/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-term-border bg-term-bg/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="font-mono text-xs text-term-dim pb-2 mb-2 border-b border-term-border/50 flex justify-between items-center">
            <span>Navigation Terminal</span>
            <span className="text-term-green text-[10px]">status: ready</span>
          </div>

          <div className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded hover:bg-term-card text-slate-300 hover:text-term-green transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs text-term-dim">→</span>
              </a>
            ))}

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2 mt-2 rounded bg-term-green/10 border border-term-green/40 text-term-green hover:bg-term-green hover:text-black font-semibold transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
