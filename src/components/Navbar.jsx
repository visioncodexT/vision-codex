import { useState, useEffect } from 'react';

const navLinks = ['Home', 'Services', 'About Us', 'Projects', 'Testimonials', 'Contact'];

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
  const containerBg = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)';
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
        <div className="flex items-center justify-center w-10 h-10 rounded-full ml-1">
          <img src={logoSrc} alt="VisionTechX" className="w-8 h-8 object-contain" />
        </div>

        {/* Links */}
        <ul className="flex items-center gap-0.5 px-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`relative px-4 py-2 text-[13px] font-medium ${textColor} ${textHover} transition-colors duration-300 rounded-full ${bgHover} block`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`px-5 py-2 text-[13px] font-medium ${ctaText} rounded-full border ${ctaBorder} ${ctaHoverBorder} ${textHover} ${ctaHoverBg} ${ctaHoverShadow} transition-all duration-300 uppercase tracking-wider whitespace-nowrap`}
        >
          Contact Us
        </a>
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
          <span className={`block w-5 h-[1.5px] ${hamburgerBg} rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] ${hamburgerBg} rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
        </button>
      </div>
    </>
  );
};

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

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
        // If the navbar's center point is within the section bounds
        if (rect.top <= navMiddle && rect.bottom >= navMiddle) {
          currentlyLight = true;
        }
      });

      setIsLight(currentlyLight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'} 
          [perspective:1000px] pointer-events-none`}
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
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      {/* Kept outside the 3D container so it doesn't get flipped */}
      <div
        className={`md:hidden fixed inset-0 top-20 z-40 transition-all duration-500
          ${mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className="absolute inset-0 backdrop-blur-2xl"
          style={{ background: 'rgba(0,0,0,0.9)' }}
        />
        <div className="relative z-10 flex flex-col items-center pt-12 gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-white/70 hover:text-white
                transition-all duration-300 py-3"
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 px-8 py-3 text-sm font-medium text-white/80 rounded-full
              border border-white/[0.2] hover:border-white/[0.4] hover:text-white
              transition-all duration-300 uppercase tracking-wider"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 80}ms` : '0ms',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
