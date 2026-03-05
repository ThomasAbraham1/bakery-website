import { ArrowRight } from "lucide-react";

const footerLinks = {
    "Need help?": ["Customer care", "Store Locator", "B2B Login"],
    "Navigation": ["Our Story", "Baker catalog", "Shop now", "Bulk orders", "Gift solution"],
    "Social": ["Instagram", "Twitter", "Facebook"],
};

const NewsletterBadge = () => (
    <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0">
        <svg
            className="absolute inset-0 animate-[spin_12s_linear_infinite]"
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
        >
            <defs>
                <path
                    id="newsletterCircle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                />
            </defs>
            <text fill="#3d4f40" fontSize="8.5" fontFamily="Inter, sans-serif" letterSpacing="5">
                <textPath href="#newsletterCircle">• NEWSLETTER • NEWSLETTER •</textPath>
            </text>
        </svg>
        <div className="w-9 h-9 rounded-full border border-[#3d4f40]/20 flex items-center justify-center z-10">
            <ArrowRight size={13} className="text-[#3d4f40]/60 rotate-45" />
        </div>
    </div>
);

const Footer = () => {
    return (
        <footer className="w-full bg-[#fbf8f1]">

            {/* ─── Stay tuned ─── */}
            <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-12 md:pb-16">

                {/* Heading — tighter min on mobile */}
                <h2
                    className="font-serif text-[#5c3d1e] leading-[1.0] tracking-tight mb-8 md:mb-12"
                    style={{ fontSize: "clamp(2rem, 8vw, 7rem)" }}
                >
                    Stay tuned with us
                    <span className="block text-right">@bakerville.eu</span>
                </h2>

                {/* Description + badge row */}
                <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                        <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-[#3d4f40]/60 max-w-[400px] mb-4 md:mb-6">
                            Whether you're hosting a special event, catering to a large gathering, or simply want to stock up on your favorite treats, we've got you covered.
                        </p>
                        <a
                            href="tel:+919876543210"
                            className="inline-flex items-center gap-2 font-sans text-[13px] text-[#3d4f40] border-b border-[#3d4f40]/30 pb-0.5 hover:opacity-60 transition-opacity"
                        >
                            Call us at +91 98765 43210
                            <ArrowRight size={12} className="-rotate-45" />
                        </a>
                    </div>
                    {/* Badge always visible, floated right */}
                    <NewsletterBadge />
                </div>
            </div>

            {/* ─── Divider ─── */}
            <div className="relative border-t border-[#3d4f40]/10 mx-6">
                <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-[#3d4f40]/30 text-lg bg-[#fbf8f1] px-3">✳</span>
            </div>

            {/* ─── Footer body ─── */}
            <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">

                {/* Brand row — horizontal on mobile, part of grid on desktop */}
                <div className="flex items-start justify-between mb-8 md:hidden">
                    <div>
                        <h3 className="font-serif text-[1.8rem] text-[#3d4f40] leading-none mb-1">Bakerville</h3>
                        <p className="font-sans text-[11px] text-[#3d4f40]/45 leading-relaxed max-w-[180px]">
                            A haven for connoisseurs of fine flavors
                        </p>
                    </div>
                    {/* Compact explore link on mobile */}
                    <a
                        href="#"
                        className="inline-flex items-center gap-1 font-sans text-[12px] text-[#3d4f40]/50 border-b border-[#3d4f40]/20 pb-0.5 hover:opacity-70 transition-opacity mt-1"
                    >
                        Explore <ArrowRight size={11} className="-rotate-45" />
                    </a>
                </div>

                {/* Link columns — 3 cols on mobile, 4-col grid on desktop */}
                <div className="grid grid-cols-3 md:grid-cols-[1fr_auto_auto_auto] gap-4 md:gap-20">

                    {/* Brand col — hidden on mobile (shown above), visible on desktop */}
                    <div className="hidden md:block">
                        <h3 className="font-serif text-[2.2rem] text-[#3d4f40] leading-none mb-3">Bakerville</h3>
                        <p className="font-sans text-[12px] text-[#3d4f40]/45 leading-relaxed mb-8 max-w-[220px]">
                            A haven for connoisseurs of fine flavors and culinary heritage
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center gap-2 w-[130px] h-[130px] rounded-full border border-[#3d4f40]/20 hover:bg-[#3d4f40]/5 transition-colors group"
                        >
                            <div className="flex flex-col items-center">
                                <span className="font-sans text-[11px] text-[#3d4f40]/60 tracking-wide leading-tight text-center">
                                    Explore<br />about us
                                </span>
                                <ArrowRight size={14} className="text-[#3d4f40]/40 mt-2 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </a>
                    </div>

                    {/* 3 link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-serif text-[0.85rem] md:text-[1rem] text-[#3d4f40] mb-3 md:mb-5">
                                {category}
                            </h4>
                            <ul className="space-y-2 md:space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="font-sans text-[11px] md:text-[13px] text-[#3d4f40]/50 hover:text-[#3d4f40] transition-colors leading-snug block"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── Bottom bar ─── */}
            <div className="border-t border-[#3d4f40]/10 mx-6 py-4 flex flex-row items-center justify-between gap-3">
                <a href="#" className="font-sans text-[11px] text-[#3d4f40]/40 hover:text-[#3d4f40]/70 transition-colors">
                    Cookie policy
                </a>
                <p className="font-sans text-[11px] text-[#3d4f40]/40">
                    © 2024. All Rights Reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;
