import React from 'react';
import { ExternalLink, Mail, Phone, MapPin, Sparkles, Lightbulb } from 'lucide-react';
import { profileData } from '../../data/profile';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-12">
      
      {/* HERO MAIN CONTAINER */}
      <section id="home" className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 pt-4">
        
        {/* Left Column: Developer Portrait */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-[380px] aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-300/40 to-indigo-200/30 rounded-3xl filter blur-2xl opacity-70"></div>
            <img
              src={profileData.portraitImage}
              alt={profileData.name}
              className="w-full h-full object-cover rounded-3xl relative z-10 filter drop-shadow-xl hover:scale-[1.02] transition-transform duration-300 border-4 border-white shadow-xl"
            />
          </div>
        </div>

        {/* Right Column: Hero Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-left">
          <div className="space-y-3">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{profileData.status}</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-indigo-600">{profileData.name}</span>
            </h1>
            
            <p className="text-base sm:text-lg font-bold text-slate-800">
              {profileData.tagline}
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {profileData.shortBio}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-1">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-indigo-600" />
                {profileData.location}
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-1 text-indigo-600" />
                {profileData.email}
              </span>
              <span className="flex items-center font-mono">
                <Phone className="w-4 h-4 mr-1 text-emerald-600" />
                {profileData.phone}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-6 pt-4">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 shadow-md transition-all group"
            >
              <span>Download Resume</span>
              <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={scrollToContact}
              className="text-slate-950 font-bold text-sm hover:text-indigo-600 underline underline-offset-4 decoration-2 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>

      </section>

      {/* FLOATING STICKER BADGES */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center justify-center group">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
            <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
            <text className="text-[9px] font-bold tracking-[2.5px] uppercase fill-slate-800">
              <textPath href="#textPath" startOffset="0%">
                . Full Stack . Distributed Systems . AI / ML .
              </textPath>
            </text>
          </svg>
          <button
            onClick={scrollToContact}
            className="absolute w-14 h-14 rounded-full bg-slate-950 hover:bg-indigo-600 text-white text-[11px] font-bold flex items-center justify-center shadow-lg transition-all transform group-hover:scale-110"
          >
            Hire Me
          </button>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-white" title="Creative Engineering Solutions">
          <Lightbulb className="w-6 h-6 fill-amber-200 text-slate-950" />
        </div>
      </div>

      {/* QUICK STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-slate-200">
        {profileData.stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm text-center">
            <span className="block text-3xl font-extrabold text-slate-950 tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
              {stat.label}
            </span>
          </div>
        ))}
      </section>

    </div>
  );
};

export default HeroSection;
