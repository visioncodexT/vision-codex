import { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black ">
            {/* ── Ambient radial glow behind text ── */}
            <div
                className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2
          w-[700px] h-[700px] rounded-full pointer-events-none z-[2]"
                style={{
                    background: 'radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)',
                }}
            />

            {/* ── Video Background (right half) ── */}
            <div className="absolute inset-0 z-[1]">
                {/* The video, positioned on the right */}
                <div className="absolute top-0 right-0 w-full md:w-[60%] h-full">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/home-bg-vid.mp4" type="video/mp4" />
                    </video>

                    {/* Gradient fades to blend into black */}
                    {/* Left fade */}
                    <div
                        className="absolute inset-y-0 left-0 w-[60%] pointer-events-none"
                        style={{
                            background: 'linear-gradient(to right, #000000 0%, rgba(0,0,0,0.85) 40%, transparent 100%)',
                        }}
                    />
                    {/* Bottom fade */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
                        style={{
                            background: 'linear-gradient(to top, #000000, transparent)',
                        }}
                    />
                    {/* Top fade */}
                    <div
                        className="absolute top-0 left-0 right-0 h-[20%] pointer-events-none"
                        style={{
                            background: 'linear-gradient(to bottom, #000000, transparent)',
                        }}
                    />
                    {/* Overall dim overlay */}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>
            </div>

            {/* ── Hero Content ── */}
            <div className="relative z-[3] flex items-center min-h-screen px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-24">
                    {/* ── Left Column: Text ── */}
                    <div className="flex flex-col gap-8">
                        {/* Heading */}
                        <h1
                            className={`text-4xl sm:text-6xl lg:text-7xl xl:text-[4.25rem] font-bold leading-[1.08] tracking-tight text-white transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            We Build Powerful Digital Solutions for Your Business
                        </h1>

                        {/* Subtitle (Optional addition) */}
                        <p
                            className={`text-base sm:text-lg text-white/40 max-w-md leading-relaxed font-light
                transition-all duration-1000
                ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: '0.4s' }}
                        >
                            Vision TechX helps startups and businesses design, develop, and scale modern websites and applications that drive real growth.
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className={`flex flex-wrap gap-4 transition-all duration-1000
                ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: '0.6s' }}
                        >
                            {/* Primary */}
                            <a
                                href="#demo"
                                id="hero-cta-primary"
                                className="group relative px-7 py-3.5 bg-white text-black text-sm font-semibold
                  rounded-full uppercase tracking-wider
                  hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(255,255,255,0.15)]
                  active:scale-[0.98] transition-all duration-300"
                            >
                                Get Free Consultation
                            </a>

                            {/* Secondary */}
                            <a
                                href="#download"
                                id="hero-cta-secondary"
                                className="group px-7 py-3.5 text-white/80 text-sm font-semibold rounded-full
                  uppercase tracking-wider border border-white/[0.2]
                  hover:border-white/[0.4] hover:bg-white/[0.06] hover:text-white
                  hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                            >
                                View Our Work
                            </a>
                        </div>
                    </div>

                    {/* ── Right Column: (empty – video shows through) ── */}
                    <div className="hidden md:block" />
                </div>
            </div>

            {/* ── Floating Glass Card ── */}
            <div
                className={`absolute bottom-10 right-6 sm:right-10 md:right-16 lg:right-24 z-[4]
          transition-all duration-1000
          ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.9s' }}
            >
                <div
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/[0.08]
            backdrop-blur-xl animate-float"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                    {/* Glowing dot */}
                    <div className="relative flex-shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse-glow" />
                        <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-orange-400/40 blur-sm" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white/90 leading-tight">
                            Trusted by Growing Businesses
                        </p>
                        <p className="text-xs text-white/40 mt-0.5">
                            Building scalable digital solutions
                        </p>
                    </div>
                    {/* Spark icon */}
                    <svg
                        className="w-5 h-5 text-orange-400/60 flex-shrink-0 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 2L12.39 7.26L18 8.27L14 12.14L14.82 18L10 15.27L5.18 18L6 12.14L2 8.27L7.61 7.26L10 2Z" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
