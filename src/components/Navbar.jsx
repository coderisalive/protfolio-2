import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, FileDown } from 'lucide-react';
import { profileData } from '../data/profile';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', targetId: 'home' },
    { name: 'Education', targetId: 'education' },
    { name: 'Experience', targetId: 'experience' },
    { name: 'Projects', targetId: 'projects' },
    { name: 'Skills', targetId: 'skills' },
    { name: 'Kova Studio', targetId: 'companyx' },
    { name: 'Achievements', targetId: 'achievements' },
    { name: 'Contact Me', targetId: 'contact' },
  ];

  // Deterministic scroll position listener for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // If near top of page, force home active
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      const scrollPosition = window.scrollY + 140; // Offset below sticky header

      const sections = navLinks
        .map((link) => document.getElementById(link.targetId))
        .filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run immediately on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId) => {
    setIsOpen(false);
    setActiveSection(targetId);

    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fafafa]/90 backdrop-blur-md border-b border-slate-200/60 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Circular PKS Logo Badge & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-extrabold text-sm flex items-center justify-center tracking-tight shadow-md group-hover:scale-105 transition-transform duration-200 border-2 border-white">
              {profileData.initials || 'PKS'}
            </div>
            {/* <span className="hidden sm:inline-block font-extrabold text-slate-950 text-sm tracking-tight group-hover:text-indigo-600 transition-colors">
              {profileData.name}
            </span> */}
          </button>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5 justify-center flex-1 mx-4">
            {navLinks.map((link) => {
              const active = activeSection === link.targetId;
              return (
                <button
                  key={link.targetId}
                  onClick={() => handleNavClick(link.targetId)}
                  className={`text-xs xl:text-sm font-semibold transition-all relative py-1 focus:outline-none whitespace-nowrap ${
                    active
                      ? 'text-slate-950 font-bold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-slate-950 rounded-full animate-in fade-in duration-200"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Social Media Links */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 hover:scale-110 transition-transform p-1"
              title="GitHub"
            >
              <Github className="w-5 h-5 fill-current" />
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#0A66C2] hover:scale-110 transition-transform p-1"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </a>

            <a
              href={profileData.socials.email}
              className="text-slate-700 hover:text-slate-950 hover:scale-110 transition-transform p-1"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={profileData.socials.phone}
              className="text-emerald-600 hover:scale-110 transition-transform p-1"
              title="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const active = activeSection === link.targetId;
            return (
              <button
                key={link.targetId}
                onClick={() => handleNavClick(link.targetId)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-semibold transition-colors ${
                  active ? 'text-slate-950 bg-slate-100 font-bold' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.name}
              </button>
            );
          })}
          
          <div className="pt-3 border-t border-slate-100 flex items-center justify-around">
            <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="text-slate-900">
              <Github className="w-5 h-5" />
            </a>
            <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="text-[#0A66C2]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={profileData.socials.email} className="text-slate-700">
              <Mail className="w-5 h-5" />
            </a>
            <a href={profileData.socials.phone} className="text-emerald-600">
              <Phone className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-2">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-2.5 bg-slate-950 text-white rounded-lg text-sm font-semibold"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
