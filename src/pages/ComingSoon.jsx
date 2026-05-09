import { useState, useEffect } from 'react';
import LightRays from './LightRays';

const ComingSoon = () => {

    // ============================================================
    // 🚀 LAUNCH DATE CONFIGURATION — Change the date & time below
    // Format: new Date(year, monthIndex, day, hours, minutes, seconds)
    // Note: monthIndex is 0-based (January = 0, May = 4, December = 11)
    // Current target: 10 May 2026, 10:15 AM (IST / local time)
    // ============================================================
    const LAUNCH_DATE = new Date(2026, 4, 10, 10, 15, 0);
    // ============================================================
    // 🚀 END LAUNCH DATE CONFIGURATION
    // ===========================================================

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = LAUNCH_DATE - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];

    return (
        <div className='bg-black overflow-hidden flex items-center justify-center' style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1}
                    lightSpread={2}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays w-full h-full"
                    pulsating={false}
                    fadeDistance={2}
                    saturation={1}
                />
            </div>

            {/* Countdown keyframe animations */}
            <style>{`
                @keyframes countdown-pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.8); }
                }
                @keyframes countdown-glow {
                    0%, 100% { box-shadow: 0 0 15px rgba(255,255,255,0.05), inset 0 0 15px rgba(255,255,255,0.02); }
                    50% { box-shadow: 0 0 25px rgba(255,255,255,0.1), inset 0 0 25px rgba(255,255,255,0.04); }
                }
                @keyframes digit-flip {
                    0% { transform: translateY(0); opacity: 1; }
                    50% { transform: translateY(-4px); opacity: 0.6; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                .countdown-card {
                    animation: countdown-glow 3s ease-in-out infinite;
                }
                .countdown-dot {
                    animation: countdown-pulse 1s ease-in-out infinite;
                }
                .digit-animate {
                    animation: digit-flip 0.4s ease-out;
                }
            `}</style>

            <div className="relative z-10 flex items-center justify-center px-4 w-full h-full">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl flex flex-col items-center text-center max-w-xl w-full transform transition-all hover:scale-[1.02] duration-500">
                    <img
                        src="/logo.png"
                        alt="Vision Tech x Logo"
                        className="w-24 md:w-28 h-auto mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />

                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-4 pb-2 tracking-tight drop-shadow-lg">
                        Coming Soon
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mt-4 mb-6 font-light leading-relaxed">
                        Stay tuned. Something extraordinary is being built at <br className="hidden md:block" />
                        <strong className="font-semibold text-white tracking-wider">Vision TechX</strong>.
                    </p>

                    {/* ── Countdown Timer ── */}
                    <div className="w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-4 my-4">
                        {timeUnits.map((unit, index) => (
                            <div key={unit.label} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                                {/* Single time unit card */}
                                <div className="countdown-card flex flex-col items-center backdrop-blur-md bg-white/[0.04] border border-white/10 rounded-2xl px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 min-w-[60px] sm:min-w-[72px] md:min-w-[85px] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20">
                                    <span
                                        key={unit.value}
                                        className="digit-animate text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tabular-nums leading-none"
                                    >
                                        {String(unit.value).padStart(2, '0')}
                                    </span>
                                    <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mt-2 font-medium">
                                        {unit.label}
                                    </span>
                                </div>

                                {/* Pulsing dot separator (not after the last unit) */}
                                {index < timeUnits.length - 1 && (
                                    <div className="flex flex-col gap-1.5">
                                        <span className="countdown-dot block w-1.5 h-1.5 rounded-full bg-white/40"></span>
                                        <span className="countdown-dot block w-1.5 h-1.5 rounded-full bg-white/40" style={{ animationDelay: '0.3s' }}></span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* ── End Countdown Timer ── */}

                    <div className="w-3/4 bg-gradient-to-r from-transparent via-white/20 to-transparent h-[1px] my-6"></div>

                    <a
                        href="https://www.instagram.com/visiontech.x/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 mb-4"
                        title="Follow us on Instagram"
                    >
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 group-hover:border-pink-400/50 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:text-pink-400 transition-colors duration-300">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </span>
                        <span className="text-xs tracking-wider font-medium group-hover:text-pink-300 transition-colors duration-300">@visiontech.x</span>
                    </a>

                    <p className="text-xs text-gray-400 tracking-widest uppercase font-medium mt-2">
                        Powered By Pandawas Group
                    </p>
                </div>
            </div>
        </div>
    )
}


export default ComingSoon;