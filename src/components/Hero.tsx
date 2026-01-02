import { Play, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/Gemini_Generated_Image_1t7mc91t7mc91t7m.png')`,
          opacity: 0.35
        }}
      ></div>

      {/* Blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80"></div>

      {/* Cyan tint overlay */}
      <div className="absolute inset-0 bg-cyan-500/10"></div>

      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-shift 20s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-50 animate-pulse"></div>
            <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Horseheads Media
            </h1>
          </div>
        </div>

        <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light">
          High-End Video Production & Motion Graphics
        </p>
        <p className="text-lg sm:text-xl text-cyan-400 mb-12 font-medium">
          Serving Upstate NY & PA
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={scrollToServices}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Explore Our Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button className="group flex items-center gap-2 px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400/10 transition-all">
            <Play size={20} className="group-hover:scale-110 transition-transform" />
            Watch Our Work
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4K+</div>
            <div className="text-sm text-gray-400">Ultra HD Production</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3D</div>
            <div className="text-sm text-gray-400">Motion Graphics</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-cyan-400 mb-2">Green Screen</div>
            <div className="text-sm text-gray-400">Studio & Mobile</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-cyan-400 mb-2">Full Service</div>
            <div className="text-sm text-gray-400">Production Firm</div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce cursor-pointer"
      >
        <ChevronDown size={32} />
      </button>

      <style>{`
        @keyframes grid-shift {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </section>
  );
}
