import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Github, Sparkles, BookOpen, Code, ArrowRight } from 'lucide-react';
import { allProjectsData } from '../../data/projects';
import { HorizontalScroll } from '../HorizontalScroll';

export const ProjectsSection = () => {
  // Projects dual-level filter
  const [projectGroupTab, setProjectGroupTab] = useState('all'); // 'all', 'individual', 'group'
  const [projectLevelFilter, setProjectLevelFilter] = useState('all'); // 'all', 'Basic', 'Intermediate', 'Advanced', 'Hackathon'
  const [selectedProject, setSelectedProject] = useState(null); // Selected project for rectangle modal popup

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background body scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // 1. Filter projects scoped under current Type tab (All, Individual, Group)
  const projectsByType = allProjectsData.filter((project) => {
    if (projectGroupTab === 'individual' && project.isGroup) return false;
    if (projectGroupTab === 'group' && !project.isGroup) return false;
    return true;
  });

  // 2. Real-time dynamic level counts under current Type tab
  const basicCount = projectsByType.filter((p) => p.level === 'Basic').length;
  const intermediateCount = projectsByType.filter((p) => p.level === 'Intermediate').length;
  const advancedCount = projectsByType.filter((p) => p.level === 'Advanced').length;
  const hackathonCount = projectsByType.filter((p) => p.isHackathon).length;

  // Level display priority (Advanced first, then Intermediate, then Basic)
  const levelPriority = {
    'Advanced': 1,
    'Intermediate': 2,
    'Basic': 3,
  };

  // 3. Final filtered and ordered projects list (Advanced -> Intermediate -> Basic)
  const filteredProjects = projectsByType
    .filter((project) => {
      if (projectLevelFilter === 'Basic' && project.level !== 'Basic') return false;
      if (projectLevelFilter === 'Intermediate' && project.level !== 'Intermediate') return false;
      if (projectLevelFilter === 'Advanced' && project.level !== 'Advanced') return false;
      if (projectLevelFilter === 'Hackathon' && !project.isHackathon) return false;

      return true;
    })
    .sort((a, b) => {
      const priorityA = levelPriority[a.level] || 4;
      const priorityB = levelPriority[b.level] || 4;
      return priorityA - priorityB;
    });

  // Tab change handler with smart level auto-reset
  const handleGroupTabChange = (newTab) => {
    setProjectGroupTab(newTab);
    const newScoped = allProjectsData.filter((project) => {
      if (newTab === 'individual' && project.isGroup) return false;
      if (newTab === 'group' && !project.isGroup) return false;
      return true;
    });

    if (projectLevelFilter === 'Basic' && newScoped.filter((p) => p.level === 'Basic').length === 0) {
      setProjectLevelFilter('all');
    } else if (projectLevelFilter === 'Intermediate' && newScoped.filter((p) => p.level === 'Intermediate').length === 0) {
      setProjectLevelFilter('all');
    } else if (projectLevelFilter === 'Advanced' && newScoped.filter((p) => p.level === 'Advanced').length === 0) {
      setProjectLevelFilter('all');
    } else if (projectLevelFilter === 'Hackathon' && newScoped.filter((p) => p.isHackathon).length === 0) {
      setProjectLevelFilter('all');
    }
  };

  return (
    <section id="projects" className="space-y-8 scroll-mt-24">
      
      {/* MINIMAL SECTION HEADER */}
      <div className="border-b border-slate-200/80 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase block mb-1">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Featured Projects ({filteredProjects.length})
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Projects ordered by complexity (Advanced → Intermediate → Basic). Click any card to open details modal.
          </p>
        </div>

        <span className="hidden sm:inline-flex items-center text-xs font-medium text-slate-500 bg-slate-100/80 px-3 py-1 rounded-full shrink-0 border border-slate-200/60">
          Side Scroll Enabled →
        </span>
      </div>

      {/* MINIMAL DUAL-LEVEL FILTER CONTROLS */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-3.5">
        
        {/* Row 1: Segmented Primary Type Tabs (All, Individual, Group) */}
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3 overflow-x-auto">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 shrink-0">Type:</span>
          
          <div className="bg-slate-100/90 p-1 rounded-xl flex items-center space-x-1 shrink-0">
            <button
              onClick={() => handleGroupTabChange('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                projectGroupTab === 'all'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              All ({allProjectsData.length})
            </button>

            <button
              onClick={() => handleGroupTabChange('individual')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                projectGroupTab === 'individual'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              Individual ({allProjectsData.filter((p) => !p.isGroup).length})
            </button>

            <button
              onClick={() => handleGroupTabChange('group')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                projectGroupTab === 'group'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              Group Projects ({allProjectsData.filter((p) => p.isGroup).length})
            </button>
          </div>
        </div>

        {/* Row 2: Secondary Category Filter Pills (Ordered: Advanced -> Intermediate -> Basic -> Hackathon) */}
        <div className="flex items-center space-x-2 overflow-x-auto pt-0.5">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 shrink-0">Level:</span>

          <button
            onClick={() => setProjectLevelFilter('all')}
            className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              projectLevelFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100/80 border border-slate-200/70 text-slate-700 hover:bg-slate-200/60'
            }`}
          >
            All Levels ({projectsByType.length})
          </button>

          <button
            onClick={() => setProjectLevelFilter('Advanced')}
            disabled={advancedCount === 0}
            className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              projectLevelFilter === 'Advanced'
                ? 'bg-red-600 text-white shadow-sm'
                : advancedCount === 0
                ? 'bg-slate-50 text-slate-300 border border-slate-100 cursor-not-allowed opacity-50'
                : 'bg-red-50 border border-red-200/80 text-red-800 hover:bg-red-100/80'
            }`}
          >
            Advanced ({advancedCount})
          </button>

          <button
            onClick={() => setProjectLevelFilter('Intermediate')}
            disabled={intermediateCount === 0}
            className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              projectLevelFilter === 'Intermediate'
                ? 'bg-amber-600 text-white shadow-sm'
                : intermediateCount === 0
                ? 'bg-slate-50 text-slate-300 border border-slate-100 cursor-not-allowed opacity-50'
                : 'bg-amber-50 border border-amber-200/80 text-amber-800 hover:bg-amber-100/80'
            }`}
          >
            Intermediate ({intermediateCount})
          </button>

          <button
            onClick={() => setProjectLevelFilter('Basic')}
            disabled={basicCount === 0}
            className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              projectLevelFilter === 'Basic'
                ? 'bg-emerald-600 text-white shadow-sm'
                : basicCount === 0
                ? 'bg-slate-50 text-slate-300 border border-slate-100 cursor-not-allowed opacity-50'
                : 'bg-emerald-50 border border-emerald-200/80 text-emerald-800 hover:bg-emerald-100/80'
            }`}
          >
            Basic ({basicCount})
          </button>

          <button
            onClick={() => setProjectLevelFilter('Hackathon')}
            disabled={hackathonCount === 0}
            className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              projectLevelFilter === 'Hackathon'
                ? 'bg-purple-600 text-white shadow-sm'
                : hackathonCount === 0
                ? 'bg-slate-50 text-slate-300 border border-slate-100 cursor-not-allowed opacity-50'
                : 'bg-purple-50 border border-purple-200/80 text-purple-800 hover:bg-purple-100/80'
            }`}
          >
            Hackathon ({hackathonCount})
          </button>
        </div>

      </div>

      {/* COMPACT UNIFORM CAROUSEL CARDS (ADVANCED -> INTERMEDIATE -> BASIC ORDER) */}
      {filteredProjects.length > 0 ? (
        <HorizontalScroll>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              <div className="space-y-3">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      project.level === 'Advanced'
                        ? 'bg-slate-950 text-white'
                        : project.level === 'Intermediate'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200/80'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
                    }`}
                  >
                    {project.level}
                  </span>

                  {project.isGroup && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 uppercase">
                      Group
                    </span>
                  )}

                  {project.isHackathon && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-purple-800 bg-purple-50 border border-purple-200/80 uppercase">
                      Hackathon
                    </span>
                  )}
                </div>

                {/* Title & Short Description */}
                <div>
                  <h4 className="text-base font-black text-slate-950 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {project.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1 line-clamp-2 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.tech.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200/50">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-50 text-slate-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Details CTA Trigger */}
              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                <span className="flex items-center">
                  View Project Details
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] text-slate-400 font-mono font-normal">Click Popup</span>
              </div>
            </div>
          ))}
        </HorizontalScroll>
      ) : (
        <div className="bg-white p-8 rounded-2xl border border-slate-200/80 text-center max-w-md mx-auto shadow-sm">
          <h4 className="text-sm font-bold text-slate-800">No projects match the selected filters</h4>
          <button
            onClick={() => {
              setProjectGroupTab('all');
              setProjectLevelFilter('all');
            }}
            className="mt-3 px-3.5 py-1.5 bg-slate-950 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* RECTANGLE POP-UP MODAL WINDOW FOR PROJECT DETAILS (Mounted to document.body via Portal) */}
      {selectedProject && createPortal(
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[99999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 sm:py-10 overflow-y-auto no-scrollbar animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200/90 shadow-2xl relative space-y-6 animate-in zoom-in-95 duration-200 my-auto max-h-[85vh] overflow-y-auto no-scrollbar"
          >
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-950 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Badges */}
            <div className="flex flex-wrap items-center gap-2 pr-10">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950 text-white">
                {selectedProject.level}
              </span>
              {selectedProject.isGroup && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/80 uppercase">
                  Group Project
                </span>
              )}
              {selectedProject.isHackathon && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200/80 uppercase">
                  🏆 {selectedProject.hackathonName || 'Hackathon Winner'}
                </span>
              )}
            </div>

            {/* Project Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                {selectedProject.name}
              </h3>
            </div>

            {/* About Project */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center">
                <BookOpen className="w-3.5 h-3.5 mr-1.5 text-indigo-600" />
                About Project
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-normal bg-slate-50 p-4 rounded-xl border border-slate-100">
                {selectedProject.description}
              </p>
            </div>

            {/* Kya Sikhne Ko Mila (Learnings & Key Highlights) */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
                Kya Sikhne Ko Mila (Learnings & Features)
              </h4>

              <div className="space-y-2 bg-amber-50/50 p-4 rounded-xl border border-amber-200/60 text-xs text-slate-800">
                {selectedProject.journeyNote && (
                  <p className="font-semibold text-slate-950 mb-1">
                    💡 Core Learning: <span className="font-normal text-slate-700">{selectedProject.journeyNote}</span>
                  </p>
                )}

                {selectedProject.highlights ? (
                  <div className="space-y-1.5 pt-1">
                    {selectedProject.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-600">
                    Mastered layout architecture, state management, and real-time data handling through hands-on development.
                  </p>
                )}
              </div>
            </div>

            {/* Tech Stack Used */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center">
                <Code className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                Tech Stack Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Footer: Code & Site Links */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              {selectedProject.demo ? (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all"
                >
                  <span>Live Site Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-xs text-slate-400 italic">No Live Demo Available</span>
              )}
            </div>

          </div>
        </div>,
        document.body
      )}

    </section>
  );
};

export default ProjectsSection;
