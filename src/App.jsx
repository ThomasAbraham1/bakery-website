import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden relative font-sans break-words bg-[#fbf8f1] text-[#fbf8f1] overflow-x-hidden w-full flex-col lg:flex lg:flex-col">

      {/* Hero Section Banner (Green) — overflow-hidden clips background shapes to this zone only */}
      {/* TEACH: min-h instead of h means 'at least this tall but can grow'.
          On mobile the stacked layout is taller than 85vh so we need it to grow. */}
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-[#3d4f40] z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Subtle aesthetic organic background shapes — vw units scale with screen width */}
          <div className="absolute bottom-[-10%] right-[5%] w-[80vw] h-[50vw] lg:w-[600px] lg:h-[400px] bg-[#2d3a2e] rounded-[100px] rotate-[15deg] blur-[2px] opacity-20 pointer-events-none"></div>
          <div className="absolute top-[10%] left-[-5%] w-[55vw] h-[65vw] lg:w-[400px] lg:h-[500px] bg-[#2d3a2e] rounded-[120px] rotate-[-25deg] blur-[2px] opacity-20 pointer-events-none"></div>
        </div>
      </div>

      {/* Simple geometric grids as a decorative element (Background Grid) */}
      <div className="absolute inset-x-0 top-0 h-[800px] w-full max-w-7xl mx-auto flex z-10 opacity-[0.03]">
        {[...Array.from({ length: 12 })].map((_, i) => (
          <div key={i} className="flex-1 border-r border-black/50 last:border-r-0"></div>
        ))}
      </div>
      <div className="-inset-y-0 absolute w-full inset-x-0 max-w-[1440px] flex-col z-10 opacity-[0.03]">
        {[...Array.from({ length: 12 })].map((_, i) => (
          <div key={`h-${i}`} className="w-full h-24 border-b border-black/50"></div>
        ))}
      </div>

      <div className="relative z-50">
        <Navbar />
      </div>

      <main className="w-full flex justify-center mt-2 lg:mt-0 lg:flex-1 z-40 relative">
        <div className="max-w-[1440px] w-full relative h-full">
          <Hero />
        </div>
      </main>

    </div>
  );
}

export default App;
