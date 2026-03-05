const menuItems = [
    { num: "01", label: "Classic cookies" },
    { num: "02", label: "Cookie'wich" },
    { num: "03", label: "Fresh breadie-rolls", active: true },
    { num: "04", label: "Bakery snacks" },
    { num: "05", label: "English muffins" },
];

const tickerText = "AT YOUR DOORSTEP  ✳  100% BAKED ITEMS THAT ENSURE ULTIMATE FRESHNESS  ✳  FLAVOURS THAT TRANSPORT YOU TO A REALM BEYOND IMAGINATION  ✳  FRESH ITEMS FROM OUR OVEN  ✳  ";

const Specialties = () => {
    return (
        <section className="w-full bg-[#fbf8f1] pt-20 pb-0 overflow-hidden">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <h2 className="font-serif text-[1.5rem] leading-snug text-[#3d4f40]">
                    Dive deep into Bakerville's<br />signature delights!
                </h2>
                <p className="font-sans text-[13px] leading-relaxed text-[#3d4f40]/55 max-w-[420px]">
                    Dive into a symphony of flavours as we present our Bakerville's signature delights, meticulously crafted to ignite your senses and leave you craving for more.
                </p>
            </div>

            {/* Menu list with floating images */}
            {/* The images use z-0 so text (z-20) always sits on top */}
            <div className="relative w-full max-w-7xl mx-auto px-6 min-h-[420px] md:min-h-[520px] flex flex-col justify-center">

                {/* Left floating image — hugs the left edge, only clips numbers + first ~1–2 chars */}
                <div className="hidden md:block absolute left-0 top-[6%] w-[155px] h-[250px] z-0 rotate-[-3deg] shadow-xl overflow-hidden rounded-sm">
                    <img
                        src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=310&h=500&fit=crop&crop=center"
                        alt="Fresh bread being sliced"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right floating image — stays far right, no text overlap */}
                <div className="hidden md:block absolute right-0 top-[0%] w-[220px] h-[300px] z-0 rotate-[2deg] shadow-xl overflow-hidden rounded-sm">
                    <img
                        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=440&h=600&fit=crop&crop=center"
                        alt="Artisan bread loaf"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Stacked menu items — z-20 keeps text above both images */}
                <div className="relative z-20">
                    {menuItems.map((item) => (
                        <div
                            key={item.num}
                            className="flex items-baseline gap-4 group cursor-pointer select-none"
                        >
                            <span className="font-sans text-[11px] tracking-widest text-[#3d4f40]/30 w-6 shrink-0">
                                {item.num}
                            </span>
                            <h3
                                className={`font-serif leading-[1.1] tracking-tight transition-colors duration-200 ${item.active
                                        ? "text-[#5c3d1e]"
                                        : "text-[#3d4f40]/15 group-hover:text-[#3d4f40]/40"
                                    }`}
                                style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
                            >
                                {item.label}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scrolling ticker */}
            <div className="w-full bg-[#3d4f40] mt-12 py-3 overflow-hidden whitespace-nowrap">
                <div
                    className="inline-flex"
                    style={{ animation: "marquee 28s linear infinite" }}
                >
                    {[...Array(3)].map((_, i) => (
                        <span key={i} className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#fbf8f1]/80">
                            {tickerText}
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
            `}</style>
        </section>
    );
};

export default Specialties;
