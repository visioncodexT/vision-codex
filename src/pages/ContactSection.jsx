import { useState } from 'react';
import { FadeUp, ScaleIn, motion } from '../utils/animations';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    company: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // 1. Trigger the backend request (Fire and Forget/Background)
    const sendPromise = fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).catch(err => console.error('Background submission error:', err));

    // 2. Optimistic UI: Wait for a short aesthetic delay, then show success
    // This makes the app feel snappy regardless of backend speed
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <FadeUp>
            <p className="text-orange-500 font-mono text-sm sm:text-base tracking-[0.2em] uppercase mb-4">
              [ Get In Touch ]
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Great</span>
            </h2>
          </FadeUp>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">

          {/* ── Contact Info Cards (Image 1) ── */}
          <FadeUp delay={0.15} className="flex flex-col gap-8">
            {/* Email Section */}
            <div className="rounded-3xl border border-white/15 bg-[#0a0a0a]/50 p-5 xs:p-6 sm:p-10 backdrop-blur-sm">
              <h3 className="text-white text-center font-medium text-lg mb-10">Contact Us Via Email</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email Item 1 */}
                <div className="flex flex-col gap-3">
                  <span className="text-white/40 text-sm ml-2">For General Inquiries</span>
                  <a href="mailto:info@visiontechx.com" className="flex items-center justify-between rounded-2xl sm:rounded-full border border-white/15 bg-[#111] p-1.5 pl-4 sm:p-2 sm:pl-5 group hover:border-orange-500/50 hover:bg-[#151515] transition-colors cursor-pointer min-w-0 w-full">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <svg className="w-4 h-4 text-white/50 group-hover:text-orange-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <span className="text-white/80 text-xs sm:text-sm font-medium break-all sm:break-normal">info@visiontechx.com</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-orange-500 transition-colors shrink-0 ml-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </a>
                </div>

                {/* Email Item 2 */}
                <div className="flex flex-col gap-3">
                  <span className="text-white/40 text-sm ml-2">For Business Collaborations</span>
                  <a href="mailto:partnerships@visiontechx.com" className="flex items-center justify-between rounded-2xl sm:rounded-full border border-white/15 bg-[#111] p-1.5 pl-4 sm:p-2 sm:pl-5 group hover:border-orange-500/50 hover:bg-[#151515] transition-colors cursor-pointer min-w-0 w-full">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <svg className="w-4 h-4 text-white/50 group-hover:text-orange-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <span className="text-white/80 text-xs sm:text-sm font-medium break-all sm:break-normal">partnerships@visiontechx.com</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-orange-500 transition-colors shrink-0 ml-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </a>
                </div>

                {/* Email Item 3 */}
                <div className="flex flex-col gap-3">
                  <span className="text-white/40 text-sm ml-2">For Job Opportunities</span>
                  <a href="mailto:careers@visiontechx.com" className="flex items-center justify-between rounded-2xl sm:rounded-full border border-white/15 bg-[#111] p-1.5 pl-4 sm:p-2 sm:pl-5 group hover:border-orange-500/50 hover:bg-[#151515] transition-colors cursor-pointer min-w-0 w-full">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <svg className="w-4 h-4 text-white/50 group-hover:text-orange-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <span className="text-white/80 text-xs sm:text-sm font-medium break-all sm:break-normal">careers@visiontechx.com</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-orange-500 transition-colors shrink-0 ml-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="rounded-3xl border border-white/5 bg-[#0a0a0a]/50 p-5 xs:p-6 sm:p-10 backdrop-blur-sm">
              <h3 className="text-white text-center font-medium text-lg mb-10">Contact Us By Phone</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Phone Item 1 */}
                <div className="flex flex-col gap-3">
                  <span className="text-white/40 text-sm ml-2">General Enquiries</span>
                  <a href="tel:+919429806474" className="flex items-center justify-between rounded-2xl sm:rounded-full border border-white/15 bg-[#111] p-1.5 pl-4 sm:p-2 sm:pl-5 group hover:border-orange-500/50 hover:bg-[#151515] transition-colors cursor-pointer min-w-0 w-full">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <svg className="w-4 h-4 text-white/50 group-hover:text-orange-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      <span className="text-white/80 text-xs sm:text-sm font-medium break-all sm:break-normal">+91 94298 06474</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-orange-500 transition-colors shrink-0 ml-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </a>
                </div>

                {/* Phone Item 2 */}
                <div className="flex flex-col gap-3">
                  <span className="text-white/40 text-sm ml-2">Business Collaborations</span>
                  <a href="tel:+917014198701" className="flex items-center justify-between rounded-2xl sm:rounded-full border border-white/15 bg-[#111] p-1.5 pl-4 sm:p-2 sm:pl-5 group hover:border-orange-500/50 hover:bg-[#151515] transition-colors cursor-pointer min-w-0 w-full">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <svg className="w-4 h-4 text-white/50 group-hover:text-orange-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      <span className="text-white/80 text-xs sm:text-sm font-medium break-all sm:break-normal">+91 70141 98701</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-orange-500 transition-colors shrink-0 ml-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </a>
                </div>

                {/* Phone Item 3 */}
                <div className="flex flex-col gap-3">
                  <span className="text-white/40 text-sm ml-2">Free Consultation</span>
                  <a href="tel:+918955531832" className="flex items-center justify-between rounded-2xl sm:rounded-full border border-white/15 bg-[#111] p-1.5 pl-4 sm:p-2 sm:pl-5 group hover:border-orange-500/50 hover:bg-[#151515] transition-colors cursor-pointer min-w-0 w-full">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <svg className="w-4 h-4 text-white/50 group-hover:text-orange-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      <span className="text-white/80 text-xs sm:text-sm font-medium break-all sm:break-normal">+91 89555 31832</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-orange-500 transition-colors shrink-0 ml-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* ── Contact Form (Image 2) ── */}
          <FadeUp delay={0.25} className="rounded-3xl border border-white/5 bg-[#0a0a0a]/50 p-8 sm:p-12 backdrop-blur-sm">
            <div className="text-center mb-10">
              <h3 className="text-white font-medium text-xl mb-2">Online Inquiry Form</h3>
              <p className="text-white/40 text-sm">Please fill in the following details, and we'll get back to you within 24 hours.</p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

              {/* Row 1: Name, Email, Phone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-white/80 text-sm font-medium ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    required
                    className="w-full bg-[#111] border border-white/15 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-orange-500/50 focus:bg-[#151515] transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/80 text-sm font-medium ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    required
                    className="w-full bg-[#111] border border-white/15 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-orange-500/50 focus:bg-[#151515] transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/80 text-sm font-medium ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your Phone Number"
                    className="w-full bg-[#111] border border-white/15 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-orange-500/50 focus:bg-[#151515] transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>

              {/* Row 2: Service, Company, Subject */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-white/80 text-sm font-medium ml-1">Select Service</label>
                  <div className="relative">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/15 rounded-2xl px-5 py-4 text-white/50 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-[#151515] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select your Service</option>
                      <option value="web">Web Development</option>
                      <option value="saas">SaaS Development</option>
                      <option value="ui">UI/UX Design</option>
                      <option value="ecommerce">E-commerce</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/80 text-sm font-medium ml-1">Company / Organization Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className="w-full bg-[#111] border border-white/15 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-orange-500/50 focus:bg-[#151515] transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/80 text-sm font-medium ml-1">Subject</label>
                  <div className="relative">
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/15 rounded-2xl px-5 py-4 text-white/50 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-[#151515] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select your Subject</option>
                      <option value="project">New Project</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="flex flex-col gap-2">
                <label className="text-white/80 text-sm font-medium ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message"
                  rows="5"
                  required
                  className="w-full bg-[#111] border border-white/15 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-orange-500/50 focus:bg-[#151515] transition-colors placeholder:text-white/20 resize-none"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status.error && (
                <div className="text-red-500 text-sm text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20">
                  {status.error}
                </div>
              )}
              {status.submitted && (
                <div className="text-green-500 text-sm text-center bg-green-500/10 py-3 rounded-xl border border-green-500/20">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 group border border-white/5 ${
                    status.submitting 
                    ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                    : 'bg-[#1a1a1a] hover:bg-orange-500 text-white active:scale-95'
                  }`}
                >
                  {status.submitting ? 'Sending...' : 'Send your Inquiry'}
                  {!status.submitting && (
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  )}
                </button>
              </div>

            </form>
          </FadeUp>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
