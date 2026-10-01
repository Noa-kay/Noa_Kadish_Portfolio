import React, { useEffect, useState } from 'react';
import { portfolioData, Language } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Github, Linkedin, Check, Download, ExternalLink } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, lang, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { profile } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyContact = () => {
    const contactText = `Noa Kadish | Junior Full Stack Developer\nEmail: noa.kadish@outlook.com\nPhone: 0548527526\nLocation: Petach tikva\nGitHub: https://github.com/Noa-kay\nLinkedIn: https://linkedin.com/in/noa-kadish`;
    navigator.clipboard.writeText(contactText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        id="cv-modal-card"
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col bg-white border border-slate-300 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div id="cv-modal-header" className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-200 bg-slate-100" dir="ltr">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Curriculum Vitae — Noa Kadish
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Download Button: Downloads original PDF file directly */}
            <a
              href="/Noa_Kadish_Resume.pdf"
              download="Noa_Kadish_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-2xs no-underline"
              title="Download PDF directly to your computer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Download PDF' : 'הורדת PDF'}</span>
            </a>

            {/* Print Button with dedicated print styling */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer shadow-2xs"
              title="Print resume or save via browser print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Print' : 'הדפסה'}</span>
            </button>

            {/* Copy Info Button */}
            <button
              onClick={handleCopyContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'en' ? 'Copied!' : 'הועתק!'}</span>
                </>
              ) : (
                <span>{lang === 'en' ? 'Copy Info' : 'העתקת פרטים'}</span>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer ms-1"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container - EXACT AUTHENTIC RESUME IN ORIGINAL ENGLISH (ALWAYS LTR) */}
        <div id="cv-document" className="flex-1 overflow-y-auto p-6 sm:p-10 text-start bg-white text-slate-900 font-sans print:p-0" dir="ltr">
          {/* Top Header - Exact Original Layout */}
          <div className="relative pb-4 border-b border-slate-200 space-y-1.5">
            {/* Top-left subtle warm camel accent tab matching the original */}
            <div className="w-12 h-2.5 bg-[#C59B6D] rounded-xs mb-2" />

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-none">
              Noa Kadish
            </h1>
            <p className="text-base font-bold text-slate-800">
              Junior Full Stack Developer
            </p>

            {/* Contact Details Line with Icons */}
            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs font-normal text-slate-700 pt-1">
              <a href="mailto:noa.kadish@outlook.com" className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-600" />
                <span>noa.kadish@outlook.com</span>
              </a>
              <a href="tel:0548527526" className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                <span>0548527526</span>
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-600" />
                <span>Petach tikva</span>
              </span>
              <a href="https://github.com/Noa-kay" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <Github className="w-3.5 h-3.5 text-slate-600" />
                <span>Noa-kay</span>
              </a>
              <a href="https://linkedin.com/in/noa-kadish" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <Linkedin className="w-3.5 h-3.5 text-slate-600" />
                <span>Noa kadish</span>
              </a>
            </div>
          </div>

          {/* 2-Column Exact Resume Layout - Fixed side-by-side in both preview and print */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-5 resume-columns">
            {/* LEFT COLUMN: Profile, Education, Technical Skills, Languages */}
            <div className="space-y-5">
              {/* Professional Profile */}
              <div className="space-y-1.5 cv-section">
                <h2 className="text-[13px] font-bold text-slate-950 border-b border-slate-900 pb-0.5 tracking-tight">
                  Professional Profile
                </h2>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Results-driven Full Stack Developer with strong logical thinking and a passion for deep system investigation. Proven track record of mastering new technologies quickly and delivering precise, creative solutions under pressure. Looking to join a development team as a Full Stack Developer to drive technical growth.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-2.5 cv-section">
                <h2 className="text-[13px] font-bold text-slate-950 border-b border-slate-900 pb-0.5 tracking-tight">
                  Education
                </h2>

                <div className="space-y-2 text-xs text-slate-700">
                  <div>
                    <span className="font-bold text-slate-950 block">2020–2024:</span>
                    <p>Full Matriculation Certificate: Beit Yaakov High School, Petah Tikva.</p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-950 block">09/2024–05/2026:</span>
                    <p>
                      <strong>MAHAT Studies:</strong> Specialization in Full-Stack Development, Databases, Systems Analysis, and Software Engineering.
                    </p>
                    <p className="mt-1">
                      <strong>UltraCode:</strong> Advanced technological training focusing on complex web architectures, client and server-side code optimization, and data-intensive application development.
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-950 block">
                      Practical Experience 05/2026 – 07/2026:
                    </span>
                    <p>
                      <strong>Chip Design & Verification Practicum:</strong> Successfully completed a comprehensive 250-hour, 9.5-week intensive program specializing in semiconductor planning, advanced simulation technologies, and hardware design verification methodologies.
                    </p>
                    <a
                      href="https://github.com/Noa-kay/WIFI-RX-Decimation-Verification"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-code text-[11px] text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>Github: WIFI-RX-Decimation-Verification</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  <div>
                    <span className="font-bold text-slate-950 block">Self-Learning & Enrichment:</span>
                    <p>
                      Completed professional online courses via the Campus IL platform in technology, development, and more. Continuous independent learning of new tools and technologies at all times.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-2 cv-section">
                <h2 className="text-[13px] font-bold text-slate-950 border-b border-slate-900 pb-0.5 tracking-tight">
                  Technical Skills
                </h2>

                <div className="space-y-2 text-xs text-slate-700">
                  <div>
                    <span className="font-bold text-slate-950 block">Languages & Frameworks:</span>
                    <p>
                      HTML, CSS, JavaScript, TS, Node.js, Angular, React, Java, C#, Python, SQL, Spring Boot, .NET Core, H2, MongoDB, AWS, Unix, Verilog, UVM.
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-950 block">Tools & Infrastructure:</span>
                    <p>
                      Git & GitHub, Salesforce, Algorithms, Data Structures, SOC fundamentals, DevOps fundamentals - Docker, Copilot, Claude, Cursor, Chip Design & Verification fundamentals, Logic Simulation.
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-950 block">Design & Software:</span>
                    <p>Microsoft Office, Canva, Photoshop.</p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-950 block">Operating Systems:</span>
                    <p>macOS, Windows, Linux (Project experience)</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-1 cv-section">
                <h2 className="text-[13px] font-bold text-slate-950 border-b border-slate-900 pb-0.5 tracking-tight">
                  Languages
                </h2>
                <div className="text-xs text-slate-700 space-y-0.5">
                  <p><strong>Hebrew:</strong> Native</p>
                  <p><strong>English:</strong> Very high proficiency, daily exposure and usage.</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Selected Projects */}
            <div className="space-y-4">
              <div className="space-y-3.5 cv-section">
                <h2 className="text-[13px] font-bold text-slate-950 border-b border-slate-900 pb-0.5 tracking-tight">
                  Selected Projects
                </h2>

                {/* Cars */}
                <div className="space-y-1 text-xs text-slate-700 cv-section">
                  <h3 className="font-bold text-slate-950">
                    Cars – E-commerce Platform:
                  </h3>
                  <p>
                    Designed and developed a responsive vehicle showcase and sales site using HTML and CSS. Optimized loading times and utilized Media Queries to ensure full responsiveness.
                  </p>
                  <p><strong>Tools:</strong> HTML, CSS.</p>
                  <a
                    href="https://github.com/Noa-kay/Cars-website"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-code text-[11px] text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub: Cars-website</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                {/* Color Bomb */}
                <div className="space-y-1 text-xs text-slate-700 cv-section">
                  <h3 className="font-bold text-slate-950">
                    Color Bomb – Interactive Browser Game:
                  </h3>
                  <p>
                    Developed a game application based on JavaScript, implementing complex client-side algorithmic logic.
                  </p>
                  <p><strong>Tools:</strong> HTML, CSS, JavaScript.</p>
                  <a
                    href="https://github.com/Noa-kay/Color-bomb-game"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-code text-[11px] text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub: Color-bomb game</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                {/* Fynx Web App */}
                <div className="space-y-1 text-xs text-slate-700 cv-section">
                  <h3 className="font-bold text-slate-950">
                    Fynx – Collaborative Full-Stack Application:
                  </h3>
                  <p>
                    Developed an end-to-end web system using Angular and Spring Boot for real-time data management and user interaction. Implemented REST APIs, multipart file uploads, and integrated an AI Chatbot while maintaining clear data separation through DTOs and Mappers.
                  </p>
                  <p><strong>Tools:</strong> Angular, Java, Spring Boot, H2 Database.</p>
                  <a
                    href="https://github.com/Noa-kay/web-app-Fynx"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-code text-[11px] text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub: web-app Fynx</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                {/* Fynx Automation */}
                <div className="space-y-1 text-xs text-slate-700 cv-section">
                  <h3 className="font-bold text-slate-950">
                    Fynx – Automation & Testing Framework:
                  </h3>
                  <p>
                    Developed a robust regression testing framework using C# and Selenium (POM), handling dynamic elements and advanced synchronization to ensure platform stability.
                  </p>
                  <p><strong>Tools:</strong> C#, Selenium, JS Executor, WebDriverWait.</p>
                  <a
                    href="https://github.com/Noa-kay/Fynx-Automation"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-code text-[11px] text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub: Fynx-Automation</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                {/* Recipes */}
                <div className="space-y-1 text-xs text-slate-700 cv-section">
                  <h3 className="font-bold text-slate-950">
                    Recipes – RESTful API Recipe Management Server:
                  </h3>
                  <p>
                    Developed a backend system for user and content management, including authentication and RBAC. Implemented core server-side logic, data validation, and cloud-based database management.
                  </p>
                  <p><strong>Tools:</strong> Node.js, Express, MongoDB Atlas, Joi, Postman.</p>
                  <a
                    href="https://github.com/Noa-kay/Recipes-Project-NodeJS"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-code text-[11px] text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub: Recipes-Project-NodeJS</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                {/* Seminar-Site */}
                <div className="space-y-1 text-xs text-slate-700 cv-section">
                  <h3 className="font-bold text-slate-950">
                    Seminar-Site – Student Profile Component in Institutional System:
                  </h3>
                  <p>
                    Developed a microservice for an integrated system, enabling management of personal profiles, projects, skills, and a CV-generator chatbot. Implemented an End-to-End architecture featuring a secured API server and a dynamic Vite-based client interface.
                  </p>
                  <p><strong>Tools:</strong> ASP.NET Core 7, React (Vite), Entity Framework Core, JWT, Material UI.</p>
                  <a
                    href="https://github.com/Noa-kay/Microservice-Profile"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-code text-[11px] text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub: Microservice-Profile</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
