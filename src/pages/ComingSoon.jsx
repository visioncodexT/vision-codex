import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import LightRays from './LightRays';

const ComingSoon = () => {
    // ─────────────────────────────────────────────────────────
    // ADJUST LAUNCH TIME HERE
    // ─────────────────────────────────────────────────────────
    const LAUNCH_DATE = "2026-05-10T10:23:00";
    // ─────────────────────────────────────────────────────────

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(LAUNCH_DATE) - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();
        return () => clearInterval(timer);
    }, []);

    const CountdownItem = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="relative">
                <motion.div
                    key={value}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-3xl md:text-5xl font-bold text-white tabular-nums"
                >
                    {String(value).padStart(2, '0')}
                </motion.div>
            </div>
            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold mt-1">
                {label}
            </span>
        </div>
    );

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
                    className="custom-rays w-full h-full"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex items-center justify-center px-4 w-full h-full"
            >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl flex flex-col items-center text-center max-w-2xl w-full">
                    <motion.img
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        src="/logo.png"
                        alt="Vision Tech x Logo"
                        className="w-20 md:w-24 h-auto mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter"
                    >
                        LAUNCHING SOON
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-6 md:gap-10 my-8"
                    >
                        <CountdownItem value={timeLeft.hours} label="Hours" />
                        <div className="text-3xl md:text-5xl font-light text-white/20 self-start mt-[-4px]">:</div>
                        <CountdownItem value={timeLeft.minutes} label="Minutes" />
                        <div className="text-3xl md:text-5xl font-light text-white/20 self-start mt-[-4px]">:</div>
                        <CountdownItem value={timeLeft.seconds} label="Seconds" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed font-light mb-10"
                    >
                        We're putting the final touches on something extraordinary. <br />
                        Our new digital platform will be live in just a few hours.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col items-center gap-6 w-full"
                    >
                        <div className="w-full bg-gradient-to-r from-transparent via-white/10 to-transparent h-[1px]"></div>

                        <a
                            href="https://www.instagram.com/visiontech.x/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 text-white/60 hover:text-white transition-all duration-300"
                        >
                            <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </span>
                            <span className="text-sm font-semibold tracking-wider">FOLLOW OUR JOURNEY</span>
                        </a>

                        <p className="text-[10px] text-white/30 tracking-[0.3em] uppercase font-bold mt-2">
                            Vision TechX &bull; Pandawas Group
                        </p>
                    </motion.div>
                </div >
            </motion.div >
        </div >
    )
}

export default ComingSoon;