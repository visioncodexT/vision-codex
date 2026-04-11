import LightRays from './LightRays';

const ComingSoon = () => {
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

                    <p className="text-lg md:text-xl text-gray-300 mt-4 mb-8 font-light leading-relaxed">
                        Stay tuned. Something extraordinary is being built at <br className="hidden md:block" />
                        <strong className="font-semibold text-white tracking-wider">Vision TechX</strong>.
                    </p>

                    <div className="w-3/4 bg-gradient-to-r from-transparent via-white/20 to-transparent h-[1px] my-6"></div>

                </div>
            </div>
        </div>
    )
}

export default ComingSoon;