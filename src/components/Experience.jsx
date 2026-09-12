import { useState } from 'react';
import { GitCommit, GitBranch, Calendar, Building, GraduationCap, Briefcase } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

export const Experience = () => {
  const [filterType, setFilterType] = useState('all');

  const filteredItems = filterType === 'all'
    ? timelineData
    : timelineData.filter(item => item.type === filterType);

  return (
    <section id="experience" className="py-16 sm:py-20 relative border-t border-term-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="font-mono text-xs text-term-green flex items-center gap-2 mb-2">
              <span>04.</span>
              <span>// REVISION HISTORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Experience &amp; <span className="text-term-green">Education</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-term-dim bg-term-card px-3 py-1.5 rounded border border-term-border flex items-center gap-2 w-fit">
            <GitCommit className="w-3.5 h-3.5 text-term-green" />
            <span>git log --graph --decorate</span>
          </div>
        </div>

        {/* Filter Toggle */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded transition-all ${filterType === 'all'
                ? 'bg-term-green text-black font-bold shadow-neon-green'
                : 'bg-term-card border border-term-border text-slate-300 hover:text-term-green'
              }`}
          >
            All Logs ({timelineData.length})
          </button>
          <button
            onClick={() => setFilterType('experience')}
            className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${filterType === 'experience'
                ? 'bg-term-green text-black font-bold shadow-neon-green'
                : 'bg-term-card border border-term-border text-slate-300 hover:text-term-green'
              }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience</span>
          </button>
          <button
            onClick={() => setFilterType('education')}
            className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${filterType === 'education'
                ? 'bg-term-green text-black font-bold shadow-neon-green'
                : 'bg-term-card border border-term-border text-slate-300 hover:text-term-green'
              }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </button>
        </div>

        {/* Timeline Container with Single Continuous Track Line */}
        <div className="relative pl-6 sm:pl-8">

          {/* Unbroken Vertical Git Line */}
          <div className="absolute left-[10px] sm:left-[14px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-term-green via-term-cyan to-term-border/40" />

          <div className="space-y-6">
            {filteredItems.map((item) => (
              <div key={item.commitHash} className="relative group">

                {/* Git Node Circle Centered Exactly Over The Line */}
                <div className="absolute left-[-14px] sm:left-[-18px] top-5 w-5 h-5 -translate-x-1/2 rounded-full bg-term-bg border-2 border-term-green group-hover:border-white group-hover:bg-term-green transition-all duration-300 flex items-center justify-center shadow-md z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-term-green group-hover:bg-black transition-colors" />
                </div>

                {/* Log Content Card */}
                <div className="p-5 sm:p-6 rounded-xl bg-term-card/80 border border-term-border hover:border-term-green/50 transition-all duration-300 shadow-lg space-y-3">

                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs pb-3 border-b border-term-border/40">
                    <div className="flex items-center gap-2">
                      <span className="text-term-green font-bold flex items-center gap-1">
                        <GitCommit className="w-3.5 h-3.5" />
                        commit {item.commitHash}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-term-cyan text-[10px] border border-slate-700 flex items-center gap-1">
                        <GitBranch className="w-2.5 h-2.5" />
                        {item.branch}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-term-dim text-[11px]">
                      <Calendar className="w-3 h-3 text-term-dim" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Role & Org */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-term-green transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-term-cyan font-mono text-xs mt-0.5 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5" />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-term-bg border border-term-border text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;