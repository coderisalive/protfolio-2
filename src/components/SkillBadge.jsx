import React from 'react';
import {
  Code2,
  FileCode,
  Terminal,
  Layout,
  Database,
  Cpu,
  Atom,
  Zap,
  Palette,
  Server,
  Layers,
  Globe,
  Box,
  GitBranch,
  Container,
  Send,
  UploadCloud,
  Laptop,
  Figma,
  HardDrive,
  Flame,
  Cloud
} from 'lucide-react';

const iconMap = {
  Code2,
  FileCode,
  Terminal,
  Layout,
  Database,
  Cpu,
  Atom,
  Zap,
  Palette,
  Server,
  Layers,
  Globe,
  Box,
  GitBranch,
  Container,
  Send,
  UploadCloud,
  Laptop,
  Figma,
  HardDrive,
  Flame,
  Cloud
};

export const SkillBadge = ({ skill }) => {
  const IconComponent = iconMap[skill.icon] || Code2;

  const levelColor = {
    Advanced: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Intermediate: 'bg-blue-50 text-blue-700 border-blue-200',
    Basic: 'bg-slate-100 text-slate-700 border-slate-200',
  }[skill.level] || 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <div className="inline-flex items-center space-x-2.5 px-3 py-2 rounded-lg bg-white border border-slate-200/90 shadow-sm hover:shadow hover:border-indigo-300 transition-all group">
      <div className="w-7 h-7 rounded-md bg-slate-100 group-hover:bg-indigo-50 flex items-center justify-center text-slate-600 group-hover:text-indigo-600 transition-colors">
        <IconComponent className="w-4 h-4" />
      </div>
      <div>
        <span className="block text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
          {skill.name}
        </span>
        {skill.level && (
          <span className={`inline-block px-1.5 py-0.2 text-[10px] font-medium rounded ${levelColor}`}>
            {skill.level}
          </span>
        )}
      </div>
    </div>
  );
};

export default SkillBadge;
