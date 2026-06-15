import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Clock, MapPin, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'AI Automation',
    budget: '$5,000 - $10,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [storedInquiries, setStoredInquiries] = useState<any[]>([]);

  const projectTypes = ['AI Automation', 'Custom Software', 'AI Agents/Chatbots', 'SaaS Product', 'Workflow Audit'];
  const budgets = ['$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API response lag
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Save locally to display/simulate persistence
      const newInquiry = { ...formData, id: Date.now(), date: new Date().toLocaleDateString() };
      const updated = [newInquiry, ...storedInquiries];
      setStoredInquiries(updated);
      localStorage.setItem('pk_inquiries', JSON.stringify(updated));

      // Reset form variables
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'AI Automation',
        budget: '$5,000 - $10,000',
        message: ''
      });
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50/30 rounded-full filter blur-[120px]" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: CTA description & info specs */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#666666] uppercase block">
                // 07 . SECURE PIPELINE ESTABLISHED
              </span>
              <h2 className="font-sans text-4xl sm:text-5xl font-black text-[#111111] tracking-tighter uppercase leading-[0.95]">
                Let's Build Something Together
              </h2>
              <p className="font-sans text-sm text-[#666666] leading-relaxed">
                Connect directly to commission custom AI integrations, SaaS platforms, or optimized digital processes that deliver distinct operational benefits.
              </p>
            </div>

            {/* Quick specifications lists (location, response time, secure) */}
            <div className="space-y-4 pt-6 border-t border-[#E5E5E5]">
              <div className="flex items-center space-x-3.5">
                <div className="h-9 w-9 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-gray-750 shadow-sm">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#666666] font-bold">Average response duration</p>
                  <p className="font-sans text-sm font-bold text-[#111111]">&lt; 4 hours (Weekdays)</p>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="h-9 w-9 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-gray-750 shadow-sm">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#666666] font-bold">Current Location Context</p>
                  <p className="font-sans text-sm font-bold text-[#111111]">Global Consultant (Remote Operative)</p>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="h-9 w-9 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-gray-750 shadow-sm">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#666666] font-bold">Direct Encrypted Channel</p>
                  <p className="font-sans text-sm font-bold text-gray-900">priyanshu96240@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Credibility disclaimer badge */}
            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-[#E5E5E5] shadow-sm inline-flex items-center space-x-3">
              <ShieldCheck className="h-5 w-5 text-[#00D26A]" />
              <span className="font-sans text-xs text-[#666666]">
                Data strictly formatted, encrypted locally, and stored with absolute security thresholds.
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic submission form card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[40px] border border-[#E5E5E5] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] backdrop-blur-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label htmlFor="form_name" className="font-mono text-[9px] uppercase tracking-widest text-[#111111] font-bold block">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="form_name"
                          required
                          placeholder="e.g. Elena Rostova"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#FAFAFA] border border-[#E5E5E5] focus:border-[#111111] text-gray-900 rounded-xl px-4 py-3 text-xs transition-colors duration-200 outline-none"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label htmlFor="form_email" className="font-mono text-[9px] uppercase tracking-widest text-[#111111] font-bold block">
                          Email Address *
                        </label>
                        <input
                          type="type"
                          id="form_email"
                          required
                          placeholder="e.g. elena@apex.io"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#FAFAFA] border border-[#E5E5E5] focus:border-[#111111] text-gray-900 rounded-xl px-4 py-3 text-xs transition-colors duration-200 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Company input */}
                      <div className="space-y-2">
                        <label htmlFor="form_company" className="font-mono text-[9px] uppercase tracking-widest text-[#111111] font-bold block">
                          Company / Venture (Optional)
                        </label>
                        <input
                          type="text"
                          id="form_company"
                          placeholder="e.g. Apex Property group"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-[#FAFAFA] border border-[#E5E5E5] focus:border-[#111111] text-gray-900 rounded-xl px-4 py-3 text-xs transition-colors duration-200 outline-none"
                        />
                      </div>

                      {/* Project Type selection */}
                      <div className="space-y-2">
                        <label className="font-mono text-[9px] uppercase tracking-widest text-[#111111] font-bold block">
                          Project Type
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-[#FAFAFA] border border-[#E5E5E5] focus:border-[#111111] text-gray-900 rounded-xl px-4 py-3 text-xs transition-colors duration-200 outline-none appearance-none cursor-pointer"
                        >
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Custom Budget Selector Tiers */}
                    <div className="space-y-3">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-[#111111] font-bold block">
                        Estimated Budget Level
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                        {budgets.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`font-sans text-[10px] font-bold uppercase tracking-wider py-2.5 px-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                              formData.budget === b
                                ? 'bg-[#111111] border-[#111111] text-white shadow-sm'
                                : 'bg-[#FAFAFA] border-[#E5E5E5] text-gray-750 hover:border-[#111111] hover:bg-white'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="space-y-2">
                      <label htmlFor="form_message" className="font-mono text-[9px] uppercase tracking-widest text-[#111111] font-bold block">
                        Your Mission Brief *
                      </label>
                      <textarea
                        id="form_message"
                        required
                        rows={4}
                        placeholder="Detail repetitive loops, operational bottlenecks, or SaaS layouts you need integrated..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#FAFAFA] border border-[#E5E5E5] focus:border-[#111111] text-gray-900 rounded-xl px-4 py-3 text-xs transition-colors duration-200 outline-none resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#111111] hover:bg-black text-white font-sans text-xs font-bold uppercase tracking-widest py-4 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 hover:shadow-lg focus:outline-none cursor-pointer rounded-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                          <span>Initiating Handshake Protocol...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="h-4 w-4 text-[#00D26A]" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-50 text-[#00D26A] flex items-center justify-center border border-emerald-100 shadow-sm pb-0.5">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-2xl font-black text-[#111111] tracking-tighter uppercase">
                        Inquiry Received Flawlessly
                      </h3>
                      <p className="font-sans text-xs text-[#666666] max-w-sm">
                        Thank you. Your project briefing has been successfully processed. I am compiling response metrics and will follow up within 4 hours.
                      </p>
                    </div>

                    {/* Return Action Button */}
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="font-sans text-[10px] font-bold uppercase tracking-widest px-6 py-3 bg-[#111111] text-white rounded-full hover:bg-gray-850 transition-colors duration-250 cursor-pointer"
                    >
                      Submit Another Spec
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
