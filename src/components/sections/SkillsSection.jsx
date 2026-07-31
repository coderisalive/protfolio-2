import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { skillsData } from '../../data/skills';
import { SkillBadge } from '../SkillBadge';
import { HorizontalScroll } from '../HorizontalScroll';

export const SkillsSection = () => {
  const [skillCategory, setSkillCategory] = useState('All');

  const skillCategories = ['All', ...skillsData.map((g) => g.category)];
  const filteredSkillGroups = skillsData
    .map((group) => {
      if (skillCategory !== 'All' && group.category !== skillCategory) return null;
      return group;
    })
    .filter(Boolean);

  return (
    <section id="skills" className="space-y-8 scroll-mt-24">
      
      {/* Section Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Tech Stack</span>
          <h2 className="text-3xl font-black text-slate-950 tracking-tight flex items-center mt-1">
            <Layers className="w-7 h-7 mr-2.5 text-slate-950" />
            Technical Skills & Competencies
          </h2>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSkillCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                skillCategory === cat
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Category Cards with Carousels */}
      <div className="space-y-6">
        {filteredSkillGroups.map((group, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-slate-950 border-b border-slate-100 pb-2 flex items-center justify-between">
              <span>{group.category}</span>
              <span className="text-xs font-normal text-slate-400">Side scroll →</span>
            </h3>
            
            <HorizontalScroll>
              {group.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="shrink-0 snap-start">
                  <SkillBadge skill={skill} />
                </div>
              ))}
            </HorizontalScroll>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SkillsSection;
