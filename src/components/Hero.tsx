import { ChevronDown, Target, Film, BookOpen } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black scan-line">
      {/* Background Video */}
      <iframe
        src="https://player.vimeo.com/video/1154606484?h=56707d6d22&autoplay=1&loop=1&muted=1&background=1"
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen"
        style={{ pointerEvents: 'none' }}
      ></iframe>

      {/* Technical grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Corner brackets for tactical UI */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-brand-blue/40"></div>
      <div className="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-brand-blue/40"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-brand-blue/40"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-brand-blue/40"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-mono tracking-tight whitespace-nowrap">
                HORSEHEADS MEDIA
              </h1>
              <div className="flex items-center gap-4">
                <p className="text-base text-white font-mono uppercase tracking-wider">
                  TECHNICAL // EDUCATIONAL // VIDEO PRODUCTION
                </p>
                <img 
                  src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/Horseheads%20Media%20horsejet%20only.png"
                  alt="Horseheads Media Logo"
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Technical Grid Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-brand-blue/30 bg-brand-blue/5 p-4 text-center">
                <Target className="text-white mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-white font-mono">HD</div>
                <div className="text-xs text-white font-mono uppercase">Video Production</div>
              </div>
              <div className="border border-brand-blue/30 bg-brand-blue/5 p-4 text-center">
                <Film className="text-white mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-white font-mono">3D</div>
                <div className="text-xs text-white font-mono uppercase">Graphics</div>
              </div>
              <div className="border border-brand-blue/30 bg-brand-blue/5 p-4 text-center">
                <BookOpen className="text-white mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-white font-mono">EDU</div>
                <div className="text-xs text-white font-mono uppercase">Content</div>
              </div>
            </div>

            <button
              onClick={scrollToServices}
              className="border-2 border-brand-blue bg-brand-blue text-white px-8 py-4 font-mono uppercase tracking-wider hover:bg-brand-blue/80 transition-all font-bold"
            >
              [ DEPLOY SERVICES ]
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-brand-blue animate-bounce cursor-pointer"
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
