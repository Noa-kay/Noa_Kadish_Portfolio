import React, { useState } from 'react';
import { portfolioData, Language } from '../data/portfolioData';
import { Mail, Phone, Github, Send, Check, Linkedin, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const { profile } = portfolioData;

  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMsg(
        lang === 'en' ? 'Please fill in all required fields' : 'אנא מלאו את כל השדות'
      );
      return;
    }

    if (!formState.email.includes('@')) {
      setErrorMsg(
        lang === 'en' ? 'Please enter a valid email address' : 'אנא הזינו כתובת אימייל תקינה'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: formState.subject.trim()
            ? formState.subject.trim()
            : `Portfolio Inquiry from ${formState.name}`,
          message: formState.message,
          _replyto: formState.email,
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback
        const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
          formState.subject || `Message from ${formState.name}`
        )}&body=${encodeURIComponent(
          `From: ${formState.name} (${formState.email})\n\n${formState.message}`
        )}`;
        window.location.href = mailtoUrl;
        setIsSent(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
        formState.subject || `Message from ${formState.name}`
      )}&body=${encodeURIComponent(
        `From: ${formState.name} (${formState.email})\n\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
      setIsSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-200">
      {/* Centered, balanced container with consistent site design */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-9 text-center">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {lang === 'en' ? 'Get in Touch' : 'יצירת קשר'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? "Let's Connect" : 'בואו נשוחח'}
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            {lang === 'en'
              ? 'Available for Full Stack Developer roles in Central Israel or hybrid positions. Reach out directly or send a note below.'
              : 'זמינה להצעות עבודה בפיתוח Full Stack באזור המרכז או במודל היברידי. מוזמנים לשלוח מייל ישיר או הודעה בטופס.'}
          </p>
        </div>

        {/* ALL CONTACT ITEMS IN A SINGLE ORGANIZED HORIZONTAL ROW */}
        <div className="p-3 bg-slate-50/80 border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs">
            {/* 1. Email with Copy */}
            <div className="inline-flex items-center gap-1.5 p-1 pe-2 bg-white border border-slate-200/90 rounded-xl shadow-2xs">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 font-semibold text-slate-800 hover:text-blue-600 px-1.5 py-0.5 transition-colors font-mono-code"
                title="Email Noa"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{profile.email}</span>
              </a>
              <button
                onClick={() => handleCopy(profile.email, 'email')}
                className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedType === 'email' ? (
                  <span className="text-emerald-700 flex items-center gap-1 font-bold">
                    <Check className="w-3 h-3 text-emerald-600" /> {lang === 'en' ? 'Copied' : 'הועתק'}
                  </span>
                ) : (
                  <span>{lang === 'en' ? 'Copy' : 'העתקה'}</span>
                )}
              </button>
            </div>

            {/* 2. Phone with Copy */}
            <div className="inline-flex items-center gap-1.5 p-1 pe-2 bg-white border border-slate-200/90 rounded-xl shadow-2xs">
              <a
                href={`tel:${profile.phoneInternational}`}
                className="flex items-center gap-1.5 font-semibold text-slate-800 hover:text-blue-600 px-1.5 py-0.5 transition-colors font-mono-code"
                title="Call Noa"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{profile.phone}</span>
              </a>
              <button
                onClick={() => handleCopy(profile.phone, 'phone')}
                className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                title="Copy Phone"
              >
                {copiedType === 'phone' ? (
                  <span className="text-emerald-700 flex items-center gap-1 font-bold">
                    <Check className="w-3 h-3 text-emerald-600" /> {lang === 'en' ? 'Copied' : 'הועתק'}
                  </span>
                ) : (
                  <span>{lang === 'en' ? 'Copy' : 'העתקה'}</span>
                )}
              </button>
            </div>

            {/* 3. GitHub */}
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-colors shadow-2xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            {/* 4. LinkedIn (Right in the same row together with all of them!) */}
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-colors shadow-2xs"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-600" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* WIDENED "Send a Note" Form (max-w-xl with comfortable padding & breathing room) */}
        <div className="max-w-xl mx-auto bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-4 text-start">
          <div className="border-b border-slate-200 pb-2.5">
            <h3 className="text-sm font-bold text-slate-900">
              {lang === 'en' ? 'Send a Note' : 'שליחת הודעה'}
            </h3>
          </div>

          {isSent ? (
            <div className="p-6 rounded-xl bg-white border border-emerald-300 text-slate-800 space-y-2 text-center shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {lang === 'en' ? 'Message Sent Successfully!' : 'ההודעה נשלחה בהצלחה!'}
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                {lang === 'en'
                  ? 'Thank you for reaching out. Your message has been sent directly to Noa.'
                  : 'תודה על הפנייה. הודעתך נשלחה ישירות לתיבת המייל של נועה.'}
              </p>
              <button
                onClick={() => {
                  setIsSent(false);
                  setFormState({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-2 text-xs font-bold text-blue-600 hover:text-blue-800 underline cursor-pointer"
              >
                {lang === 'en' ? 'Send another message' : 'שליחת הודעה נוספת'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {errorMsg && (
                <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    {lang === 'en' ? 'Name *' : 'שם מלא *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={lang === 'en' ? 'Jane Doe' : 'ישראל ישראלי'}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    {lang === 'en' ? 'Email *' : 'אימייל *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  {lang === 'en' ? 'Subject' : 'נושא'}
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder={lang === 'en' ? 'Full Stack Developer Opportunity' : 'הצעת עבודה / ראיון'}
                  className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  {lang === 'en' ? 'Message *' : 'הודעה *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder={
                    lang === 'en'
                      ? 'Hello Noa, we would like to talk regarding a development role...'
                      : 'שלום נועה, נשמח לשוחח בנוגע לתפקיד פיתוח אצלנו...'
                  }
                  className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white resize-y"
                />
              </div>

              <div className="pt-1 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {lang === 'en' ? 'Direct response' : 'מענה ישיר'}
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-xl transition-colors cursor-pointer shadow-2xs"
                >
                  <Send className="w-3 h-3" />
                  <span>
                    {isSubmitting
                      ? lang === 'en'
                        ? 'Sending...'
                        : 'שולח...'
                      : lang === 'en'
                      ? 'Send Message'
                      : 'שליחת הודעה'}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
