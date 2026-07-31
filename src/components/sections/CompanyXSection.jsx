import React from 'react';
import { Rocket } from 'lucide-react';
import { StartupCard } from '../StartupCard';

export const CompanyXSection = () => {
  return (
    <section id="companyx" className="space-y-6 scroll-mt-24">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Venture & Startup</span>
        <h2 className="text-3xl font-black text-slate-950 tracking-tight flex items-center mt-1">
          <Rocket className="w-7 h-7 mr-2.5 text-slate-950" />
          Kova Studio Showcase
        </h2>
      </div>

      <StartupCard />

    </section>
  );
};

export default CompanyXSection;
