import { useEffect, useRef, useState } from 'react';

/* ── Testimonial Data ── */
const testimonials = [
  {
    text: "Vision TechX built our entire platform from scratch. Their attention to detail and clean code quality is unmatched. The team delivered ahead of schedule and the final product exceeded all our expectations.",
    name: "Rahul Sharma",
    role: "CEO",
    company: "TechStart India",
  },
  {
    text: "Working with Vision TechX was an absolute pleasure. They transformed our outdated website into a modern, high-converting platform. Our online leads increased by 3x within the first month of launch.",
    name: "Priya Patel",
    role: "Marketing Director",
    company: "GrowthBox",
  },
  {
    text: "The team's ability to understand our vision and translate it into a beautiful, functional product is remarkable. They didn't just build a website — they built a digital experience that our customers love.",
    name: "Amit Verma",
    role: "Founder",
    company: "CloudNine Solutions",
  },
  {
    text: "We needed a complex SaaS dashboard built in record time. Vision TechX not only delivered on time but also suggested improvements we hadn't even considered. True partners in every sense.",
    name: "Sneha Gupta",
    role: "Product Manager",
    company: "DataSync",
  },
  {
    text: "Their design sense is exceptional. Every pixel, every interaction feels intentional and premium. If you want a website that stands out from the competition, Vision TechX is the team to hire.",
    name: "Vikram Singh",
    role: "Creative Director",
    company: "Brandify Agency",
  },
  {
    text: "From the initial consultation to the final deployment, the communication was seamless. They kept us in the loop at every stage and were always open to feedback. Highly recommend their services.",
    name: "Neha Kapoor",
    role: "Operations Head",
    company: "FinEdge",
  },
  {
    text: "Vision TechX helped us migrate our legacy system to a modern stack without any downtime. Their technical expertise and problem-solving skills are truly world-class. We couldn't be happier.",
    name: "Arjun Mehta",
    role: "CTO",
    company: "ScaleUp Labs",
  },
  {
    text: "What impressed me most was their proactive approach. They didn't just follow instructions — they brought creative ideas to the table that genuinely improved our product and user experience.",
    name: "Kavita Reddy",
    role: "Startup Founder",
    company: "EduLearn",
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
              {testimonial.role} · {testimonial.company}
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
