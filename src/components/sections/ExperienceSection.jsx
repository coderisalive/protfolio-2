import React from 'react';
import { Cpu } from 'lucide-react';
import { experienceData } from '../../data/experience';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="space-y-6 scroll-mt-24">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Work & Research</span>
        <h2 className="text-3xl font-black text-slate-950 tracking-tight flex items-center mt-1">
          <Cpu className="w-7 h-7 mr-2.5 text-slate-950" />
          Work & Research Experience
        </h2>
      </div>

      {experienceData.map((exp) => (
        <div key={exp.id} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-100">
                {exp.type}
              </span>
              <h3 className="text-xl font-black text-slate-950 mt-1">{exp.role}</h3>
              <p className="text-sm font-semibold text-slate-700">{exp.organization} ({exp.location})</p>
            </div>
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
              {exp.period}
            </span>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {exp.bullets && exp.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <span className="text-indigo-600 font-bold text-base mt-0.5">•</span>
                <p className="leading-relaxed">{bullet}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {exp.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                {tag}
              </span>
            ))}
          </div>

        </div>
      ))}

    </section>
  );
};

export default ExperienceSection;
