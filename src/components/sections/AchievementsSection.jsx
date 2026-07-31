import React from 'react';
import { Trophy } from 'lucide-react';
import { achievementsData } from '../../data/achievements';

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="space-y-8 scroll-mt-24">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Contests & Competitions</span>
        <h2 className="text-3xl font-black text-slate-950 tracking-tight flex items-center mt-1">
          <Trophy className="w-7 h-7 mr-2.5 text-slate-950" />
          Achievements & Competitive Coding
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                {item.badge}
              </span>
              <span className="text-xs font-semibold text-slate-500">{item.year}</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-950">{item.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AchievementsSection;
