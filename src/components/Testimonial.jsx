import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        productName: "Double Ice-cream\ndeluxe cookie",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&h=600&fit=crop&crop=center",
        quote: "\"The cookie ice cream sandwich is absolutely divine! It reminded me of those special treats my mother used to get us on Sundays. Bakerville has truly outdone themselves.\"",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=faces",
        name: "Priya Sharma",
    },
    {
        productName: "Classic Chocolate\nChip Cookies",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=700&h=600&fit=crop&crop=center",
        quote: "\"Ordered a box for my son's birthday and the whole family finished it in minutes! The chocolate chips are generous and the cookies are perfectly soft. Ekdum mast!\"",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
        name: "Arjun Mehta",
    },
    {
        productName: "Matcha\nCheesecake",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&h=600&fit=crop&crop=center",
        quote: "\"I brought the matcha cheesecake to a family gathering in Delhi and everyone wanted to know where it's from. Not too sweet, very refined. Will definitely order again!\"",
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=faces",
        name: "Ananya Iyer",
    },
];

const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const current = testimonials[index];

    const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

    return (
        <section className="w-full bg-[#fbf8f1] pt-20 pb-24 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">

                {/* Product heading — large centered serif */}
                <h2
                    className="font-serif text-center text-[#5c3d1e] leading-[1.05] tracking-tight mb-10"
                    style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", whiteSpace: "pre-line" }}
                >
                    {current.productName}
                </h2>

                {/* Product image + quote bubble */}
                <div className="relative flex justify-center mb-12">
                    <div className="relative w-full max-w-[560px]">
                        <img
                            src={current.image}
                            alt={current.productName}
                            className="w-full h-[340px] md:h-[420px] object-contain drop-shadow-2xl transition-opacity duration-500"
                        />

                        {/* Quote bubble */}
                        <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                            <span className="font-serif font-bold text-[2.8rem] leading-none text-[#3d4f40] mt-3">{'\u201C'}</span>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col gap-6">

                    {/* Arrows — mobile only (above the quote) */}
                    <div className="flex gap-3 md:hidden">
                        <button onClick={prev} className="w-12 h-12 rounded-full border border-[#3d4f40]/20 flex items-center justify-center hover:bg-[#3d4f40]/5 transition-colors">
                            <ArrowLeft size={16} className="text-[#3d4f40]/60" />
                        </button>
                        <button onClick={next} className="w-12 h-12 rounded-full border border-[#3d4f40]/20 flex items-center justify-center hover:bg-[#3d4f40]/5 transition-colors">
                            <ArrowRight size={16} className="text-[#3d4f40]/60" />
                        </button>
                    </div>

                    {/* Quote row — avatar+text left, arrows right (desktop only) */}
                    <div className="flex items-end justify-between gap-8">
                        <div className="flex flex-col sm:flex-row items-start gap-4 max-w-[520px]">
                            <img
                                src={current.avatar}
                                alt={current.name}
                                className="w-14 h-14 rounded-full object-cover shrink-0 border-2 border-[#fbf8f1] shadow"
                            />
                            <div>
                                <p className="font-sans text-[15px] leading-relaxed text-[#3d4f40] font-medium mb-3">
                                    {current.quote}
                                </p>
                                <p className="font-sans text-[11px] tracking-widest uppercase text-[#3d4f40]/40">
                                    — {current.name}
                                </p>
                            </div>
                        </div>

                        {/* Arrows — desktop only (bottom right) */}
                        <div className="hidden md:flex gap-3 shrink-0">
                            <button onClick={prev} className="w-14 h-14 rounded-full border border-[#3d4f40]/20 flex items-center justify-center hover:bg-[#3d4f40]/5 transition-colors">
                                <ArrowLeft size={16} className="text-[#3d4f40]/60" />
                            </button>
                            <button onClick={next} className="w-14 h-14 rounded-full border border-[#3d4f40]/20 flex items-center justify-center hover:bg-[#3d4f40]/5 transition-colors">
                                <ArrowRight size={16} className="text-[#3d4f40]/60" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Sub description */}
                <p className="font-sans text-[12px] leading-relaxed text-[#3d4f40]/40 max-w-[380px] mt-8">
                    Our customer ranges from school-playing kids to retirees, uniting diverse individuals in the joy of savoring our delicious baked goods.
                </p>

            </div>
        </section>
    );
};

export default Testimonial;
