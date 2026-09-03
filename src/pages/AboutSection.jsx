import { FadeUp, SlideIn, StaggerContainer, StaggerItem, motion } from '../utils/animations';




/* ── Tech Stack Icons (inline SVGs) ── */
const techStack = [
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" />
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 16 16)" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <circle cx="16" cy="16" r="14" fill="white" />
        <path d="M12 10v12l10-12" fill="black" />
        <path d="M21 10v12" stroke="black" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M16 3L28 10V22L16 29L4 22V10L16 3Z" fill="#339933" fillOpacity="0.9" />
        <text x="16" y="19" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">N</text>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M16 3C16 3 12 10 12 17C12 22 14 27 16 29C18 27 20 22 20 17C20 10 16 3 16 3Z"
          fill="#47A248" />
        <path d="M15.5 16V28" stroke="#2D6A2E" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M8 26L11 5L16 14L19 9L24 26H8Z" fill="#FFCA28" />
        <path d="M8 26L16 21L24 26H8Z" fill="#FF8F00" />
        <path d="M16 14L11 5L8 26L16 21V14Z" fill="#F57C00" />
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M9 13C10.5 8 13.5 6 18 6C24.5 6 25.5 10.5 28 11.5C29.5 12 31 11.5 32 10C30.5 15 27.5 17 23 17C16.5 17 15.5 12.5 13 11.5C11.5 11 10 11.5 9 13Z"
          fill="#38BDF8" transform="translate(-4, 2)" />
        <path d="M9 22C10.5 17 13.5 15 18 15C24.5 15 25.5 19.5 28 20.5C29.5 21 31 20.5 32 19C30.5 24 27.5 26 23 26C16.5 26 15.5 21.5 13 20.5C11.5 20 10 20.5 9 22Z"
          fill="#38BDF8" transform="translate(-4, 2)" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <rect x="10" y="4" width="6" height="8" rx="3" fill="#F24E1E" />
        <rect x="16" y="4" width="6" height="8" rx="3" fill="#FF7262" />
        <rect x="10" y="12" width="6" height="8" rx="3" fill="#A259FF" />
        <circle cx="19" cy="16" r="3" fill="#1ABCFE" />
        <rect x="10" y="20" width="6" height="8" rx="3" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M16 3C8.82 3 3 8.82 3 16C3 21.79 6.66 26.73 11.71 28.33C12.33 28.44 12.55 28.07 12.55 27.74C12.55 27.45 12.54 26.56 12.54 25.56C9 26.29 8.22 23.97 8.22 23.97C7.66 22.59 6.85 22.22 6.85 22.22C5.74 21.47 6.93 21.49 6.93 21.49C8.16 21.57 8.81 22.73 8.81 22.73C9.9 24.57 11.67 24.04 12.58 23.73C12.69 22.95 13 22.42 13.34 22.12C10.53 21.82 7.57 20.72 7.57 15.65C7.57 14.35 8.04 13.29 8.84 12.45C8.71 12.14 8.3 10.93 8.96 9.28C8.96 9.28 9.99 8.95 12.53 10.5C13.5 10.23 14.53 10.09 15.56 10.09C16.59 10.09 17.62 10.23 18.59 10.5C21.13 8.95 22.16 9.28 22.16 9.28C22.82 10.93 22.41 12.14 22.28 12.45C23.08 13.29 23.55 14.35 23.55 15.65C23.55 20.73 20.58 21.81 17.76 22.1C18.19 22.47 18.57 23.2 18.57 24.32C18.57 25.94 18.55 27.24 18.55 27.74C18.55 28.07 18.77 28.45 19.41 28.33C24.34 26.73 28 21.79 28 16C28 8.82 22.18 3 16 3Z"
        />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <circle cx="16" cy="16" r="14" fill="#25D366" />
        <path d="M22.5 18.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"
          fill="white" />
      </svg>
    ),
  },
  {
    name: 'Flutter',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M18 4L6 16l3.7 3.7L26 4H18z" fill="#42A5F5" />
        <path d="M18 18.3L13.7 22.7 18 27h8l-4.3-4.3L26 18.3H18z" fill="#42A5F5" />
        <path d="M13.7 22.7L18 18.3l4.3 4.4-4.3 4.3-4.3-4.3z" fill="#0D47A1" />
      </svg>
    ),
  },
  {
    name: 'Motion',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="6" fill="#FF0055" />
        <path d="M8 24V8l8 8 8-8v16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'GSAP',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <circle cx="16" cy="16" r="14" fill="#88CE02" />
        <text x="16" y="20" textAnchor="middle" fill="#333" fontSize="9" fontWeight="bold" fontFamily="sans-serif">GS</text>
      </svg>
    ),
  },
  {
    name: 'n8n',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="6" fill="#EA4B71" />
        <circle cx="11" cy="16" r="3" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="21" cy="16" r="3" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M14 16h4" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
];

/* ── Stat Box ── */
const StatBox = ({ number, label }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
    }}
    whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.25 } }}
    className="border border-white/15 bg-[#050505] backdrop-blur-xl rounded-2xl p-6 sm:p-7 group hover:border-white/20 transition-colors duration-500 flex flex-col justify-center items-center cursor-default"
  >
    <p className="text-4xl sm:text-5xl font-bold text-white leading-none">
      {number}
    </p>
    <p className="text-[11px] text-white/40 mt-2 uppercase tracking-[0.15em] font-medium text-center">
      {label}
    </p>
  </motion.div>
);

/* ── Main About Section ── */
const AboutSection = () => {

  return (
    <section
      id="about-us"
      className="relative bg-black w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 overflow-hidden"
    >
      {/* ── Section Header ── */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <FadeUp>
          <p className="text-orange-500 font-mono text-sm sm:text-base tracking-[0.2em] uppercase mb-4">
            [ About Us ]
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Driven by Innovation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Excellence</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed">
            We are a team of passionate creators, engineers, and strategists dedicated to delivering digital products that make a real impact.
          </p>
        </FadeUp>
      </div>

      {/* ═══════════════════════════════════════════
          TOP GRID: Stats | 3D Visual | Location
          ═══════════════════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 mb-3 sm:mb-4">

        {/* ── Left: Stats Boxes ── */}
        <StaggerContainer stagger={0.12} className="md:col-span-3 flex flex-col gap-3 sm:gap-4">
          <StatBox number="10+" label="Projects Delivered" />
          <StatBox number="10+" label="Happy Clients" />
          <StatBox number="1+" label="Years of Experience" />
        </StaggerContainer>

        {/* ── Center: 3D Abstract Visual ── */}
        <FadeUp delay={0.15} className="md:col-span-3 border border-white/15 rounded-2xl overflow-hidden
            flex items-center justify-center min-h-[280px] sm:min-h-[320px] bg-[#050505]">
          <motion.img
            src="/metal-logo.png"
            alt="Abstract 3D visual"
            className="w-[75%] h-auto object-contain opacity-90"
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </FadeUp>

        {/* ── Right: Location Card ── */}
        <FadeUp delay={0.25} className="md:col-span-6 border border-white/15 rounded-2xl p-8 sm:p-10
            relative overflow-hidden min-h-[280px] sm:min-h-[320px] bg-[#050505]"
        >
          {/* Text */}
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight text-center">
              Based in Rajasthan, India
            </h3>
            <div className="flex items-center justify-center gap-2.5 mt-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[11px] text-white/50 uppercase tracking-[0.2em] font-medium">
                Available Worldwide
              </span>
            </div>
          </div>

          {/* Globe Visual */}
          <div className="absolute bottom-0 left-0 right-0 opacity-75">
            <img src="/image.png" alt="Globe" className="w-full h-full object-contain hover:scale-105 transition-transform duration-700" />
          </div>
        </FadeUp>
      </div>

      {/* ═══════════════════════════════════════════
          FOUNDER SECTION: Photo | Bio | Why Choose Us
          ═══════════════════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 mb-3 sm:mb-4">

        {/* ── Left: About Bio (expanded) ── */}
        <SlideIn from="left" delay={0.1} className="md:col-span-8 border border-white/15 rounded-2xl p-7 sm:p-8 lg:p-10
            flex flex-col justify-between bg-[#050505] relative"
        >
          {/* Subtle top glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,53,0.3), transparent)' }}
          />

          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-orange-400/90 text-base sm:text-lg font-semibold tracking-wide">
                About Vision CodeX
              </h2>
              <div className="hidden sm:block h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-[13px] sm:text-sm text-white/50 leading-[1.8]">
              <p>
                Vision CodeX is a tech-driven agency built by a team of passionate
                developers and designers focused on creating powerful digital solutions.
              </p>
              <p>
                We work collaboratively to help startups and businesses turn their
                ideas into scalable websites, SaaS platforms, and modern applications.
              </p>
              <p>
                Our strength lies in combining technical expertise with a
                problem-solving mindset to deliver solutions that are not only
                visually appealing but also highly functional and result-driven.
              </p>
              <p>
                As a team, we are committed to quality, transparency, and building
                long-term relationships with our clients — from concept to launch
                and beyond.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-white/15">
            <div className="flex items-center justify-between">
              <svg className="w-5 h-5 text-white/15" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2L12 7H18L13 10.5L15 16L10 12.5L5 16L7 10.5L2 7H8L10 2Z" />
              </svg>
              <a
                href="#contact"
                className="text-sm text-white/50 hover:text-white transition-colors duration-300
                  group/cta flex items-center gap-1.5"
              >
                Work With Us
                <span className="group-hover/cta:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* ── Right: Why Choose Us ── */}
        <SlideIn from="right" delay={0.2} className="md:col-span-4 border border-white/15 rounded-2xl overflow-hidden
            flex flex-col bg-[#050505] relative"
        >
          {/* Subtle top glow accent */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,53,0.4), transparent)' }}
          />

          {/* Content */}
          <div className="p-7 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
                Why Choose Us
              </h3>
              <ul className="space-y-3 text-[13px] text-white/55">
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-400 text-xs mt-0.5 flex-shrink-0">✔</span>
                  Clean & Scalable Code
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-400 text-xs mt-0.5 flex-shrink-0">✔</span>
                  Fast Delivery & On-Time Launches
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-400 text-xs mt-0.5 flex-shrink-0">✔</span>
                  Client-Focused Approach
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-400 text-xs mt-0.5 flex-shrink-0">✔</span>
                  Affordable & Reliable Pricing
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-400 text-xs mt-0.5 flex-shrink-0">✔</span>
                  Modern UI/UX Design Standards
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-400 text-xs mt-0.5 flex-shrink-0">✔</span>
                  Responsive & Mobile-First
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-400 text-xs mt-0.5 flex-shrink-0">✔</span>
                  SEO Optimized Solutions
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-400 text-xs mt-0.5 flex-shrink-0">✔</span>
                  Ongoing Support & Maintenance
                </li>
              </ul>
            </div>

            {/* CTA */}
            <a
              href="#services"
              className="mt-6 pt-5 border-t border-white/15 text-sm text-orange-400/70
                hover:text-orange-400 transition-colors duration-300 group/learn
                flex items-center gap-1.5"
            >
              Learn More
              <span className="group-hover/learn:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </SlideIn>
      </div>

      {/* ═══════════════════════════════════════════
          TECH STACK TOOLBOX
          ═══════════════════════════════════════════ */}
      <FadeUp delay={0.15} className="border border-white/15 rounded-2xl px-6 sm:px-8 py-5 sm:py-6
          flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10
          bg-[#050505]"
      >
        {/* Label */}
        <div className="flex-shrink-0">
          <h3 className="text-sm font-semibold text-orange-400/80 tracking-wide">
            Our Tech Stack
          </h3>
          <p className="text-[11px] text-white/30 mt-0.5">
            Technologies we use to build modern solutions
          </p>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-8 bg-white/[0.06]" />

        {/* Icons */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="group/tech flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14
                rounded-xl bg-white/[0.03] border border-white/15
                hover:bg-white/[0.07] hover:border-white/20
                transition-colors duration-300 cursor-default relative"
              title={tech.name}
              whileHover={{ scale: 1.15, y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              {tech.icon}
              {/* Tooltip */}
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px]
                text-white/50 opacity-0 group-hover/tech:opacity-100 transition-opacity
                duration-300 whitespace-nowrap pointer-events-none">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
};

export default AboutSection;
