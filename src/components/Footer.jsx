import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Dribbble } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer = () => {
  const handleScrollTo = (targetId) => {
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 mt-auto border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full bg-white text-slate-950 font-black text-xs flex items-center justify-center">
                {profileData.initials || 'PKS'}
              </div>
              <h3 className="text-white font-bold text-lg">{profileData.name}</h3>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              {profileData.tagline}. Dedicated to turning vision into reality with code and design.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.email}
                className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleScrollTo('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('education')} className="hover:text-white transition-colors">
                  Education & Journey
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('experience')} className="hover:text-white transition-colors">
                  Experience
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('projects')} className="hover:text-white transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('skills')} className="hover:text-white transition-colors">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('companyx')} className="hover:text-white transition-colors">
                  Kova Studio
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('contact')} className="hover:text-white transition-colors">
                  Contact Me
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Get in Touch</h4>
            <p className="text-sm text-slate-400 mb-2">Have an idea or opportunity?</p>
            <a
              href={profileData.socials.email}
              className="inline-flex items-center space-x-1 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>{profileData.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
