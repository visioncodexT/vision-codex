import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('counting'); // counting → finished → sliding

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let current = 0;
    const duration = 1960; // Total loading duration in ms
    const intervalTime = 25;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setCount(100);
        clearInterval(timer);
        setPhase('finished');

        setTimeout(() => {
          setPhase('sliding');
          document.body.style.overflow = '';
        }, 350);

        setTimeout(() => onComplete(), 1120);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const progress = count / 100; // 0 → 1

  // ── Logo icon paths (arcs + V shapes) ──
  const logoPaths = [
    {
      // Arc left
      d: "M444.764 356.13C372.805 333.633 320.583 266.457 320.583 187.083C320.583 167.167 323.871 148.018 329.934 130.15",
      isStrokeOnly: true,
      strokeWidth: 20,
      drawStart: 0.0,
      drawEnd: 0.50,
    },
    {
      // Arc top
      d: "M399.909 39.4053C427.924 20.8235 461.531 10 497.667 10C531.081 10 562.335 19.2549 589.003 35.3413",
      isStrokeOnly: true,
      strokeWidth: 20,
      drawStart: 0.12,
      drawEnd: 0.55,
    },
    {
      // Arc right
      d: "M540.946 358.84C617.826 339.529 674.75 269.954 674.75 187.083C674.75 166.796 671.339 147.306 665.058 129.155",
      isStrokeOnly: true,
      strokeWidth: 20,
      drawStart: 0.05,
      drawEnd: 0.45,
    },
    {
      // V shape — outer
      d: "M367.667 57.5H318.5L488.5 352.083H497.667L621.417 138.333H621H620.583H571L501.833 257.5H483.083L367.667 57.5Z",
      isStrokeOnly: false,
      strokeWidth: 2,
      drawStart: 0.15,
      drawEnd: 0.65,
    },
    {
      // V shape — inner
      d: "M493.083 215.833L401.833 57.5H509.75L483.083 103.333H461.833L493.5 157.917L551 57.5H667.667L633.083 117.5H550.583L493.083 215.833Z",
      isStrokeOnly: false,
      strokeWidth: 2,
      drawStart: 0.25,
      drawEnd: 0.70,
    },
  ];

  const getPathProgress = (drawStart, drawEnd) => {
    if (progress <= drawStart) return 0;
    if (progress >= drawEnd) return 1;
    return (progress - drawStart) / (drawEnd - drawStart);
  };

  const textStart = 0.25;
  const textEnd = 0.85;
  const textProgress = getPathProgress(textStart, textEnd);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)]
        ${phase === 'sliding' ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div
        className={`relative w-[75vw] max-w-[520px] sm:w-[55vw] sm:max-w-[480px] transition-all duration-700
          ${phase === 'sliding' ? 'scale-110 opacity-0 blur-sm' : 'scale-100 opacity-100 blur-0'}`}
      >
        <svg
          className="w-full h-auto"
          viewBox="0 0 987 658"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="textRevealClip">
              <rect x="0" y="410" width={textProgress * 987} height="250" />
            </clipPath>
          </defs>

          {/* ── Ghost outline (dim background) ── */}
          <g opacity="0.08">
            <path d="M444.764 356.13C372.805 333.633 320.583 266.457 320.583 187.083C320.583 167.167 323.871 148.018 329.934 130.15" stroke="white" strokeWidth="20"/>
            <path d="M399.909 39.4053C427.924 20.8235 461.531 10 497.667 10C531.081 10 562.335 19.2549 589.003 35.3413" stroke="white" strokeWidth="20"/>
            <path d="M540.946 358.84C617.826 339.529 674.75 269.954 674.75 187.083C674.75 166.796 671.339 147.306 665.058 129.155" stroke="white" strokeWidth="20"/>
            <path d="M367.667 57.5H318.5L488.5 352.083H497.667L621.417 138.333H621H620.583H571L501.833 257.5H483.083L367.667 57.5Z" fill="white" stroke="white"/>
            <path d="M493.083 215.833L401.833 57.5H509.75L483.083 103.333H461.833L493.5 157.917L551 57.5H667.667L633.083 117.5H550.583L493.083 215.833Z" fill="white" stroke="white"/>
          </g>

          {/* ── Logo paths — line-drawing animation ── */}
          {logoPaths.map((config, i) => {
            const pathProg = getPathProgress(config.drawStart, config.drawEnd);
            const dashOffset = 1 - pathProg;
            const fillOpacity = config.isStrokeOnly
              ? 0
              : pathProg > 0.7 ? (pathProg - 0.7) / 0.3 : 0;

            return (
              <path
                key={i}
                d={config.d}
                pathLength="1"
                stroke="white"
                strokeWidth={config.strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={config.isStrokeOnly ? 'none' : `rgba(255,255,255,${fillOpacity})`}
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset: dashOffset,
                  transition: 'stroke-dashoffset 0.08s linear',
                }}
              />
            );
          })}

          {/* ── Wordmark text — scaled up & condensed style ── */}
          <g clipPath="url(#textRevealClip)">
            <text
              x="493"
              y="560"
              textAnchor="middle"
              fill="white"
              fontSize="115"
              fontWeight="900"
              letterSpacing="2"
              fontFamily="Impact, 'Arial Black', sans-serif"
            >
              Vision CodeX
            </text>
          </g>
        </svg>
      </div>

      {/* ── Counter at Bottom ── */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 flex flex-col items-center gap-4">
        <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-white/60 to-white rounded-full transition-all duration-100 ease-out"
            style={{ width: `${count}%` }}
          />
        </div>

        <div className={`flex items-baseline gap-1 transition-all duration-700
          ${phase === 'sliding' ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}
        >
          <span className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white tabular-nums font-mono">
            {String(count).padStart(3, '0')}
          </span>
          <span className="text-lg sm:text-xl font-extralight text-white/40">
            %
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;


// -------------------------------------------------------------

// import { useState, useEffect } from 'react';

// const Preloader = ({ onComplete }) => {
//   const [count, setCount] = useState(0);
//   const [phase, setPhase] = useState('counting'); // counting → finished → sliding

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';

//     let current = 0;
//     const duration = 1960; // Total loading duration in ms
//     const intervalTime = 25;
//     const increment = 100 / (duration / intervalTime);

//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= 100) {
//         setCount(100);
//         clearInterval(timer);
//         setPhase('finished');

//         setTimeout(() => {
//           setPhase('sliding');
//           document.body.style.overflow = '';
//         }, 350);

//         setTimeout(() => onComplete(), 1120);
//       } else {
//         setCount(Math.floor(current));
//       }
//     }, intervalTime);

//     return () => {
//       clearInterval(timer);
//       document.body.style.overflow = '';
//     };
//   }, [onComplete]);

//   const progress = count / 100; // 0 → 1

//   // ── Logo icon paths (arcs + V shapes) ──
//   // Each path draws between [drawStart, drawEnd] of overall progress.
//   // Staggered randomly so they don't all draw together.
//   const logoPaths = [
//     {
//       // Arc left
//       d: "M444.764 356.13C372.805 333.633 320.583 266.457 320.583 187.083C320.583 167.167 323.871 148.018 329.934 130.15",
//       isStrokeOnly: true,
//       strokeWidth: 20,
//       drawStart: 0.0,
//       drawEnd: 0.50,
//     },
//     {
//       // Arc top
//       d: "M399.909 39.4053C427.924 20.8235 461.531 10 497.667 10C531.081 10 562.335 19.2549 589.003 35.3413",
//       isStrokeOnly: true,
//       strokeWidth: 20,
//       drawStart: 0.12,
//       drawEnd: 0.55,
//     },
//     {
//       // Arc right
//       d: "M540.946 358.84C617.826 339.529 674.75 269.954 674.75 187.083C674.75 166.796 671.339 147.306 665.058 129.155",
//       isStrokeOnly: true,
//       strokeWidth: 20,
//       drawStart: 0.05,
//       drawEnd: 0.45,
//     },
//     {
//       // V shape — outer
//       d: "M367.667 57.5H318.5L488.5 352.083H497.667L621.417 138.333H621H620.583H571L501.833 257.5H483.083L367.667 57.5Z",
//       isStrokeOnly: false,
//       strokeWidth: 2,
//       drawStart: 0.15,
//       drawEnd: 0.65,
//     },
//     {
//       // V shape — inner
//       d: "M493.083 215.833L401.833 57.5H509.75L483.083 103.333H461.833L493.5 157.917L551 57.5H667.667L633.083 117.5H550.583L493.083 215.833Z",
//       isStrokeOnly: false,
//       strokeWidth: 2,
//       drawStart: 0.25,
//       drawEnd: 0.70,
//     },
//   ];

//   // The wordmark text path data
//   const textPathD = "M21.6797 596.167L2.07764 437.092H32.3389L43.9917 545.31L54.3799 437.092H84.6411L65.0391 596.167H21.6797ZM93.2227 452.358V425.439H125.562V452.358H93.2227ZM93.2227 596.167V460.668H125.562V596.167H93.2227ZM175.515 597.612C148.777 597.612 135.408 584.062 135.408 556.962V546.213H167.927V562.111C167.927 565.183 168.529 567.591 169.734 569.338C170.938 571.084 172.865 571.958 175.515 571.958C180.212 571.958 182.561 568.435 182.561 561.389C182.561 555.487 181.326 551.091 178.857 548.2C176.388 545.249 173.377 542.419 169.824 539.709L152.571 526.43C147.151 522.215 143.026 517.758 140.195 513.061C137.365 508.364 135.95 501.83 135.95 493.459C135.95 485.69 137.786 479.277 141.46 474.218C145.194 469.16 150.102 465.396 156.184 462.927C162.327 460.458 168.951 459.223 176.057 459.223C202.314 459.223 215.442 472.321 215.442 498.518V501.047H182.019V495.898C182.019 493.188 181.537 490.568 180.574 488.039C179.67 485.51 177.864 484.245 175.154 484.245C170.577 484.245 168.289 486.654 168.289 491.472C168.289 496.35 170.216 500.174 174.07 502.944L194.124 517.578C200.387 522.094 205.626 527.454 209.841 533.657C214.117 539.86 216.255 548.11 216.255 558.408C216.255 571.175 212.611 580.9 205.325 587.585C198.098 594.27 188.162 597.612 175.515 597.612ZM226.011 452.358V425.439H258.35V452.358H226.011ZM226.011 596.167V460.668H258.35V596.167H226.011ZM310.562 597.612C283.582 597.612 270.093 583.61 270.093 555.607V501.228C270.093 488.461 273.676 478.283 280.842 470.695C288.009 463.047 297.915 459.223 310.562 459.223C323.268 459.223 333.205 463.047 340.371 470.695C347.537 478.283 351.121 488.461 351.121 501.228V555.607C351.121 583.61 337.601 597.612 310.562 597.612ZM310.562 572.68C313.271 572.68 315.199 571.717 316.343 569.79C317.547 567.802 318.149 565.303 318.149 562.292V496.079C318.149 488.19 315.62 484.245 310.562 484.245C305.503 484.245 302.974 488.19 302.974 496.079V562.292C302.974 565.303 303.546 567.802 304.69 569.79C305.894 571.717 307.852 572.68 310.562 572.68ZM363.135 596.167V460.668H395.474V477.922C396.678 472.743 398.906 468.347 402.158 464.733C405.47 461.06 410.047 459.223 415.889 459.223C425.283 459.223 432.088 462.114 436.304 467.895C440.579 473.676 442.717 481.595 442.717 491.652V596.167H410.83V494.995C410.83 492.345 410.288 489.906 409.204 487.678C408.12 485.389 406.253 484.245 403.604 484.245C401.134 484.245 399.298 485.118 398.093 486.865C396.949 488.551 396.226 490.689 395.925 493.278C395.624 495.808 395.474 498.337 395.474 500.866V596.167H363.135ZM512.996 596.167V467.714H494.116V437.182H563.672V467.714H544.792V596.167H512.996ZM609.922 597.612C600.286 597.612 592.608 595.805 586.887 592.192C581.166 588.579 577.071 583.369 574.602 576.564C572.133 569.759 570.898 561.569 570.898 551.994V497.524C570.898 484.938 574.512 475.423 581.738 468.979C588.965 462.475 598.901 459.223 611.548 459.223C637.563 459.223 650.571 471.99 650.571 497.524V507.37C650.571 519.294 650.451 527.303 650.21 531.398H603.237V557.595C603.237 560.004 603.388 562.382 603.689 564.731C603.99 567.019 604.653 568.916 605.676 570.422C606.76 571.927 608.477 572.68 610.825 572.68C614.198 572.68 616.305 571.235 617.148 568.344C617.992 565.393 618.413 561.569 618.413 556.872V543.864H650.571V551.542C650.571 561.66 649.307 570.151 646.777 577.016C644.308 583.821 640.093 588.97 634.131 592.463C628.229 595.896 620.16 597.612 609.922 597.612ZM603.057 515.319H618.413V497.072C618.413 492.194 617.811 488.701 616.606 486.594C615.402 484.426 613.595 483.342 611.187 483.342C608.597 483.342 606.58 484.366 605.134 486.413C603.749 488.461 603.057 492.014 603.057 497.072V515.319ZM703.054 597.612C687.878 597.612 677.099 593.728 670.715 585.959C664.392 578.19 661.23 566.778 661.23 551.723V509.99C661.23 498.668 662.435 489.243 664.844 481.716C667.253 474.188 671.468 468.557 677.49 464.824C683.512 461.09 691.883 459.223 702.603 459.223C710.07 459.223 716.755 460.548 722.656 463.198C728.618 465.847 733.315 469.732 736.748 474.851C740.181 479.969 741.897 486.232 741.897 493.64V514.326H708.926V495.356C708.926 492.224 708.474 489.605 707.571 487.497C706.667 485.329 704.71 484.245 701.699 484.245C696.4 484.245 693.75 488.009 693.75 495.537V561.208C693.75 563.978 694.352 566.538 695.557 568.886C696.761 571.175 698.748 572.319 701.519 572.319C704.349 572.319 706.306 571.205 707.39 568.977C708.534 566.688 709.106 564.038 709.106 561.027V538.264H741.897V561.931C741.897 569.398 740.211 575.812 736.838 581.171C733.526 586.471 728.949 590.536 723.108 593.366C717.266 596.197 710.582 597.612 703.054 597.612ZM753.188 596.167V437.182H786.431V474.128C788.177 469.069 790.857 465.336 794.47 462.927C798.083 460.458 802.299 459.223 807.117 459.223C816.511 459.223 823.346 462.174 827.622 468.076C831.898 473.977 834.036 481.896 834.036 491.833V596.167H801.335V493.911C801.335 490.96 800.703 488.551 799.438 486.684C798.234 484.817 796.307 483.884 793.657 483.884C791.429 483.884 789.653 484.847 788.328 486.774C787.063 488.701 786.431 490.99 786.431 493.64V596.167H753.188ZM842.708 596.167L859.78 511.887L846.23 437.092H877.305L885.525 491.743L892.842 437.092H924.006L910.457 511.887L927.439 596.167H895.281L885.254 534.018L874.956 596.167H842.708Z";

//   // Helper: get progress for a path between its draw window
//   const getPathProgress = (drawStart, drawEnd) => {
//     if (progress <= drawStart) return 0;
//     if (progress >= drawEnd) return 1;
//     return (progress - drawStart) / (drawEnd - drawStart);
//   };

//   // Text reveals from left to right between 25% → 85% of total progress
//   const textStart = 0.25;
//   const textEnd = 0.85;
//   const textProgress = getPathProgress(textStart, textEnd);

//   return (
//     <div
//       className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)]
//         ${phase === 'sliding' ? '-translate-y-full' : 'translate-y-0'}`}
//     >

//       {/* ── SVG with line-drawing logo + left-to-right text ── */}
//       <div
//         className={`relative w-[75vw] max-w-[520px] sm:w-[55vw] sm:max-w-[480px] transition-all duration-700
//           ${phase === 'sliding' ? 'scale-110 opacity-0 blur-sm' : 'scale-100 opacity-100 blur-0'}`}
//       >
//         <svg
//           className="w-full h-auto"
//           viewBox="0 0 987 658"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             {/* Clip rect for left-to-right text reveal */}
//             <clipPath id="textRevealClip">
//               <rect x="0" y="410" width={textProgress * 940} height="250" />
//             </clipPath>
//           </defs>

//           {/* ── Ghost outline (dim background) ── */}
//           <g opacity="0.08">
//             <path d="M444.764 356.13C372.805 333.633 320.583 266.457 320.583 187.083C320.583 167.167 323.871 148.018 329.934 130.15" stroke="white" strokeWidth="20"/>
//             <path d="M399.909 39.4053C427.924 20.8235 461.531 10 497.667 10C531.081 10 562.335 19.2549 589.003 35.3413" stroke="white" strokeWidth="20"/>
//             <path d="M540.946 358.84C617.826 339.529 674.75 269.954 674.75 187.083C674.75 166.796 671.339 147.306 665.058 129.155" stroke="white" strokeWidth="20"/>
//             <path d="M367.667 57.5H318.5L488.5 352.083H497.667L621.417 138.333H621H620.583H571L501.833 257.5H483.083L367.667 57.5Z" fill="white" stroke="white"/>
//             <path d="M493.083 215.833L401.833 57.5H509.75L483.083 103.333H461.833L493.5 157.917L551 57.5H667.667L633.083 117.5H550.583L493.083 215.833Z" fill="white" stroke="white"/>
//             <path d={textPathD} fill="white"/>
//           </g>

//           {/* ── Logo paths — line-drawing animation ── */}
//           {logoPaths.map((config, i) => {
//             const pathProg = getPathProgress(config.drawStart, config.drawEnd);
//             const dashOffset = 1 - pathProg;

//             // For filled shapes: fill fades in after stroke is 80% drawn
//             const fillOpacity = config.isStrokeOnly
//               ? 0
//               : pathProg > 0.7 ? (pathProg - 0.7) / 0.3 : 0;

//             return (
//               <path
//                 key={i}
//                 d={config.d}
//                 pathLength="1"
//                 stroke="white"
//                 strokeWidth={config.strokeWidth}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 fill={config.isStrokeOnly ? 'none' : `rgba(255,255,255,${fillOpacity})`}
//                 style={{
//                   strokeDasharray: 1,
//                   strokeDashoffset: dashOffset,
//                   transition: 'stroke-dashoffset 0.08s linear',
//                 }}
//               />
//             );
//           })}

//           {/* ── Wordmark text — left-to-right reveal ── */}
//           <g clipPath="url(#textRevealClip)">
//             <path
//               d={textPathD}
//               fill="white"
//               stroke="white"
//               strokeWidth="0.5"
//             />
//           </g>

//         </svg>
//       </div>

//       {/* ── Counter at Bottom ── */}
//       <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 flex flex-col items-center gap-4">
//         {/* Progress bar */}
//         <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-gradient-to-r from-white/60 to-white rounded-full transition-all duration-100 ease-out"
//             style={{ width: `${count}%` }}
//           />
//         </div>

//         {/* Counter number */}
//         <div className={`flex items-baseline gap-1 transition-all duration-700
//           ${phase === 'sliding' ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}
//         >
//           <span className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white tabular-nums font-mono">
//             {String(count).padStart(3, '0')}
//           </span>
//           <span className="text-lg sm:text-xl font-extralight text-white/40">
//             %
//           </span>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Preloader;

