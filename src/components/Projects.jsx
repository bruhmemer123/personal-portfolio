import React, { useState, useImperativeHandle, forwardRef, useRef } from 'react';
import { Search, ExternalLink, GitBranch, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const Projects = forwardRef((props, ref) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showAll, setShowAll] = useState(false);
  const searchInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusSearch: () => {
      searchInputRef.current?.focus();
    }
  }));

  const categories = ['ALL', 'Full-Stack', 'Developer Tools', 'Frontend'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'ALL' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Limit visible items to 4 by default for a tight viewport fit
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-12 sm:py-16 relative border-t border-term-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Compact Header & Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <div className="font-mono text-xs text-term-green flex items-center gap-2 mb-1">
              <span>03.</span>
              <span>// REPOSITORIES</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Featured <span className="text-term-green">Projects</span>
            </h2>
          </div>

          {/* Unified Search & Category Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-term-dim" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Filter tech or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-term-card border border-term-border rounded-lg pl-8 pr-3 py-1.5 font-mono text-xs text-slate-200 placeholder-term-dim focus:outline-none focus:border-term-green/60 transition-colors"
              />
            </div>

            {/* Compact Pill Filters */}
            <div className="flex items-center gap-1 bg-term-card border border-term-border p-1 rounded-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${selectedCategory === cat
                      ? 'bg-term-green/15 text-term-green border border-term-green/30 font-semibold'
                      : 'text-term-dim hover:text-slate-300'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2x2 Clean Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 sm:p-5 rounded-xl bg-term-card/80 border border-term-border/80 hover:border-term-green/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Branch Header */}
                <div className="flex items-center justify-between font-mono text-[11px] text-term-dim mb-2">
                  <span className="flex items-center gap-1.5 text-term-green/90">
                    <GitBranch className="w-3 h-3" />
                    <span>{project.branch}</span>
                  </span>
                  <span className="bg-term-bg/80 border border-term-border/60 px-2 py-0.5 rounded text-[10px]">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-term-green transition-colors mb-1.5">
                  {project.title}
                </h3>

                {/* Streamlined Description */}
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Compact Tech Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-term-bg border border-term-border/50 text-term-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-3 border-t border-term-border/40 flex items-center justify-between font-mono text-xs">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-term-green flex items-center gap-1.5 transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-term-green hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] text-term-dim">Local CLI / Bot</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All / Collapse Toggle */}
        {filteredProjects.length > 4 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 font-mono text-xs text-term-green bg-term-card hover:bg-term-green/10 px-4 py-2 rounded-lg border border-term-green/30 transition-all"
            >
              <span>{showAll ? "Collapse Grid" : `Show All (${filteredProjects.length} Projects)`}</span>
              {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
export default Projects;