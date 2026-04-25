import { useEffect, useRef, useState } from 'react';

const steps = [
  { 
    id: '01', 
    title: 'Discovery', 
    desc: 'We start by understanding your business, goals, and requirements. This helps us define the right strategy and project scope.', 
    time: '1–2 Days', 
    height: '140px' 
  },
  { 
    id: '02', 
    title: 'Strategy & Wireframes', 
    desc: 'We create the structure of your product, including layout, user flow, and core features to ensure clarity before development.', 
    time: '1–3 Days', 
    height: '80px' 
  },
  { 
    id: '03', 
    title: 'UI/UX Design', 
    desc: 'We design clean, modern, and user-friendly interfaces focused on engagement and conversion.', 
    time: '2–4 Days', 
    height: '200px' 
  },
  { 
    id: '04', 
    title: 'Development', 
    desc: 'Our team builds your product using modern technologies, ensuring performance, scalability, and clean code.', 
    time: '1–3 Weeks', 
    height: '110px' 
  },
  { 
    id: '05', 
    title: 'Testing', 
    desc: 'We test across devices and fix issues to ensure everything works smoothly before launch.', 
    time: '1–2 Days', 
    height: '170px' 
  },
  { 
    id: '06', 
    title: 'Launch & Support', 
    desc: 'We deploy your project and provide ongoing support to keep everything running efficiently.', 
    time: 'Ongoing', 
    height: '90px' 
  },
];

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-black"
    >
      {/* ── Background Gradients ── */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 100%, rgba(232, 70, 30, 0.25) 0%, rgba(0,0,0,1) 60%)',
        }}
      />
      
      {/* Subtle top/bottom edge blending */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* ── Header ── */}
        <div className="max-w-2xl">
          <p 
            className={`text-orange-500 font-mono text-xs tracking-[0.2em] uppercase mb-4
              transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            [ Our Process ]
          </p>
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-6
              transition-all duration-700 delay-100 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            How We Turn Your Ideas into Scalable Digital Products
          </h2>
          <p 
            className={`text-white/50 text-sm sm:text-base leading-relaxed
              transition-all duration-700 delay-200 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            A structured and transparent approach to ensure quality, speed, and results at every stage.
          </p>
        </div>

        {/* ── Timeline Track ── */}
        <div className="mt-24 sm:mt-32 relative">
          
          {/* Dashed Horizontal Line (Track) */}
          <div className="absolute bottom-[20px] left-0 right-0 h-px border-t-[1.5px] border-dashed border-orange-500/30 z-0" />
          
          {/* Scrollable Container */}
          <div className="flex gap-2 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={step.id} 
                className={`relative flex flex-col items-center justify-end flex-shrink-0 w-[260px] sm:w-[280px] snap-center group
                  transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${300 + (idx * 150)}ms` }}
              >
                
                {/* Content Box */}
                <div className="text-center w-full px-4 mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="text-orange-500/20 text-3xl font-bold mb-3 font-mono transition-colors duration-500 group-hover:text-orange-500/40">
                    {step.id}
                  </div>
                  <h4 className="text-white font-semibold text-lg sm:text-xl mb-3 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-white/50 text-xs sm:text-[13px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Vertical Line */}
                <div 
                  className="w-px bg-gradient-to-t from-orange-500 via-orange-500/40 to-transparent transition-all duration-700 group-hover:from-orange-400 group-hover:h-[calc(var(--h)+15px)]"
                  style={{ height: step.height, '--h': step.height }}
                />

                {/* Bottom Tag */}
                <div className="h-10 bg-[#050505] border border-orange-500/30 rounded-full px-5 flex items-center gap-2.5 group-hover:bg-orange-500/10 group-hover:border-orange-500 transition-colors duration-500 shadow-lg relative z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(255,107,53,0.8)] animate-pulse" />
                  <span className="text-white/90 text-[11px] font-bold tracking-widest uppercase">
                    {step.time}
                  </span>
                </div>
              </div>
            ))}
            {/* Spacer for right padding in overflow */}
            <div className="w-8 sm:w-16 flex-shrink-0" />
          </div>

        </div>

      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
