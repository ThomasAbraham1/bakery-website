import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Specialties from './components/Specialties';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative font-sans break-words bg-[#fbf8f1] text-[#fbf8f1] overflow-x-hidden w-full">

      {/* Hero Section Banner (Green) — overflow-hidden clips background shapes to this zone only */}
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-[#3d4f40] z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Subtle aesthetic organic background shapes — vw units scale with screen width */}
          <div className="absolute bottom-[-10%] right-[5%] w-[80vw] h-[50vw] lg:w-[600px] lg:h-[400px] bg-[#2d3a2e] rounded-[100px] rotate-[15deg] blur-[2px] opacity-20 pointer-events-none"></div>
          <div className="absolute top-[10%] left-[-5%] w-[55vw] h-[65vw] lg:w-[400px] lg:h-[500px] bg-[#2d3a2e] rounded-[120px] rotate-[-25deg] blur-[2px] opacity-20 pointer-events-none"></div>
        </div>
      </div>

      {/* Simple geometric grids as a decorative element (Background Grid) */}
      <div className="absolute inset-x-0 top-0 h-[800px] w-full max-w-7xl mx-auto flex z-10 opacity-[0.03] pointer-events-none">
        {[...Array.from({ length: 12 })].map((_, i) => (
          <div key={i} className="flex-1 border-r border-black/50 last:border-r-0"></div>
        ))}
      </div>

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main content — normal page flow, scrollable */}
      <main className="relative z-40 w-full">

        {/* Hero — fills viewport on desktop, stacks on mobile */}
        <Hero />

        {/* Features bar */}
        <Features />

        {/* Products grid */}
        <Products />

        {/* Specialties / menu list + scrolling ticker */}
        <Specialties />

        {/* Featured testimonial */}
        <Testimonial />

        {/* Footer */}
        <Footer />

      </main>

    </div>
  );
}

export default App;
