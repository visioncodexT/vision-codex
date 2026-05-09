import { useEffect, useRef, useState } from 'react';

/* ── Testimonial Data ── */
const testimonials = [
  {
    text: "When we needed to build Sanskar School Online Platform, Vision TechX gave us perfect guidance. They understood everything clearly and created an amazing platform for us. Really impressed!",
    name: "Mr. Shiv Menariya",
    company: "Sanskar School Online Platform",
  },
  {
    text: "The website they created for Shri Kishan Restaurant is simply amazing! Our customers can order easily now and our business has grown so much. We are very thankful to Vision TechX.",
    name: "Mr. Narpat Menaria",
    company: "Shri Kishan Restaurant",
  },
  {
    text: "Vision TechX was very helpful in building the Shree Ji Quick Funds Web App. They created a user-friendly platform that our customers love. Everything was made with great care and attention.",
    name: "Mr Manish Menariya",
    company: "Shree Ji Quick Funds",
  },
  {
    text: "The platform they built for CTONE Solar is completely perfect. The team finished the work quickly and everything works without any problems. They are really talented people.",
    name: "Mr Rohit Joshi",
    company: "CTONE Solar",
  },
  {
    text: "Vision TechX provided excellent services for Nikul Pharma Equipments. The solutions they delivered were very efficient and professional. They helped us take our business online smoothly.",
    name: "Mr Nikul Jadeja",
    company: "Nikul Pharma Equipments",
  },
  {
    text: "For the Green Era project, Vision TechX did excellent work. The team was very professional and delivered everything on time. The final result was much better than what we expected.",
    name: "Mr Khunt Meet",
    company: "Green Era",
  },
];

/* ── Vertical offset patterns for staggered look ── */
const offsets = [0, 40, -20, 60, 10, -30, 50, -10];

/* ── Single Testimonial Card ── */
const TestimonialCard = ({ testimonial, offset, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="group relative flex-shrink-0 w-[320px] sm:w-[360px] cursor-default"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="relative h-full rounded-2xl p-7 sm:p-8 border border-white/15
          bg-[#111111] transition-all duration-500 ease-out
          group-hover:bg-[#E8461E] group-hover:border-[#E8461E]/50
          group-hover:scale-[1.03] group-hover:shadow-[0_20px_60px_rgba(232,70,30,0.25)]"
      >
        {/* Quote mark - top left */}
        <svg
          className="absolute top-5 left-6 w-8 h-8 text-white/[0.06] group-hover:text-black/10 transition-colors duration-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>

        {/* Quote mark - bottom right */}
        <svg
          className="absolute bottom-5 right-6 w-8 h-8 text-white/[0.06] group-hover:text-black/10 transition-colors duration-500 rotate-180"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>

        {/* Testimonial text */}
        <p className="relative z-10 text-[14px] sm:text-[15px] leading-[1.75] text-white/70 group-hover:text-black/80 transition-colors duration-500 mb-8 mt-4">
          {testimonial.text}
        </p>

        {/* Author */}
        <div className="relative z-10 flex items-center gap-3 mt-auto">
          {/* Avatar placeholder */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 group-hover:from-black/20 group-hover:to-black/30 flex items-center justify-center text-white text-xs font-bold transition-all duration-500 flex-shrink-0">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-sm font-semibold text-white group-hover:text-black transition-colors duration-500">
              {testimonial.name}
            </p>
            <p className="text-[10px] text-white/40 group-hover:text-black/50 uppercase tracking-[0.15em] font-medium transition-colors duration-500">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Main Testimonials Section ── */
const Testimonials = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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
      id="testimonials"
      ref={sectionRef}
      className="light-section relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      style={{ background: '#F5F0EB' }}
    >
      {/* Edge fades — section-level so they cover full height including staggered cards */}
      <div
        className="hidden sm:block absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #F5F0EB, transparent)' }}
      />
      <div
        className="hidden sm:block absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #F5F0EB, transparent)' }}
      />
      {/* ── Section Header ── */}
      <div className="text-center px-6 mb-16 sm:mb-20">
        <p
          className={`text-orange-500 font-mono text-sm sm:text-base tracking-[0.2em] uppercase mb-4
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          [ Testimonials ]
        </p>
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] tracking-tight leading-[1.1]
            transition-all duration-700 delay-100
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Don't take our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">word</span> for it
          <span className="text-orange-600">*</span>
        </h2>
        <p
          className={`text-orange-600 text-xs font-mono tracking-[0.2em] uppercase mt-3
            transition-all duration-700 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          *Take Theirs
        </p>
      </div>

      {/* ── Marquee Carousel ── */}
      <div
        className={`relative transition-all duration-1000 delay-300
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >


        {/* Scrolling track */}
        <div
          className="flex gap-6 sm:gap-8 items-start"
          style={{
            animation: `marquee-scroll 40s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'max-content',
          }}
        >
          {/* First set */}
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={`a-${i}`}
              testimonial={t}
              offset={offsets[i % offsets.length]}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
          ))}
          {/* Duplicate for seamless loop */}
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={`b-${i}`}
              testimonial={t}
              offset={offsets[i % offsets.length]}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
          ))}
        </div>
      </div>

      {/* ── Inline Keyframes ── */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 640px) {
          .flex.items-start {
            align-items: stretch;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
