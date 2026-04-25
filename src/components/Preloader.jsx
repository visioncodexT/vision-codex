import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('counting'); // counting, finished, sliding

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    let current = 0;
    const duration = 2000; // 2 seconds
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setCount(100);
        clearInterval(timer);
        setPhase('finished');
        
        // Wait 0.4s at 100%, then slide up
        setTimeout(() => {
          setPhase('sliding');
          document.body.style.overflow = '';
        }, 400);

        // Remove from DOM after slide finishes
        setTimeout(() => onComplete(), 1400);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-12 bg-[#050505] text-white transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]
        ${phase === 'sliding' ? '-translate-y-full' : 'translate-y-0'}`}
    >
      
      {/* ── Top Left ── */}
      <div className="flex justify-start overflow-hidden relative z-10">
        <span className={`text-sm font-mono tracking-widest uppercase text-orange-500 transition-transform duration-700 delay-100 
          ${phase === 'sliding' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
          [ Welcome ]
        </span>
      </div>

      {/* ── Center Title ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden z-0">
        <h1 className={`text-[10vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${phase === 'sliding' ? 'scale-110 opacity-0 blur-md' : 'scale-100 opacity-100 blur-0'}`}
        >
          VISION TECHX
        </h1>
        <p className={`text-orange-500/80 font-mono text-sm sm:text-lg tracking-[0.3em] uppercase mt-4 transition-all duration-1000 delay-100
          ${phase === 'sliding' ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
          Digital Excellence
        </p>
      </div>

      {/* ── Bottom Layout ── */}
      <div className="flex justify-between items-end overflow-hidden relative z-10 pb-4">
        
        {/* Subtext */}
        <div className={`hidden sm:block text-xs sm:text-sm font-mono text-white/50 max-w-[200px] transition-transform duration-700 delay-200 
          ${phase === 'sliding' ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
          Designing the future of digital experiences.
        </div>
        
        {/* Massive Counter */}
        <div className="flex items-end overflow-hidden">
          <div className={`text-5xl sm:text-7xl md:text-9xl font-black leading-none tracking-tighter text-white transition-transform duration-700 delay-100 
            ${phase === 'sliding' ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            {count}
          </div>
          <div className={`text-xl sm:text-3xl md:text-5xl font-bold text-orange-500 mb-1 sm:mb-2 md:mb-3 transition-transform duration-700 delay-150
            ${phase === 'sliding' ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            %
          </div>
        </div>
        
      </div>

      {/* ── Loading Progress Bar (Bottom Edge) ── */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-red-600 transition-all duration-300" style={{ width: `${count}%` }} />

    </div>
  );
};

export default Preloader;
