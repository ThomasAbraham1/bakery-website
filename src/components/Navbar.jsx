import { ShoppingBag, User } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-full px-12 py-6 text-[15px] font-sans text-[#fbf8f1] z-50 relative border-b border-[#fbf8f1]/10">
            {/* Logo */}
            <div className="font-serif text-2xl tracking-wide">
                <a href="#" className="hover:opacity-70 transition-opacity">Redmoon Bakery</a>
            </div>

            {/* Links */}
            <div className="hidden lg:flex items-center gap-8 text-[13.5px] font-medium tracking-wide">
                <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Our Story</a>
                <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Baker catalog</a>
                <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Shop now</a>
                <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Bulk orders</a>
                <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">#RedmoonBakery</a>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6">
                <a href="#" aria-label="Cart" className="hover:opacity-70 transition-opacity">
                    <ShoppingBag size={20} className="stroke-[1.5]" />
                </a>
                <a href="#" aria-label="User profile" className="hover:opacity-70 transition-opacity">
                    <User size={20} className="stroke-[1.5]" />
                </a>
            </div>

            {/* Very subtile starburst/star behind nav is possible, we can just omit or add an absolute svg char somewhere. The image has a little star beneath the menu. Let's add it. */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[#fbf8f1]/50 text-[10px] pointer-events-none">
                ✦
            </div>
        </nav>
    );
};

export default Navbar;
