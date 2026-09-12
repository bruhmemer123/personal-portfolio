import { useState } from 'react';
import { User, Compass, Target, MapPin, Cpu, Code } from 'lucide-react';
import { personalInfo, systemSpecs } from '../data/portfolioData';

export const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section id="about" className="py-20 relative border-t border-term-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-term-green flex items-center gap-2 mb-2">
              <span>01.</span>
              <span>// SYSTEM PROFILE &amp; DOSSIER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              About <span className="text-term-green">Me</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-term-dim bg-term-card px-3 py-1.5 rounded border border-term-border">
            <span>cat ~/profile/dossier.spec</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: neofetch / System Specs Box */}
          <div className="lg:col-span-5 rounded-xl bg-term-card border border-term-border overflow-hidden shadow-xl">
            <div className="px-4 py-2.5 bg-slate-900 border-b border-term-border flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-term-green inline-block"></span>
                <span className="text-slate-300 font-semibold">neofetch --specs</span>
              </div>
              <span className="text-term-dim text-[11px]">x86_64</span>
            </div>

            <div className="p-5 font-mono text-xs space-y-3">
              {/* ASCII / Monospace Badge */}
              <div className="p-3 bg-term-bg rounded border border-term-border text-term-green text-[11px] leading-tight select-none">
                <pre>{`    /\\_/\\  
   ( o.o )  affan@portfolio
    > ^ <   ----------------`}</pre>
              </div>

              <div className="space-y-2 text-slate-300 pt-1">
                <div className="flex justify-between border-b border-term-border/40 pb-1.5">
                  <span className="text-term-dim">USER:</span>
                  <span className="text-term-green font-semibold">{personalInfo.handle}</span>
                </div>
                <div className="flex justify-between border-b border-term-border/40 pb-1.5">
                  <span className="text-term-dim">TITLE:</span>
                  <span className="text-slate-200">{personalInfo.title}</span>
                </div>
                <div className="flex justify-between border-b border-term-border/40 pb-1.5">
                  <span className="text-term-dim">OS:</span>
                  <span className="text-slate-200">{systemSpecs.os}</span>
                </div>
                <div className="flex justify-between border-b border-term-border/40 pb-1.5">
                  <span className="text-term-dim">SHELL:</span>
                  <span className="text-slate-200">{systemSpecs.shell}</span>
                </div>
                <div className="flex justify-between border-b border-term-border/40 pb-1.5">
                  <span className="text-term-dim">EDITOR:</span>
                  <span className="text-slate-200">{systemSpecs.editor}</span>
                </div>
                <div className="flex justify-between border-b border-term-border/40 pb-1.5">
                  <span className="text-term-dim">UPTIME:</span>
                  <span className="text-term-green">{systemSpecs.uptime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-term-dim">LOCATION:</span>
                  <span className="text-term-cyan">{personalInfo.location}</span>
                </div>
              </div>

              {/* Color palette test block */}
              <div className="pt-2 flex items-center gap-1.5">
                <span className="w-5 h-3 bg-slate-900 rounded"></span>
                <span className="w-5 h-3 bg-red-500 rounded"></span>
                <span className="w-5 h-3 bg-term-green rounded"></span>
                <span className="w-5 h-3 bg-term-amber rounded"></span>
                <span className="w-5 h-3 bg-term-cyan rounded"></span>
                <span className="w-5 h-3 bg-purple-500 rounded"></span>
                <span className="w-5 h-3 bg-slate-200 rounded"></span>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Dossier (Bio, Philosophy, Goals, Interests) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2 border-b border-term-border pb-3 font-mono text-xs">
              <button
                onClick={() => setActiveTab('bio')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  activeTab === 'bio'
                    ? 'bg-term-green/10 text-term-green border border-term-green/40 font-bold'
                    : 'text-term-dim hover:text-slate-200 bg-term-card'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>bio.md</span>
              </button>

              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  activeTab === 'philosophy'
                    ? 'bg-term-green/10 text-term-green border border-term-green/40 font-bold'
                    : 'text-term-dim hover:text-slate-200 bg-term-card'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>philosophy.md</span>
              </button>

              <button
                onClick={() => setActiveTab('goals')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  activeTab === 'goals'
                    ? 'bg-term-green/10 text-term-green border border-term-green/40 font-bold'
                    : 'text-term-dim hover:text-slate-200 bg-term-card'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>career_goals.txt</span>
              </button>
            </div>

            {/* Tab Content Display */}
            <div className="p-6 rounded-xl bg-term-card/60 border border-term-border space-y-4">
              
              {activeTab === 'bio' && (
                <div className="space-y-4 text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                  <div className="flex items-center gap-2 font-mono text-xs text-term-green pb-2 border-b border-term-border/40">
                    <Code className="w-4 h-4" />
                    <span># Who I Am &amp; What Drives Me</span>
                  </div>
                  
                  <p>
                    Hello! I&apos;m <span className="text-white font-medium">{personalInfo.name}</span>, a full-stack engineer driven by curiosity and a love for building fast, robust, and clean digital experiences. My journey began with experimenting in web fundamentals, discovering the beauty of semantic markup, and gradually growing into architecting reactive applications and full-scale services.
                  </p>

                  <p>
                    I believe that great software lives at the intersection of solid engineering foundations and intuitive design. Whether crafting responsive frontend interfaces with React &amp; Tailwind CSS or engineering scalable backend APIs with Node.js and PostgreSQL, I prioritize clean code, accessibility, and high performance.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-slate-300 p-2 rounded bg-term-bg border border-term-border">
                      <Cpu className="w-4 h-4 text-term-amber" />
                      <span>Fueled by curiosity &amp; algorithms</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 p-2 rounded bg-term-bg border border-term-border">
                      <MapPin className="w-4 h-4 text-term-cyan" />
                      <span>Working from {personalInfo.location}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="space-y-4 text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                  <div className="flex items-center gap-2 font-mono text-xs text-term-green pb-2 border-b border-term-border/40">
                    <Compass className="w-4 h-4" />
                    <span># Engineering Principles</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs sm:text-sm">
                    <div className="p-3 rounded bg-term-bg border border-term-border">
                      <div className="text-term-cyan font-bold mb-1">1. Keep It Lean &amp; Fast</div>
                      <p className="text-slate-400 font-sans text-xs">
                        Avoid unnecessary bloat. Prioritize native web APIs, responsive layouts, and lightning-fast bundle performance.
                      </p>
                    </div>

                    <div className="p-3 rounded bg-term-bg border border-term-border">
                      <div className="text-term-green font-bold mb-1">2. Developer Experience (DX) Matters</div>
                      <p className="text-slate-400 font-sans text-xs">
                        Clean git commit histories, expressive variable names, and clear modular structure make codebases a joy to build upon.
                      </p>
                    </div>

                    <div className="p-3 rounded bg-term-bg border border-term-border">
                      <div className="text-term-amber font-bold mb-1">3. User-First Empathy</div>
                      <p className="text-slate-400 font-sans text-xs">
                        Accessibility, keyboard ergonomics, and fluid micro-interactions ensure the software feels natural and effortless.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'goals' && (
                <div className="space-y-4 text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                  <div className="flex items-center gap-2 font-mono text-xs text-term-green pb-2 border-b border-term-border/40">
                    <Target className="w-4 h-4" />
                    <span># Aspirations &amp; Milestones</span>
                  </div>

                  <p>
                    My primary objective is to contribute to high-impact software systems, collaborate with forward-thinking engineering teams, and continuously level up my technical breadth.
                  </p>

                  <ul className="space-y-2 font-mono text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="text-term-green font-bold">[✓]</span>
                      <span>Master modern full-stack web architectures (React 19, TypeScript, Node.js)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-term-green font-bold">[✓]</span>
                      <span>Deepen understanding of distributed systems and cloud deployments (Docker, CI/CD)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-term-cyan font-bold">[▶]</span>
                      <span>Contribute actively to developer tooling and open-source CLI utilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-term-amber font-bold">[ ]</span>
                      <span>Publish in-depth technical case studies and architectural retrospectives</span>
                    </li>
                  </ul>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default About;
