import { useState } from "react";

const tabs = ["New", "Bestseller"];

const products = {
    New: [
        {
            id: 1,
            name: "Cookie Ice Cream Sandwich",
            price: "14.99",
            bg: "#c9a87c",
            image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop&crop=center",
            badge: null,
        },
        {
            id: 2,
            name: "Classic Chocolate Chip Cookies",
            price: "9.99",
            bg: "#7a8c6e",
            image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop&crop=center",
            badge: "TRY NOW",
        },
        {
            id: 3,
            name: "Red Velvet Cupcakes",
            price: "12.99",
            bg: "#e8ddd0",
            image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=600&fit=crop&crop=center",
            badge: null,
        },
        {
            id: 4,
            name: "Matcha Cheesecake",
            price: "7.99",
            bg: "#b5845a",
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop&crop=center",
            badge: null,
        },
    ],
    Bestseller: [
        {
            id: 5,
            name: "Matcha Cheesecake",
            price: "7.99",
            bg: "#7a8c6e",
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop&crop=center",
            badge: "TRY NOW",
        },
        {
            id: 6,
            name: "Cookie Ice Cream Sandwich",
            price: "14.99",
            bg: "#e8ddd0",
            image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=600&fit=crop&crop=center",
            badge: null,
        },
        {
            id: 7,
            name: "Red Velvet Cupcakes",
            price: "12.99",
            bg: "#c9a87c",
            image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=600&fit=crop&crop=center",
            badge: null,
        },
        {
            id: 8,
            name: "Classic Chocolate Chip Cookies",
            price: "9.99",
            bg: "#b5845a",
            image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop&crop=center",
            badge: null,
        },
    ],
};

const Products = () => {
    const [activeTab, setActiveTab] = useState("New");

    return (
        <section className="w-full bg-[#fbf8f1] pt-16 pb-20 px-0">
            {/* Section Heading */}
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <div className="flex items-end gap-6">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className="relative text-left group focus:outline-none"
                        >
                            {/* Number label */}
                            <span className="block font-sans text-[11px] tracking-widest text-[#3d4f40]/40 mb-1">
                                0{i + 1}
                            </span>
                            {/* Tab word */}
                            <span
                                className={`block font-serif leading-none transition-colors duration-300 ${activeTab === tab
                                    ? "text-[#5c3d1e]"
                                    : "text-[#3d4f40]/20"
                                    }`}
                                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
                            >
                                {tab}
                            </span>
                            {/* Dot separator between tabs */}
                            {i < tabs.length - 1 && (
                                <span className="absolute right-[-1rem] bottom-2 font-serif text-[2rem] text-[#3d4f40]/20 pointer-events-none">
                                    .
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {products[activeTab].map((product) => (
                    <div
                        key={product.id}
                        className="relative flex flex-col overflow-hidden group cursor-pointer"
                        style={{ backgroundColor: product.bg }}
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-square overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* TRY NOW badge */}
                            {product.badge && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#3d4f40] flex items-center justify-center z-10 shadow-lg">
                                    <span className="font-sans text-[10px] font-semibold tracking-widest text-[#fbf8f1] text-center leading-tight uppercase">
                                        TRY<br />NOW
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="px-5 py-4 bg-[#fbf8f1]">
                            <p className="font-sans text-[13px] text-[#3d4f40]/70 mb-1 truncate">
                                {product.name}
                            </p>
                            <p className="font-serif text-[1.4rem] text-[#3d4f40]">
                                <span className="text-[0.9rem] align-super mr-0.5">₹</span>
                                {product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
