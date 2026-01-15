import { Video, Layers, BookOpen, Globe, Target, Clapperboard } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'TACTICAL VIDEO PRODUCTION',
      description: 'Technical documentation. Training materials. Mission-critical content.',
    },
    {
      icon: Layers,
      title: 'MOTION GRAPHICS // 3D',
      description: 'Technical visualization. Product breakdowns. Educational animation.',
    },
    {
      icon: BookOpen,
      title: 'EDUCATIONAL CONTENT',
      description: 'How-to series. Technical training. Knowledge transfer.',
    },
    {
      icon: Clapperboard,
      title: 'POST-PRODUCTION',
      description: 'Precision editing. Color grading. Audio mastering.',
    },
    {
      icon: Globe,
      title: 'WEB DEPLOYMENT',
      description: 'Digital presence. Responsive design. SEO optimization.',
    },
    {
      icon: Target,
      title: 'STRATEGIC BRANDING',
      description: 'Logo design. Brand identity. Market positioning.',
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-grey relative overflow-hidden">
      {/* Technical grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-mono uppercase tracking-wider">
            [ OPERATIONAL CAPABILITIES ]
          </h2>
          <p className="text-white/60 font-mono uppercase text-sm tracking-wider">
            TECHNICAL PRODUCTION // EDUCATIONAL CONTENT // MISSION EXECUTION
          </p>
        </div>

        {/* GIF Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="group relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
            <img 
              src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/military1.gif" 
              alt="Powerful motion graphics and color theory" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-center text-white font-mono uppercase text-sm tracking-wider px-4">
                POWERFUL MOTION GRAPHICS & COLOR THEORY
              </p>
            </div>
          </div>

          <div className="group relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
            <img 
              src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/military2.gif" 
              alt="Modern and retro styles" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-center text-white font-mono uppercase text-sm tracking-wider px-4">
                MODERN & RETRO STYLES
              </p>
            </div>
          </div>

          <div className="group relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
            <img 
              src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/military3.gif" 
              alt="Advanced 3D graphics" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-center text-white font-mono uppercase text-sm tracking-wider px-4">
                ADVANCED 3D GRAPHICS
              </p>
            </div>
          </div>

          <div className="group relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
            <img 
              src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/military4.gif" 
              alt="Connecting the matrix" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-center text-white font-mono uppercase text-sm tracking-wider px-4">
                CONNECTING THE MATRIX
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 border border-brand-blue/40 bg-brand-blue/5">
                      <Icon className="text-white" size={24} />
                    </div>
                    <span className="text-xs text-white font-mono">0{index + 1}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 font-mono uppercase tracking-wider">
                    {service.title}
                  </h3>

                  <p className="text-white/60 text-sm font-mono leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 h-px bg-brand-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Distribution & Reach Section */}
        <div className="mt-16 p-8 border border-brand-blue/30 bg-black">
          <h3 className="text-2xl font-bold text-white mb-6 font-mono uppercase tracking-wider">[ DISTRIBUTION & REACH ]</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-mono uppercase tracking-wider mb-4 text-lg">DIGITAL PLATFORMS</h4>
              <ul className="text-white font-mono space-y-2 text-sm">
                <li>• Samsung TV Plus</li>
                <li>• Hulu</li>
                <li>• Roku</li>
                <li>• YouTube TV</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-mono uppercase tracking-wider mb-4 text-lg">LOCAL BROADCAST</h4>
              <ul className="text-white font-mono space-y-2 text-sm">
                <li>• WETM-TV</li>
                <li>• WENY-TV</li>
                <li>• WYDC-TV</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
