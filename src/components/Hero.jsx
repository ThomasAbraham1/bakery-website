import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="relative w-full flex items-center justify-center bg-[#3d4f40] lg:bg-transparent lg:h-[calc(100vh-80px)]">

            {/* Background Circle — scales with vw so it works at all sizes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[700px] max-h-[700px] bg-[#4a584c] rounded-full blur-[80px] opacity-40 z-0 pointer-events-none"></div>

            {/* ============================================================
                MOBILE + TABLET LAYOUT  (hidden on lg and above)
                Uses normal document flow — no absolute positioning.
                Text stacks vertically around a centered image.
            ============================================================ */}
            <div className="lg:hidden w-full flex flex-col items-center px-6 pt-10 pb-6 z-10 relative">

                {/* Top tagline */}
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#fbf8f1]/50 mb-4">
                    • Best Seller •
                </p>

                {/* Main heading — scales with viewport using clamp() */}
                {/* clamp(min, preferred, max): 
                    min = smallest it ever gets
                    preferred = scales with viewport width (vw)
                    max = biggest it ever gets */}
                <h1
                    className="font-serif text-center text-[#fbf8f1] leading-[1] tracking-tight mb-2"
                    style={{ fontSize: "clamp(3rem, 12vw, 6rem)", textShadow: "0 4px 40px rgba(61,79,64,0.4)" }}
                >
                    The sweetest<br />Haven for
                </h1>

                {/* Hero Image — fills most of the width, capped at 380px */}
                <div className="relative w-full max-w-[380px] mt-4">
                    <img
                        src="/hero-stack.png"
                        alt="Delicious cookie and ice cream stack"
                        className="w-full object-contain"
                    />
                </div>

                {/* "freshly baked" sits BELOW the image on mobile */}
                <h2
                    className="font-serif text-center text-[#fbf8f1] leading-[1] tracking-tight -mt-4"
                    style={{ fontSize: "clamp(2.5rem, 11vw, 5.5rem)", textShadow: "0 6px 30px rgba(61,79,64,0.5)" }}
                >
                    freshly baked
                </h2>

                {/* Description + CTA */}
                <div className="mt-6 text-center max-w-[320px]">
                    <p className="font-sans text-[13px] leading-relaxed text-[#fbf8f1]/70 mb-4">
                        A delightful treat that combines the comforting charm of freshly baked cookies with the rich, luxurious and mouthwatering fillings.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 font-sans text-[13px] text-[#fbf8f1] border-b border-[#fbf8f1]/30 pb-1 hover:opacity-70 transition-opacity">
                        Get more details <ArrowRight size={14} className="-rotate-45" />
                    </a>
                </div>

                {/* Bottom spacing so the image bleeds into the cream section */}
                <div className="h-16"></div>
            </div>


            {/* ============================================================
                DESKTOP LAYOUT  (hidden below lg, shown on lg and above)
                Uses absolute positioning for the overlapping text effect.
                TEACH: Each element is pulled out of normal flow with
                `absolute`, then placed precisely using top/left/right.
                The parent div must be `relative` with a defined height
                so absolute children have something to anchor to.
            ============================================================ */}
            <div className="hidden lg:block w-full max-w-7xl mx-auto relative h-[600px] z-10 overflow-visible mt-[-20px]">

                {/* "The sweetest" — sits BEHIND the image (z-0) */}
                <div className="absolute top-2 left-0 w-full text-center pointer-events-none z-0">
                    <h1
                        className="font-serif leading-[0.9] tracking-tight text-[#fbf8f1]"
                        style={{ fontSize: "clamp(6rem, 9vw, 11rem)", textShadow: "0 4px 40px rgba(61,79,64,0.4)" }}
                    >
                        The sweetest
                    </h1>
                </div>

                {/* "Haven" — behind image, left-aligned */}
                <div className="absolute top-[160px] left-[80px] pointer-events-none z-0">
                    <h2
                        className="font-serif leading-[0.9] tracking-tight text-[#fbf8f1]"
                        style={{ fontSize: "clamp(5rem, 8vw, 10rem)", textShadow: "0 4px 60px rgba(61,79,64,0.5)" }}
                    >
                        Haven
                    </h2>
                </div>

                {/* "for" — behind image, offset right */}
                <div className="absolute top-[280px] left-[320px] pointer-events-none z-0">
                    <h2
                        className="font-serif leading-[0.9] tracking-tight text-[#fbf8f1]"
                        style={{ fontSize: "clamp(4rem, 7vw, 8rem)", textShadow: "0 4px 60px rgba(61,79,64,0.5)" }}
                    >
                        for
                    </h2>
                </div>

                {/* CENTER STACK IMAGE — z-10 puts it in front of "Haven/for" 
                    but behind "freshly baked" which is z-20 */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[480px] h-[650px] z-10 flex justify-center">
                    <img
                        src="/hero-stack.png"
                        alt="Delicious cookie and ice cream stack"
                        className="object-contain w-full h-full scale-[1.4]"
                    />
                </div>

                {/* "freshly baked" — IN FRONT of image (z-20), right-shifted */}
                <div className="absolute top-[370px] right-[8%] w-full text-right pointer-events-none z-20">
                    <h2
                        className="font-serif leading-[0.8] tracking-tight text-[#fbf8f1]"
                        style={{ fontSize: "clamp(5rem, 9vw, 11rem)", textShadow: "0 10px 40px rgba(61,79,64,0.8), 0 2px 10px rgba(61,79,64,0.5)" }}
                    >
                        freshly baked
                    </h2>
                </div>

                {/* BEST SELLER badge — z-40 so it surpasses everything */}
                <div className="absolute bottom-[20px] left-[7%] z-40">
                    <div className="relative w-32 h-32 flex items-center justify-center border border-[#fbf8f1]/30 rounded-full bg-[#3d4f40]/20 backdrop-blur-sm">
                        <div
                            className="absolute inset-0 border border-[#fbf8f1]/10 rounded-full animate-[spin_10s_linear_infinite]"
                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath id=\'textPath\' d=\'M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0\' fill=\'none\'/%3E%3Ctext fill=\'%23fbf8f1\' font-size=\'11\' font-family=\'Inter\' letter-spacing=\'5\'%3E%3CtextPath href=\'%23textPath\' startOffset=\'0\'%3E%E2%80%A2 BEST SELLER %E2%80%A2 BEST SELLER %E2%80%A2%3C/textPath%3E%3C/text%3E%3C/svg%3E")' }}
                        ></div>
                        <ArrowRight size={20} className="text-[#fbf8f1]/70 rotate-45" />
                    </div>
                </div>

                {/* Right description text block */}
                <div className="absolute top-[220px] right-[5%] w-[240px] z-20">
                    <p className="font-sans text-[13px] leading-relaxed text-[#fbf8f1]/80 mb-6 font-light">
                        A delightful treat that combines the comforting charm of freshly baked cookies with the rich, luxurious and mouthwatering fillings.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 font-sans text-[13px] text-[#fbf8f1] border-b border-[#fbf8f1]/30 pb-1 hover:opacity-70 transition-opacity">
                        Get more details <ArrowRight size={14} className="-rotate-45" />
                    </a>
                </div>

            </div>

        </div>
    );
};

export default Hero;
