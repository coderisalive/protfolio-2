import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, Tag } from 'lucide-react';

export const CertificateCard = ({ cert }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between group">
      
      <div>
        
        {/* Top Header & Badge */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center space-x-3">
            {cert.badge ? (
              <img
                src={cert.badge}
                alt={cert.issuer}
                className="w-12 h-12 rounded-lg object-cover border border-slate-200 shadow-sm group-hover:scale-105 transition-transform"
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Award className="w-6 h-6" />
              </div>
            )}

            <div>
              <span className="inline-flex items-center text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                {cert.issuer}
              </span>
              <div className="flex items-center text-xs text-slate-500 mt-1">
                <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                {cert.date}
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 tracking-tight">
          {cert.title}
        </h3>

        {/* Credential ID */}
        {cert.credentialId && (
          <p className="text-xs text-slate-500 font-mono mb-4 flex items-center">
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600 inline" />
            <span>ID: {cert.credentialId}</span>
          </p>
        )}

        {/* Skills Tagged */}
        {cert.skills && cert.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {cert.skills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600"
              >
                <Tag className="w-2.5 h-2.5 mr-1 text-slate-400" />
                {skill}
              </span>
            ))}
          </div>
        )}

      </div>

      {/* Verify Link */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">Verified Credential</span>

        {cert.verifyUrl ? (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:text-indigo-700 hover:underline transition-all"
          >
            <span>Verify</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        ) : (
          <span className="text-xs text-slate-400 italic">No link</span>
        )}
      </div>

    </div>
  );
};

export default CertificateCard;
