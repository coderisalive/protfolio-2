import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Building2,
  Rocket,
  Calendar,
  Tag,
  Trophy,
  Newspaper,
  Award,
  Drama,
  ChevronRight,
  GitCommit
} from 'lucide-react';

const iconMap = {
  GraduationCap,
  BookOpen,
  Building2,
  Rocket,
  Trophy,
  Newspaper,
  Award,
  Theater: Drama,
  Drama
};

const categoryBadgeStyles = {
  school: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  college: 'bg-blue-50 text-blue-700 border-blue-200',
  startup: 'bg-indigo-50 text-indigo-700 border-indigo-200',
};

export const Timeline = ({ items }) => {
  return (
    <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-300 space-y-12 my-4">
      {items.map((item) => {
        const IconComponent = iconMap[item.icon] || BookOpen;
        const badgeStyle = categoryBadgeStyles[item.category] || 'bg-slate-100 text-slate-700 border-slate-200';
        const hasSubItems = item.subItems && item.subItems.length > 0;

        return (
          <div key={item.id} className="relative group">
            
            {/* Main Milestone Node Dot */}
            <div className="absolute -left-[33px] sm:-left-[49px] top-0 w-12 h-12 rounded-full bg-white border-4 border-slate-950 group-hover:border-indigo-600 flex items-center justify-center text-slate-950 group-hover:text-indigo-600 shadow-md transition-all z-10">
              <IconComponent className="w-5 h-5" />
            </div>

            {/* Main Milestone Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-0.5 rounded-full text-xs font-bold border ${badgeStyle}`}>
                    {item.type}
                  </span>
                  <span className="flex items-center text-xs text-slate-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {item.year}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-black text-slate-950 tracking-tight">
                {item.title}
              </h3>
              
              {item.subtitle && (
                <p className="text-sm font-bold text-indigo-600 mb-2">
                  {item.subtitle}
                </p>
              )}

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700"
                    >
                      <Tag className="w-3 h-3 mr-1 text-slate-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* NESTED SUB-ITEMS BRANCHES (College Positions & Roles) */}
              {hasSubItems && (
                <div className="mt-6 pt-6 border-t border-slate-200/80 space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    <GitCommit className="w-4 h-4 text-indigo-600" />
                    <span>Year-By-Year College Timeline</span>
                  </div>

                  <div className="pl-4 border-l-2 border-dashed border-indigo-300 space-y-4">
                    {item.subItems.map((sub) => {
                      const SubIcon = iconMap[sub.icon] || ChevronRight;
                      return (
                        <div key={sub.id} className="relative pl-6 group/sub">
                          
                          {/* Branch Connector Node */}
                          <div className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-white shadow-sm">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>

                          <div className="bg-slate-50 hover:bg-indigo-50/50 p-4 rounded-xl border border-slate-200/80 transition-colors">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                              <div className="flex items-center space-x-2">
                                <SubIcon className="w-4 h-4 text-indigo-600" />
                                <h4 className="text-sm font-extrabold text-slate-950">
                                  {sub.title}
                                </h4>
                              </div>
                              {sub.badge && (
                                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                                  {sub.badge}
                                </span>
                              )}
                            </div>

                            {sub.role && (
                              <p className="text-xs font-semibold text-indigo-600 mb-1">
                                {sub.role}
                              </p>
                            )}

                            <p className="text-xs text-slate-600 leading-relaxed">
                              {sub.description}
                            </p>
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
