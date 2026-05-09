import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = ['Home', 'Services', 'About Us', 'Testimonials'];

const NavFace = ({ theme, mobileOpen, setMobileOpen }) => {
  const isLight = theme === 'light';

  // Theme-specific styles
  const logoSrc = isLight ? '/logo-black.png' : '/logo.png';
  const textColor = isLight ? 'text-black/60' : 'text-white/60';
  const textHover = isLight ? 'hover:text-black' : 'hover:text-white';
  const bgHover = isLight ? 'hover:bg-black/[0.04]' : 'hover:bg-white/[0.04]';
  const ctaText = isLight ? 'text-black/80' : 'text-white/80';
  const ctaBorder = isLight ? 'border-black/[0.15]' : 'border-white/[0.15]';
  const ctaHoverBorder = isLight ? 'hover:border-black/[0.35]' : 'hover:border-white/[0.35]';
  const ctaHoverBg = isLight ? 'hover:bg-black/[0.06]' : 'hover:bg-white/[0.06]';
  const ctaHoverShadow = isLight ? 'hover:shadow-[0_0_20px_rgba(0,0,0,0.06)]' : 'hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]';
  const containerBorder = isLight ? 'border-black/[0.08]' : 'border-white/[0.08]';
  const containerBg = isLight ? 'rgba(255,255,255,0.85)' : 'rgba(10,10,10,0.85)';
  const hamburgerBg = isLight ? 'bg-black/80' : 'bg-white/80';
  const hamburgerHover = isLight ? 'hover:bg-black/[0.06]' : 'hover:bg-white/[0.06]';

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <div
        className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full border ${containerBorder} backdrop-blur-xl shadow-lg`}
        style={{ background: containerBg }}
      >
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex items-center justify-center w-10 h-10 rounded-full ml-1"
        >
          <img src={logoSrc} alt="VisionTechX" className="w-8 h-8 object-contain" />
        </motion.div>

        {/* Links */}
        <ul className="flex items-center gap-0.5 px-4">
          {navLinks.map((link) => (
            <li key={link}>
              <motion.a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ scale: 1.05, y: -1 }}
                className={`relative px-4 py-2 text-[13px] font-medium ${textColor} ${textHover} transition-colors duration-300 rounded-full ${bgHover} block`}
              >
                {link}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className={`px-5 py-2 text-[13px] font-medium ${ctaText} rounded-full border ${ctaBorder} ${ctaHoverBorder} ${textHover} ${ctaHoverBg} ${ctaHoverShadow} transition-all duration-300 uppercase tracking-wider whitespace-nowrap`}
        >
          Contact Us
        </motion.a>
      </div>

      {/* ── Mobile Navbar ── */}
      <div
        className={`flex md:hidden items-center justify-between px-4 py-3 rounded-full border ${containerBorder} backdrop-blur-xl min-w-[320px] shadow-lg`}
        style={{ background: containerBg }}
      >
        {/* Logo */}
        <div className={`flex items-center justify-center w-9 h-9 rounded-full ${isLight ? 'bg-black/[0.04]' : 'bg-white/[0.08]'}`}>
          <img src={logoSrc} alt="VisionTechX" className="w-5 h-5 object-contain" />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full ${hamburgerHover} transition-colors`}
          aria-label="Toggle menu"
        >
          <motion.span 
            animate={mobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
            className={`block w-5 h-[1.5px] ${hamburgerBg} rounded-full transition-all duration-300`} 
          />
          <motion.span 
            animate={mobileOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
            className={`block w-5 h-[1.5px] ${hamburgerBg} rounded-full transition-all duration-300`} 
          />
        </button>
      </div>
    </>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Scroll listener for light theme detection
  useEffect(() => {
    const handleScroll = () => {
      const lightSections = document.querySelectorAll('.light-section');
      const navElement = document.getElementById('main-nav');
      if (!navElement) return;

      const navRect = navElement.getBoundingClientRect();
      const navMiddle = navRect.top + (navRect.height / 2);

      let currentlyLight = false;

      lightSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navMiddle && rect.bottom >= navMiddle) {
          currentlyLight = true;
        }
      });

      setIsLight(currentlyLight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        id="main-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700
          [perspective:1000px] pointer-events-none"
      >
        <div
          className={`relative transition-transform duration-[800ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] [transform-style:preserve-3d] pointer-events-auto
            ${isLight ? '[transform:rotateX(180deg)]' : ''}`}
        >
          {/* Front Face (Dark Theme) */}
          <div className="[backface-visibility:hidden] relative">
            <NavFace theme="dark" mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          </div>

          {/* Back Face (Light Theme) */}
          <div className="[backface-visibility:hidden] [transform:rotateX(180deg)] absolute inset-0">
            <NavFace theme="light" mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed inset-0 top-20 z-40 pointer-events-auto"
          >
            <div
              className="absolute inset-0 backdrop-blur-2xl"
              style={{ background: 'rgba(0,0,0,0.9)' }}
            />
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="relative z-10 flex flex-col items-center pt-12 gap-2"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setMobileOpen(false)}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 16 }
                  }}
                  className="text-2xl font-medium text-white/70 hover:text-white
                    transition-colors duration-300 py-3"
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 16 }
                }}
                className="mt-6 px-8 py-3 text-sm font-medium text-white/80 rounded-full
                  border border-white/[0.2] hover:border-white/[0.4] hover:text-white
                  transition-all duration-300 uppercase tracking-wider"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
