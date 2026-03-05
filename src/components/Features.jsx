const features = [
    {
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 4C10 4 6 10 6 16c0 4 2 7 5 9" />
                <path d="M18 4c8 0 12 6 12 12 0 4-2 7-5 9" />
                <line x1="18" y1="4" x2="18" y2="32" />
                <path d="M12 18c2-3 4-5 6-6" />
                <path d="M24 18c-2-3-4-5-6-6" />
            </svg>
        ),
        title: "Nutrition rich",
        description: "Nutrition-rich delights, crafted to nourish your taste buds.",
    },
    {
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="14" width="20" height="16" rx="2" />
                <path d="M12 14V10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
                <line x1="8" y1="20" x2="28" y2="20" />
                <line x1="13" y1="9" x2="13" y2="5" />
                <line x1="18" y1="9" x2="18" y2="5" />
                <line x1="23" y1="9" x2="23" y2="5" />
            </svg>
        ),
        title: "100% baked",
        description: "Savouring 100% baked items from our oven to your plate.",
    },
    {
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="14" width="20" height="18" rx="2" />
                <path d="M13 14v-2a5 5 0 0 1 10 0v2" />
                <path d="M14 22l2.5 2.5L22 19" />
            </svg>
        ),
        title: "Secure packing",
        description: "Enjoy peace of mind with our secure packing.",
    },
];

const Features = () => {
    return (
        <section className="w-full bg-[#fbf8f1] border-y border-[#3d4f40]/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#3d4f40]/10">
                    {features.map((f, i) => (
                        <div key={i} className="flex items-start gap-5 py-8 px-6 md:px-10">
                            {/* Icon */}
                            <div className="text-[#3d4f40] shrink-0 mt-0.5">
                                {f.icon}
                            </div>
                            {/* Text */}
                            <div>
                                <h3 className="font-serif text-[1.25rem] text-[#3d4f40] mb-1.5 leading-snug">
                                    {f.title}
                                </h3>
                                <p className="font-sans text-[13px] leading-relaxed text-[#3d4f40]/60 max-w-[220px]">
                                    {f.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
