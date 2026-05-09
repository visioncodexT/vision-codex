import { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: '01',
    title: 'Web Development',
    desc: 'We build high-performance websites engineered for speed, scalable architecture, and measurable results.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'App Development',
    desc: 'Creating powerful mobile and cross-platform applications with intuitive UI and seamless performance.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500" fill="currentColor">
        <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-3H7V4h10v13z" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'SaaS Development',
    desc: 'Architecting robust web applications and intuitive dashboards designed for long-term scalable growth.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'UI/UX Design',
    desc: 'Crafting immersive, pixel-perfect interfaces focused on maximizing user engagement and driving conversions.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: '05',
    title: 'E-commerce Solutions',
    desc: 'Building high-converting digital storefronts with frictionless checkout and seamless integrations.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    id: '06',
    title: 'API & Backend',
    desc: 'Developing secure, high-availability backend architectures to power your platforms efficiently.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: '07',
    title: 'Maintenance',
    desc: 'Providing proactive monitoring, continuous optimization, and reliable support for sustained performance.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: '08',
    title: 'Consulting',
    desc: 'Guiding digital transformation with strategic planning and expert recommendations tailored to your goals.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="5" r="1" />
        <circle cx="5" cy="19" r="1" />
        <line x1="12" y1="12" x2="19" y2="5" />
        <line x1="12" y1="12" x2="5" y2="19" />
      </svg>
    ),
  },
];

const AbstractIcons = {
  SmartAutomation: () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-orange-500" fill="currentColor">
      <path d="M12 2C10 2 8 4 8 6H6C4 6 2 8 2 10V14C2 16 4 18 6 18H8C8 20 10 22 12 22C14 22 16 20 16 18H18C20 18 22 16 22 14V10C22 8 20 6 18 6H16C16 4 14 2 12 2ZM12 4C13.1 4 14 4.9 14 6V8H10V6C10 4.9 10.9 4 12 4ZM6 8H8V16H6C4.9 16 4 15.1 4 14V10C4 8.9 4.9 8 6 8ZM16 8H18C19.1 8 20 8.9 20 10V14C20 15.1 19.1 16 18 16H16V8ZM12 20C10.9 20 10 19.1 10 18V16H14V18C14 19.1 13.1 20 12 20Z" />
    </svg>
  ),
  ScalableGrowth: () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-orange-500" fill="currentColor">
      <path d="M12 2L2 12h5v8h10v-8h5L12 2z" />
    </svg>
  ),
  DataDriven: () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-orange-500" fill="currentColor">
      <path d="M4 2v20h20v-2H6V2H4zM8 14l4-4 4 4 6-6v4l-6 6-4-4-4 4v-4z" />
    </svg>
  ),
  CostEfficiency: () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-orange-500" fill="currentColor">
      <path d="M22 2L2 22h20V2zM2 2l20 20H2V2z" />
    </svg>
  ),
  Integration: () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-orange-500" fill="currentColor">
      <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l5.5 5.5-5.5 5.5-5.5-5.5L12 6.5z" />
    </svg>
  ),
  FutureProof: () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-orange-500" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  ),
  MaintenanceSupport: () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-orange-500" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h4v2h-4v-2zm0-6h4v4h-4v-4zm0-6h4v4h-4V5z" />
    </svg>
  ),
  ConsultingStrategy: () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-orange-500" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
};

const CustomIcons = [
  <AbstractIcons.SmartAutomation key="1" />,
  <AbstractIcons.ScalableGrowth key="2" />,
  <AbstractIcons.DataDriven key="3" />,
  <AbstractIcons.CostEfficiency key="4" />,
  <AbstractIcons.Integration key="5" />,
  <AbstractIcons.FutureProof key="6" />,
  <AbstractIcons.MaintenanceSupport key="7" />,
  <AbstractIcons.ConsultingStrategy key="8" />,
];

const ServiceCard = ({ service, index, className = '' }) => (
  <div
    className={`group relative flex flex-col p-6 sm:p-8 rounded-3xl border border-white/15 bg-[#111111]/80 backdrop-blur-md 
      hover:bg-[#1a1a1a] hover:border-white/20 transition-all duration-500 ease-out overflow-hidden ${className}`}
  >
    {/* Subtle glow effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:to-orange-500/5 transition-colors duration-500" />

    <div className="relative flex justify-between items-start mb-10 z-10">
      <div className="text-orange-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        {CustomIcons[index]}
      </div>
    </div>

    <div className="relative z-10 mt-auto">
      <h3 className="text-white font-semibold text-xl mb-3 tracking-wide">
        {service.title}
      </h3>
      <p className="text-white/50 text-[13px] leading-[1.7] group-hover:text-white/70 transition-colors">
        {service.desc}
      </p>
    </div>
  </div>
);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-black"
    >
      {/* ── Background Gradients ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% -20%, rgba(255,107,53,0.15) 0%, rgba(0,0,0,1) 50%)'
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(232, 70, 30, 0.08) 0%, transparent 60%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <p
            className={`text-orange-500 font-mono text-sm sm:text-base tracking-[0.2em] uppercase mb-4
              transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            [ Our Services ]
          </p>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6
              transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            End-to-End Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Solutions</span>
          </h2>
          <p
            className={`text-white/50 text-base sm:text-lg leading-relaxed
              transition-all duration-700 delay-100 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            We provide end-to-end digital solutions to help businesses build, scale, and grow with technology.
          </p>
        </div>

        {/* ── Desktop Grid (4x2 Layout) ── */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={idx}
              className={`h-[260px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            />
          ))}
        </div>

        {/* ── Mobile/Tablet Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={idx}
              className={`min-h-[220px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
