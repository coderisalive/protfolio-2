import React from 'react';
import { Rocket, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { startupData } from '../data/startup';

export const StartupCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-sm border border-slate-200/90 relative overflow-hidden space-y-8">
      
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600 shadow-xs">
            <Rocket className="w-6 h-6" />
          </div>
          <div>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200/80 mb-1">
              <Sparkles className="w-3 h-3 mr-1 text-indigo-600" />
              Startup Co-Founder
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              {startupData.name}
            </h3>
          </div>
        </div>

        {startupData.website && (
          <a
            href={startupData.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all group"
          >
            <span>Visit kovastudio.me</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        )}
      </div>

      {/* Tagline & Description */}
      <div className="space-y-2">
        <p className="text-indigo-600 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest">
          "{startupData.tagline}"
        </p>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
          {startupData.description}
        </p>
      </div>

      {/* 7 CORE DOMAINS / SERVICES GRID */}
      <div>
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          Services & Expertise Domains
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {startupData.services.map((service) => (
            <div
              key={service.num}
              className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/60 hover:border-slate-300 hover:bg-slate-100/50 transition-all space-y-1.5 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-indigo-600">
                  {service.num}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h5 className="text-sm font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h5>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights & Tech Stack Footer */}
      <div className="pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {startupData.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-500 font-medium shrink-0">
          Role: <strong className="text-slate-950">{startupData.role}</strong> ({startupData.period})
        </div>
      </div>

    </div>
  );
};

export default StartupCard;
