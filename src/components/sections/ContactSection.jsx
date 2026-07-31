import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, AlertCircle, Loader2 } from 'lucide-react';
import { profileData } from '../../data/profile';
import { emailjsConfig } from '../../config/emailjs';

export const ContactSection = () => {
  const formRef = useRef();
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus(null);
    setErrorMessage('');

    try {
      // 1. Send primary contact email to admin (Prem)
      await emailjs.sendForm(
        emailjsConfig.serviceId,      // "service_vtjsvnb"
        emailjsConfig.templateId,     // "template_4xs33ep"
        formRef.current,
        emailjsConfig.publicKey       // "_i1KXmfg4F891UvZl"
      );

      // 2. Dispatch auto-reply email to visitor
      if (emailjsConfig.autoReplyTemplateId) {
        try {
          await emailjs.sendForm(
            emailjsConfig.serviceId,
            emailjsConfig.autoReplyTemplateId, // "template_diwesh7"
            formRef.current,
            emailjsConfig.publicKey
          );
        } catch (autoReplyError) {
          console.warn('Auto-reply warning:', autoReplyError);
        }
      }

      setFormStatus('success');
      setContactForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setFormStatus('error');
      setErrorMessage(
        error?.text || 'Could not send message. Please try again or email jobprem7464@gmail.com directly.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="space-y-8 scroll-mt-24 pt-4 border-t border-slate-200">
      
      <div>
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Get In Touch</span>
        <h2 className="text-3xl font-black text-slate-950 tracking-tight flex items-center mt-1">
          <Mail className="w-7 h-7 mr-2.5 text-slate-950" />
          Contact Me
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Interested in hiring or collaborating? Send a direct message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Direct Info Sidebar */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider border-b border-slate-100 pb-2">
              Direct Info
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <a href={`mailto:${profileData.email}`} className="font-semibold text-slate-800 hover:text-indigo-600">
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`tel:${profileData.phone}`} className="font-semibold text-slate-800 font-mono">
                  {profileData.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="font-semibold text-slate-800">{profileData.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-950 uppercase tracking-wider">Social Profiles</h3>
            <div className="flex items-center space-x-3">
              <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-950 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${profileData.email}`} className="p-2.5 rounded-lg bg-slate-100 hover:bg-indigo-600 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Powered by EmailJS */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            
            {formStatus === 'success' ? (
              <div className="p-6 rounded-2xl bg-emerald-50 text-emerald-900 text-center space-y-3 border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out! A confirmation auto-reply has been dispatched to your email address.
                </p>
                
                <div className="bg-white/80 p-3.5 rounded-xl border border-emerald-200/80 text-xs text-slate-700 font-medium space-y-1">
                  <p className="font-bold text-slate-950 flex items-center justify-center">
                    📩 Please check your Spam / Junk folder!
                  </p>
                  <p className="text-[11px] text-slate-500">
                    If you don't receive the email in your Primary Inbox within 1 minute, please check your Spam folder and click "Not Spam".
                  </p>
                </div>

                <button
                  onClick={() => setFormStatus(null)}
                  className="mt-2 px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-lg text-xs font-bold shadow-sm transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleContactSubmit} className="space-y-4">
                
                {formStatus === 'error' && (
                  <div className="p-3.5 rounded-lg bg-red-50 text-red-700 text-xs flex items-start space-x-2 border border-red-200">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Message Notice:</p>
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Prem Kumar Singh"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-slate-950 bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Email</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="jobprem7464@gmail.com"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-slate-950 bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    placeholder="Software Engineering Internship / Full-Time Role"
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-slate-950 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-slate-950 bg-slate-50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="px-6 py-2.5 bg-slate-950 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold text-xs rounded-lg shadow-md transition-all flex items-center space-x-2"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};

export default ContactSection;
