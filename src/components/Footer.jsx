import { motion } from 'motion/react';
import { FadeUp, StaggerContainer, StaggerItem } from '../utils/animations';

const Footer = () => {
  return (
    <footer className="relative bg-[#000000] rounded-t-[2.5rem] sm:rounded-t-[4rem] z-20 mt-[-40px] pt-20 sm:pt-28 pb-8 overflow-hidden border-t border-red-500/50 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">

      {/* ── Background Gradients ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-40 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255,107,53,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── Top Section: Links & Info ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20 sm:mb-28">

          {/* Brand Info */}
          <FadeUp className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-full border border-white/15"
              >
                <img src="/logo.png" alt="VisionCodeX Logo" className="w-8 h-8 object-contain" />
              </motion.div>
              <span className="text-white font-bold text-xl tracking-wide">Vision CodeX</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
              We design, build, and scale high-performance digital products. Elevating brands through intelligent architecture and immersive design.
            </p>

            {/* Social Links */}
<div className="flex items-center gap-3">
  {[
    { 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>, 
      href: "https://www.instagram.com/visiontech.x/", 
      color: "hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-600" 
    }
  ].map((social, i) => (
    <motion.a 
      key={i}
      href={social.href}
      target={social.href.startsWith('http') ? "_blank" : undefined}
      rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={`w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/50 ${social.color} hover:text-white hover:border-transparent transition-all duration-300`}
    >
      {social.icon}
    </motion.a>
  ))}
</div>
          </FadeUp>

          {/* Quick Links */}
          <FadeUp delay={0.1} className="md:col-span-2 md:col-start-7 flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Navigation</h4>
            {['Services', 'About Us', 'Process', 'Testimonials'].map((link) => (
              <motion.a 
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                whileHover={{ x: 5, color: "#f97316" }}
                className="text-white/50 text-sm transition-colors w-fit"
              >
                {link}
              </motion.a>
            ))}
          </FadeUp>

          {/* Contact */}
          <FadeUp delay={0.2} className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Say Hello</h4>
            <motion.a 
              href="mailto:info@visioncodex.com" 
              whileHover={{ x: 5, color: "#ffffff" }}
              className="text-white/50 text-sm transition-colors"
            >
              info@visioncodex.com
            </motion.a>
            <motion.a 
              href="tel:+919429806474" 
              whileHover={{ x: 5, color: "#ffffff" }}
              className="text-white/50 text-sm transition-colors mt-1"
            >
              +91 94298 06474
            </motion.a>

            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 flex items-center justify-between px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group cursor-pointer w-full max-w-[200px]"
            >
              <span className="text-white/90 text-xs font-semibold uppercase tracking-wider group-hover:text-white">Start Project</span>
              <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </motion.a>
          </FadeUp>

        </div>

        {/* ── Massive Brand Name ── */}
        <div className="w-full border-t border-white/5 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="whitespace-nowrap text-[14vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/0 leading-none select-none tracking-tighter"
          >
            VISION CODEX
          </motion.h1>
        </div>

        {/* ── Copyright ── */}
        <FadeUp delay={0.4} className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 border-t border-white/5 pt-6 mt-2 relative z-20">
          <p className="text-white/40 text-xs text-center md:text-left flex-1">
            &copy; {new Date().getFullYear()} Vision CodeX. All rights reserved.
          </p>

          <div className="flex items-center justify-center flex-1">
            <p className="text-xs text-white/40 flex items-center gap-1.5">
              Powered By{' '}
              <motion.a 
                href="#" 
                whileHover={{ color: "#f97316" }}
                className="font-semibold text-white/60 transition-colors duration-300"
              >
                PANDAWAS GROUP
              </motion.a>
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-4 flex-1">
            <motion.a href="#" whileHover={{ color: "#ffffff" }} className="text-white/40 text-xs transition-colors">Privacy Policy</motion.a>
            <span className="text-white/20">|</span>
            <motion.a href="#" whileHover={{ color: "#ffffff" }} className="text-white/40 text-xs transition-colors">Terms of Service</motion.a>
          </div>
        </FadeUp>

      </div>
    </footer>
  );
};

export default Footer;
