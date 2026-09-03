import { motion } from 'motion/react';
import LightRays from './LightRays';

const RebrandAnnouncement = () => {
    return (
        <div className="bg-black overflow-hidden flex items-center justify-center min-h-screen w-screen relative font-sans">
            {/* Background Light Rays */}
            <div className="absolute inset-0 z-0 opacity-80">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1}
                    lightSpread={2.5}
                    rayLength={3.5}
                    followMouse={true}
                    mouseInfluence={0.12}
                    className="custom-rays w-full h-full"
                />
            </div>

            {/* Subtle Accent Glow */}
            <div className="absolute z-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-amber-200/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Poster Card Container */}
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex items-center justify-center px-4 w-full"
            >
                <div className="backdrop-blur-2xl bg-zinc-950/70 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col items-center text-center max-w-xl w-full relative overflow-hidden">
                    
                    {/* Top Accent Highlight Line */}
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

                    {/* Announcement Badge */}
                    

                    {/* Logo Container */}
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-6 relative"
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-[1px] shadow-xl backdrop-blur-md">
                            <div className="w-full h-full rounded-2xl bg-black/40 flex items-center justify-center overflow-hidden p-2">
                                <img
                                    src="/codex_logo.jpg"
                                    alt="Vision Codex Logo"
                                    className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Rebrand Title Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-3 text-2xl sm:text-3xl font-bold mb-4"
                    >
                        <span className="text-zinc-500 line-through decoration-amber-500/50">Vision TechX</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 font-extrabold">Vision Codex</span>
                    </motion.div>

                    {/* Announcement Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed font-normal mb-6"
                    >
                        We are excited to announce that <strong className="text-white">Vision TechX</strong> is officially becoming <strong className="text-amber-300">Vision Codex</strong>. Same team, fresh new identity.
                    </motion.p>

                    {/* Domain & Contact Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col gap-3 w-full max-w-md mb-8"
                    >
                        {/* Domain Card */}
                        <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400/[0.05] border border-amber-400/20 text-amber-300 font-medium text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            Visit us at: <span className="font-bold underline tracking-wide">visioncodex.in</span>
                        </div>

                        {/* Email Link */}
                        <a 
                            href="mailto:info.visioncodex@gmail.com" 
                            className="group flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-400/30 hover:bg-white/[0.06] transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs md:text-sm text-zinc-300 group-hover:text-white transition-colors">
                                info.visioncodex@gmail.com
                            </span>
                        </a>

                        {/* Phone Links */}
                        <div className="flex items-center justify-center gap-2 sm:gap-4 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs md:text-sm text-zinc-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+918955531832" className="hover:text-amber-400 transition-colors">+91 89555 31832</a>
                            <span className="text-zinc-600 font-light">|</span>
                            <a href="tel:+919429806474" className="hover:text-amber-400 transition-colors">+91 94298 06474</a>
                        </div>
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col items-center gap-4 w-full"
                    >
                        <div className="w-full bg-gradient-to-r from-transparent via-white/10 to-transparent h-[1px]" />
                        <p className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase font-bold">
                            POWERED BY PANDAWAS GROUP
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default RebrandAnnouncement;


// import { useState, useEffect } from 'react';
// import { motion } from 'motion/react';
// import LightRays from './LightRays';

// const ComingSoon = () => {
//     // ─────────────────────────────────────────────────────────
//     // ADJUST LAUNCH TIME HERE
//     // ─────────────────────────────────────────────────────────
//     const LAUNCH_DATE = "2026-05-10T10:23:00";
//     // ─────────────────────────────────────────────────────────

//     const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//     useEffect(() => {
//         const calculateTimeLeft = () => {
//             const difference = +new Date(LAUNCH_DATE) - +new Date();
//             if (difference > 0) {
//                 setTimeLeft({
//                     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//                     hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//                     minutes: Math.floor((difference / 1000 / 60) % 60),
//                     seconds: Math.floor((difference / 1000) % 60),
//                 });
//             }
//         };

//         const timer = setInterval(calculateTimeLeft, 1000);
//         calculateTimeLeft();
//         return () => clearInterval(timer);
//     }, []);

//     const CountdownItem = ({ value, label }) => (
//         <div className="flex flex-col items-center">
//             <div className="relative">
//                 <motion.div
//                     key={value}
//                     initial={{ y: 10, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     className="text-3xl md:text-5xl font-bold text-white tabular-nums"
//                 >
//                     {String(value).padStart(2, '0')}
//                 </motion.div>
//             </div>
//             <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold mt-1">
//                 {label}
//             </span>
//         </div>
//     );

//     return (
//         <div className='bg-black overflow-hidden flex items-center justify-center' style={{ width: '100vw', height: '100vh', position: 'relative' }}>
//             <div className="absolute inset-0 z-0">
//                 <LightRays
//                     raysOrigin="top-center"
//                     raysColor="#ffffff"
//                     raysSpeed={1}
//                     lightSpread={2}
//                     rayLength={3}
//                     followMouse={true}
//                     mouseInfluence={0.1}
//                     className="custom-rays w-full h-full"
//                 />
//             </div>

//             <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 className="relative z-10 flex items-center justify-center px-4 w-full h-full"
//             >
//                 <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl flex flex-col items-center text-center max-w-2xl w-full">
//                     <motion.img
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                         src="/logo.png"
//                         alt="Vision Tech x Logo"
//                         className="w-20 md:w-24 h-auto mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] object-contain"
//                         onError={(e) => { e.target.style.display = 'none'; }}
//                     />

//                     <motion.h1
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.4 }}
//                         className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter"
//                     >
//                         LAUNCHING SOON
//                     </motion.h1>

//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.5 }}
//                         className="flex gap-6 md:gap-10 my-8"
//                     >
//                         <CountdownItem value={timeLeft.hours} label="Hours" />
//                         <div className="text-3xl md:text-5xl font-light text-white/20 self-start mt-[-4px]">:</div>
//                         <CountdownItem value={timeLeft.minutes} label="Minutes" />
//                         <div className="text-3xl md:text-5xl font-light text-white/20 self-start mt-[-4px]">:</div>
//                         <CountdownItem value={timeLeft.seconds} label="Seconds" />
//                     </motion.div>

//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.6 }}
//                         className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed font-light mb-10"
//                     >
//                         We're putting the final touches on something extraordinary. <br />
//                         Our new digital platform will be live in just a few hours.
//                     </motion.p>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.7 }}
//                         className="flex flex-col items-center gap-6 w-full"
//                     >
//                         <div className="w-full bg-gradient-to-r from-transparent via-white/10 to-transparent h-[1px]"></div>

//                         <a
//                             href="https://www.instagram.com/visiontech.x/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="group flex items-center gap-3 text-white/60 hover:text-white transition-all duration-300"
//                         >
//                             <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-300">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
//                             </span>
//                             <span className="text-sm font-semibold tracking-wider">FOLLOW OUR JOURNEY</span>
//                         </a>

//                         <p className="text-[10px] text-white/30 tracking-[0.3em] uppercase font-bold mt-2">
//                             Vision Codex &bull; Pandawas Group
//                         </p>
//                     </motion.div>
//                 </div >
//             </motion.div >
//         </div >
//     )
// }

// export default ComingSoon;