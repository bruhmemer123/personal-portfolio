import React, { useState } from 'react';
import { Code2, Layout, Server, Wrench, Folder, FolderOpen, Terminal, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2,
  Layout,
  Server,
  Wrench,
};

export const Skills = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeGroup = skillsData[activeCategoryIndex] || skillsData[0];
  const ActiveIcon = iconMap[activeGroup.icon] || Code2;

  return (
    <section id="skills" className="py-12 sm:py-16 relative border-t border-term-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <div>
            <div className="font-mono text-xs text-term-green flex items-center gap-2 mb-1">
              <span>02.</span>
              <span>// DIRECTORY INSPECTION</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Technical <span className="text-term-green">Arsenal</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-term-dim bg-term-card px-3 py-1.5 rounded border border-term-border flex items-center gap-2 w-fit">
            <Terminal className="w-3.5 h-3.5 text-term-green" />
            <span>path: /usr/local/skills</span>
          </div>
        </div>

        {/* Split Directory Window */}
        <div className="rounded-xl bg-[#0d1117] border border-[#30363d] shadow-2xl overflow-hidden font-mono">

          {/* Top Window Bar */}
          <div className="px-4 py-2.5 bg-slate-900 border-b border-[#30363d] flex items-center justify-between text-xs select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="text-term-dim ml-2 hidden sm:inline">tree_explorer.sh</span>
            </div>
            <span className="text-term-green text-[10px]">SELECT_DIRECTORY</span>
          </div>

          {/* Interactive Split Pane */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[280px]">

            {/* Left Sidebar: File Tree Navigation */}
            <div className="md:col-span-4 bg-[#161b22]/60 border-b md:border-b-0 md:border-r border-[#30363d] p-3 sm:p-4 space-y-1">
              <div className="text-[10px] text-term-dim px-2 py-1 mb-1 font-semibold uppercase tracking-wider">
                Directories ({skillsData.length})
              </div>

              {skillsData.map((group, idx) => {
                const Icon = iconMap[group.icon] || Code2;
                const isActive = activeCategoryIndex === idx;

                return (
                  <button
                    key={group.category}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs transition-all flex items-center justify-between group ${isActive
                        ? 'bg-term-green/15 text-term-green border border-term-green/40 font-semibold'
                        : 'text-slate-300 hover:bg-[#21262d] hover:text-white border border-transparent'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {isActive ? (
                        <FolderOpen className="w-4 h-4 text-term-green shrink-0" />
                      ) : (
                        <Folder className="w-4 h-4 text-term-dim group-hover:text-slate-200 shrink-0" />
                      )}
                      <span className="truncate">{group.category}</span>
                    </div>

                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? 'bg-term-green/20 text-term-green' : 'bg-[#21262d] text-term-dim'
                      }`}>
                      {group.skills.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Details Pane: Active Category Modules */}
            <div className="md:col-span-8 p-4 sm:p-6 bg-[#0d1117] flex flex-col justify-between">
              <div>
                {/* Active Category Header */}
                <div className="flex items-center justify-between border-b border-[#21262d] pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-md bg-[#161b22] border border-[#30363d] text-term-green">
                      <ActiveIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {activeGroup.category}
                      </h3>
                      <p className="text-[10px] text-term-dim">
                        Loaded modules in active directory
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] text-term-cyan bg-term-cyan/10 border border-term-cyan/30 px-2 py-0.5 rounded">
                    DIR_INDEX_0{activeCategoryIndex + 1}
                  </span>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-term-green/40 transition-colors flex items-center justify-between text-xs group"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Check className="w-3.5 h-3.5 text-term-green shrink-0" />
                        <span className="text-slate-200 font-medium truncate">{skill.name}</span>
                      </div>
                      <span className="text-[10px] text-term-dim bg-[#0d1117] px-2 py-0.5 rounded border border-[#21262d] shrink-0">
                        #{skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Footer Line */}
              <div className="mt-6 pt-3 border-t border-[#21262d] flex items-center justify-between text-[11px] text-term-dim">
                <span>Status: Directory loaded successfully</span>
                <span className="text-term-green">100% operational</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;