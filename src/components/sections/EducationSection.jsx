import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../../data/education';
import { timelineData } from '../../data/timeline';
import { certificatesData } from '../../data/certificates';
import { Timeline } from '../Timeline';
import { CertificateCard } from '../CertificateCard';
import { HorizontalScroll } from '../HorizontalScroll';

export const EducationSection = () => {
  return (
    <section id="education" className="space-y-10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="border-b border-slate-200 pb-6 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Academic & Journey</span>
          <h2 className="text-3xl font-black text-slate-950 tracking-tight flex items-center mt-1">
            <GraduationCap className="w-7 h-7 mr-2.5 text-slate-950" />
            Education & Milestones
          </h2>
        </div>
        <span className="hidden sm:inline-flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          Side Scroll Enabled →
        </span>
      </div>

      {/* 1. Academic Degrees Carousel */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Academic Degrees & Scores</h3>
        <HorizontalScroll>
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="w-[320px] sm:w-[420px] shrink-0 snap-start bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-slate-950 leading-snug">{edu.degree}</h4>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs font-bold text-indigo-600 mb-3">{edu.institution}</p>

                <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 mb-3">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>{edu.scoreType}: {edu.score}</span>
                </div>

                {edu.highlights && (
                  <div className="space-y-1 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </HorizontalScroll>
      </div>

      {/* 2. Milestones & Leadership Journey Tree */}
      <div className="space-y-4 pt-4">
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center">
          <BookOpen className="w-4 h-4 mr-2 text-slate-950" />
          Leadership & Roles Journey Tree
        </h3>
        <div className="bg-slate-50/70 p-4 sm:p-8 rounded-2xl border border-slate-200/60">
          <Timeline items={timelineData} />
        </div>
      </div>

      {/* 3. Verified Certifications Carousel */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center">
            <Award className="w-4 h-4 mr-2 text-slate-950" />
            Verified Certifications & NPTEL Credentials
          </h3>
        </div>

        <HorizontalScroll>
          {certificatesData.map((cert) => (
            <div key={cert.id} className="w-[300px] sm:w-[360px] shrink-0 snap-start">
              <CertificateCard cert={cert} />
            </div>
          ))}
        </HorizontalScroll>
      </div>

    </section>
  );
};

export default EducationSection;
