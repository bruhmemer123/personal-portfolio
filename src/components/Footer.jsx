import { Terminal, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo, systemSpecs } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-term-border/60 py-12 relative font-mono text-xs text-term-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Telemetry Status Bar */}
        <div className="p-4 rounded-xl bg-term-bg border border-term-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-term-green animate-pulse"></span>
              <span className="text-slate-200 font-bold">ALL SYSTEMS OPERATIONAL</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400 text-[11px] hidden sm:inline">
              uptime: {systemSpecs.uptime}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <span>environment:</span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-term-cyan font-bold">
              production:v2.4
            </span>
          </div>
        </div>

        {/* Main Footer Links & Bio */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-white font-bold">
              <div className="w-6 h-6 rounded bg-term-card border border-term-border flex items-center justify-center text-term-green">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span>{personalInfo.name}</span>
            </div>
            
            <span className="text-slate-700 hidden sm:inline">•</span>
            
            <p className="text-slate-400 text-xs">
              © {new Date().getFullYear()} {personalInfo.name}. Open source personal portfolio.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-term-card border border-term-border hover:border-term-green hover:text-term-green text-slate-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-term-card border border-term-border hover:border-term-cyan hover:text-term-cyan text-slate-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-term-card border border-term-border hover:border-purple-400 hover:text-purple-400 text-slate-400 transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>

            {/* Scroll to Top (cd ~) */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded bg-term-card border border-term-border hover:border-term-green hover:text-term-green text-slate-300 transition-all font-mono text-xs ml-2 group"
              title="Return to home section"
            >
              <span>cd ~</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
export default Footer;
