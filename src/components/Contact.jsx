import { useState } from 'react';
import { Mail, Send, Check, Copy, Terminal, CheckCircle2, RotateCcw } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionLog, setSubmissionLog] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setStatus('success');
    setSubmissionLog(`[CLIENT DISPATCH] Mail app launched for ${personalInfo.email}`);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Project Inquiry',
      message: '',
    });
    setStatus('idle');
    setSubmissionLog('');
  };

  return (
    <section id="contact" className="py-20 relative border-t border-term-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-term-green flex items-center gap-2 mb-2">
              <span>05.</span>
              <span>// DISPATCH TRANSMISSION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Get in <span className="text-term-green">Touch</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-term-dim bg-term-card px-3 py-1.5 rounded border border-term-border flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-term-green" />
            <span>port: 443 [TLS encrypted]</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct channels & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-term-card border border-term-border space-y-4 shadow-xl">
              <h3 className="font-mono text-base font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-term-green" />
                <span>Direct Endpoints</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                Looking to build a product, recruit a team member, or discuss a project? Reach out directly or dispatch a transmission via the form.
              </p>

              {/* One-click Copy Email Card */}
              <div className="p-3.5 rounded-lg bg-term-bg border border-term-border hover:border-term-green/50 transition-colors font-mono text-xs space-y-1.5">
                <div className="text-term-dim text-[11px] flex justify-between items-center">
                  <span>PRIMARY_EMAIL</span>
                  <span className="text-term-green text-[10px]">active</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-200 font-semibold truncate">{personalInfo.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-term-green hover:text-black text-term-dim text-xs transition-all shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-term-green" />
                        <span className="text-term-green font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 pt-2">
                <div className="font-mono text-xs text-term-dim">NETWORK_PROFILES</div>

                <div className="grid grid-cols-1 gap-2 font-mono text-xs">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-term-bg border border-term-border hover:border-term-green/50 hover:text-term-green text-slate-300 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-term-dim group-hover:text-term-green" />
                      <span>GitHub</span>
                    </div>
                    <span className="text-term-dim text-[11px] group-hover:translate-x-1 transition-transform">→</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-term-bg border border-term-border hover:border-term-cyan/50 hover:text-term-cyan text-slate-300 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-term-dim group-hover:text-term-cyan" />
                      <span>LinkedIn</span>
                    </div>
                    <span className="text-term-dim text-[11px] group-hover:translate-x-1 transition-transform">→</span>
                  </a>

                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-term-bg border border-term-border hover:border-purple-400/50 hover:text-purple-400 text-slate-300 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <TwitterIcon className="w-4 h-4 text-term-dim group-hover:text-purple-400" />
                      <span>Twitter / X</span>
                    </div>
                    <span className="text-term-dim text-[11px] group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Terminal Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-term-card border border-term-border shadow-2xl overflow-hidden">

              {/* Terminal Title Bar */}
              <div className="px-4 py-2.5 bg-slate-900 border-b border-term-border flex items-center justify-between font-mono text-xs select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-term-dim ml-2 hidden sm:inline">dispatch_packet.sh</span>
                </div>
                <span className="text-term-green text-[11px]">MODE: INTERACTIVE</span>
              </div>

              {/* Form or Success State */}
              <div className="p-6">
                {status === 'success' ? (
                  /* Success Feedback Banner with Reset option */
                  <div className="p-6 rounded-lg bg-emerald-950/40 border border-term-green/60 text-center font-mono space-y-4 animate-fadeIn">
                    <div className="w-12 h-12 mx-auto rounded-full bg-term-green/20 border border-term-green flex items-center justify-center text-term-green">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white">[200 OK] Message Dispatched</h4>
                      <p className="text-xs text-slate-300">
                        Thank you, <span className="text-term-green font-semibold">{formData.name}</span>. Your packet was successfully received. I will reply to <span className="text-term-cyan">{formData.email}</span> shortly.
                      </p>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-term-dim text-left overflow-x-auto">
                      <code>{submissionLog}</code>
                    </div>

                    <button
                      onClick={handleReset}
                      type="button"
                      className="px-4 py-2 rounded bg-term-green text-black font-bold text-xs hover:bg-emerald-400 transition-colors inline-flex items-center gap-2 shadow-neon-green"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Send Another Transmission</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">

                    {/* Simulated Command Header */}
                    <div className="text-term-dim text-[11px] pb-2 border-b border-term-border/40">
                      <span># Enter payload values below to dispatch an encrypted message</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="text-slate-300 flex items-center gap-1.5">
                          <span className="text-term-green">&gt;</span>
                          <span>sender_name:</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., Alex Reed"
                          className="w-full px-3 py-2 rounded bg-term-bg border border-term-border focus:border-term-green focus:outline-none text-slate-100 placeholder-slate-600 transition-colors"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="text-slate-300 flex items-center gap-1.5">
                          <span className="text-term-green">&gt;</span>
                          <span>return_email:</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g., alex@company.com"
                          className="w-full px-3 py-2 rounded bg-term-bg border border-term-border focus:border-term-green focus:outline-none text-slate-100 placeholder-slate-600 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject / Category */}
                    <div className="space-y-1.5">
                      <label className="text-slate-300 flex items-center gap-1.5">
                        <span className="text-term-green">&gt;</span>
                        <span>message_subject:</span>
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-term-bg border border-term-border focus:border-term-green focus:outline-none text-slate-100 transition-colors cursor-pointer"
                      >
                        <option value="Project Inquiry">Project Inquiry / Freelance</option>
                        <option value="Job Opportunity">Full-Time / Contract Role</option>
                        <option value="Open Source Collaboration">Open Source Collaboration</option>
                        <option value="Say Hello">General Technical Chat</option>
                      </select>
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-1.5">
                      <label className="text-slate-300 flex items-center gap-1.5">
                        <span className="text-term-green">&gt;</span>
                        <span>payload_body:</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Type your message or project requirements here..."
                        className="w-full px-3 py-2 rounded bg-term-bg border border-term-border focus:border-term-green focus:outline-none text-slate-100 placeholder-slate-600 transition-colors font-sans text-xs resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex items-center justify-between">
                      <div className="text-[11px] text-term-dim hidden sm:block">
                        <span>Press Submit to execute POST dispatch</span>
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="px-6 py-2.5 rounded bg-term-green text-black font-bold hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-neon-green disabled:opacity-50"
                      >
                        {status === 'sending' ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                            <span>Transmitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>POST /api/contact</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
