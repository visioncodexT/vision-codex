import { FadeUp, StaggerContainer, motion } from '../utils/animations';

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

  return (
    <section
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
        <div className="text-center max-w-3xl mx-auto">
          <FadeUp>
            <p className="text-orange-500 font-mono text-sm sm:text-base tracking-[0.2em] uppercase mb-4">
              [ Our Process ]
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Building Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Digital Products</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              A structured and transparent approach to ensure quality, speed, and results at every stage.
            </p>
          </FadeUp>
        </div>

        {/* ── Mobile: Timeline Track (Horizontal Scroll) ── */}
        <div className="mt-16 sm:mt-24 relative lg:hidden">

          {/* Scroll Indicator */}
          <div className="flex items-center gap-2 justify-end mb-6 pr-6 text-orange-500/70 text-xs font-mono uppercase tracking-wider animate-pulse">
            <span>Swipe Left</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>

          {/* Dashed Horizontal Line (Track) */}
          <div className="absolute bottom-[20px] left-0 right-0 h-px border-t-[1.5px] border-dashed border-orange-500/30 z-0" />

          {/* Scrollable Container */}
          <div className="flex gap-2 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                className="relative flex flex-col items-center justify-end flex-shrink-0 w-[260px] sm:w-[280px] snap-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              </motion.div>
            ))}
            {/* Spacer for right padding in overflow */}
            <div className="w-8 sm:w-16 flex-shrink-0" />
          </div>

        </div>

        {/* ── Desktop: Wavy Snake Pattern ── */}
        <div className="hidden lg:grid grid-cols-3 gap-x-8 gap-y-20 relative mt-32 max-w-6xl mx-auto pb-10">

          {/* Responsive SVG Snake Line */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <svg
              className="w-full h-[65%] text-orange-500/30"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              strokeDasharray="1 1"
            >
              <path d="M 16.66 15 L 83.33 15 C 100 15, 100 85, 83.33 85 L 16.66 85" />
            </svg>
          </div>

          {steps.map((step, idx) => {
            // Define snake placement mapping for 6 items in a 3x2 grid
            let colClass = '';
            if (idx === 0) colClass = 'col-start-1 row-start-1';
            if (idx === 1) colClass = 'col-start-2 row-start-1';
            if (idx === 2) colClass = 'col-start-3 row-start-1';
            if (idx === 3) colClass = 'col-start-3 row-start-2';
            if (idx === 4) colClass = 'col-start-2 row-start-2';
            if (idx === 5) colClass = 'col-start-1 row-start-2';

            return (
              <motion.div
                key={step.id}
                className={`relative flex flex-col items-center text-center p-8 rounded-3xl border border-white/15 bg-[#0a0a0a]/80 backdrop-blur-md group hover:bg-[#111] hover:border-orange-500/50 transition-colors duration-500 z-10 shadow-xl
                  ${colClass}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="text-orange-500/20 text-5xl font-bold mb-4 font-mono transition-colors duration-500 group-hover:text-orange-500/50">
                  {step.id}
                </div>
                <h4 className="text-white font-semibold text-xl mb-3 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {step.desc}
                </p>
                <div className="h-8 bg-[#050505] border border-orange-500/30 rounded-full px-4 flex items-center justify-center gap-2 group-hover:bg-orange-500/10 group-hover:border-orange-500 transition-colors duration-300 shadow-lg mt-auto whitespace-nowrap">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(255,107,53,0.8)] animate-pulse" />
                  <span className="text-white/90 text-[10px] font-bold tracking-widest uppercase">
                    {step.time}
                  </span>
                </div>
              </motion.div>
            );
          })}
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
