import { useState, useEffect } from 'react';

const navLinks = ['Home', 'Services', 'About Us', 'Projects', 'Testimonials', 'Contact'];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
    >
      {/* ── Desktop Navbar ── */}
      <div
        className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full
          border border-white/[0.08] backdrop-blur-xl"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        {/* Logo */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full ml-1">
          <img src="/logo.png" alt="VisionTechX" className="w-8 h-8 object-contain" />
        </div>

        {/* Links */}
        <ul className="flex items-center gap-0.5 px-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative px-4 py-2 text-[13px] font-medium text-white/60
                  hover:text-white transition-colors duration-300 rounded-full
                  hover:bg-white/[0.04] block"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="px-5 py-2 text-[13px] font-medium text-white/80 rounded-full
            border border-white/[0.15] hover:border-white/[0.35] hover:text-white
            hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]
            transition-all duration-300 uppercase tracking-wider whitespace-nowrap"
        >
          Contact Us
        </a>
      </div>

      {/* ── Mobile Navbar ── */}
      <div
        className="flex md:hidden items-center justify-between px-4 py-3 rounded-full
          border border-white/[0.08] backdrop-blur-xl min-w-[320px]"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        {/* Logo */}
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.08]">
          <img src="/logo.png" alt="VisionTechX" className="w-5 h-5 object-contain" />
        </div>

        {/* Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative w-9 h-9 flex flex-col items-center justify-center gap-1.5
            rounded-full hover:bg-white/[0.06] transition-colors"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-white/80 rounded-full transition-all duration-300
              ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white/80 rounded-full transition-all duration-300
              ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`}
          />
        </button>
      </div>

      {/* ── Mobile Menu Overlay ── */}
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
    </nav>
  );
};

export default Navbar;
