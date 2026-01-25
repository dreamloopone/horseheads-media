import { ChevronDown, Target, Film, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerWidth / window.innerHeight < 3 / 4);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black scan-line">
      {/* Background Video */}
      <div className="absolute inset-0 video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
        >
          <source 
            src={isPortrait 
              ? "/assets/Background video for Horseheads Media 9-16_1.mp4"
              : "/assets/Background video for Horseheads Media_2_1.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>

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
                <p className="text-base text-white/60 font-mono uppercase tracking-wider">
                  TECHNICAL // EDUCATIONAL // VIDEO PRODUCTION
                </p>
                <img 
                  src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/Horseheads%20Media%20horsejet%20only.png"
                  alt="Horseheads Media Logo"
                  className="h-12 w-auto"
                />
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

        .video-container {
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
