import { Video, Layers, BookOpen, Globe, Target, Clapperboard } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'TACTICAL VIDEO PRODUCTION',
      description: 'Technical documentation and training materials. Mission critical content. Military categories include JSOU, JISR, NET, JMPRC, OPFOR, OPA. Produced for Blackboard LMS delivery and RISE implementation. Tech videos that look like movies and CoD cutscenes. Athletic and aggressive, cutting edge.',
    },
    {
      icon: Layers,
      title: 'MOTION GRAPHICS // 3D // AUDIO',
      description: 'Adobe Creative Suite - After Effects, Premiere. Long-form, short-form. Plugins include Video CoPilot\'s Element, Optical Flares. Blender for 3D rendering. Can process STL/STP files from AutoCAD for video production and 3D animations. Audio production includes synced sound effects and 24-bit resolution.',
    },
    {
      icon: BookOpen,
      title: 'EDUCATIONAL CONTENT',
      description: 'Specializing in producing explainer video content. Excellent for mobile, in-field product assembly. Multi-lingual outputs available. Categories include military (DoD/DoW), construction, and industrial design work.',
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-grey relative overflow-hidden">
      {/* Technical grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-mono uppercase tracking-wider">
            [ MILITARY ]
          </h2>
          <p className="text-white/60 font-mono uppercase text-sm tracking-wider">
            TECHNICAL PRODUCTION // EDUCATIONAL CONTENT // MISSION EXECUTION
          </p>
        </div>

        {/* GIF Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
            <img 
              src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/military1.gif" 
              alt="Powerful motion graphics and color theory" 
              className="w-full aspect-video object-cover"
            />
          </div>

          <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
            <img 
              src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/military2.gif" 
              alt="Modern and retro styles" 
              className="w-full aspect-video object-cover"
            />
          </div>

          <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
            <img 
              src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/military3.gif" 
              alt="Advanced 3D graphics" 
              className="w-full aspect-video object-cover"
            />
          </div>

          <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
            <img 
              src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/military4.gif" 
              alt="Connecting the matrix" 
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>

        {/* Service Card 01 - TACTICAL VIDEO PRODUCTION */}
        <div className="mb-16">
          <div className="group relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 border border-brand-blue/40 bg-brand-blue/5">
                  <Video className="text-white" size={24} />
                </div>
                <span className="text-xs text-white font-mono">01</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 font-mono uppercase tracking-wider">
                TACTICAL VIDEO PRODUCTION
              </h3>

              <p className="text-white/60 text-sm font-mono leading-relaxed">
                Technical documentation and training materials. Mission critical content. Military categories include JSOU, JISR, NET, JMPRC, OPFOR, OPA. Produced for Blackboard LMS delivery and RISE implementation. Tech videos that look like movies and CoD cutscenes. Athletic and aggressive, cutting edge.
              </p>

              <div className="mt-4 h-px bg-brand-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          </div>
        </div>

        {/* Construction Product Technical Explainers */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-mono uppercase tracking-wider">
              [ INDUSTRIAL ]
            </h3>
            <p className="text-white/60 font-mono uppercase text-sm tracking-wider">
              CONSTRUCTION PRODUCTS // INDUSTRIAL VISUALIZATION // TECHNICAL BREAKDOWNS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/asgco1.gif" 
                alt="Construction product technical explainer 1" 
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/asgco2.gif" 
                alt="Construction product technical explainer 2" 
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/asgco3.gif" 
                alt="Construction product technical explainer 3" 
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/asgco4.gif" 
                alt="Construction product technical explainer 4" 
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>

        {/* Service Card 02 - MOTION GRAPHICS // 3D // AUDIO */}
        <div className="mt-16 mb-16">
          <div className="group relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 border border-brand-blue/40 bg-brand-blue/5">
                  <Layers className="text-white" size={24} />
                </div>
                <span className="text-xs text-white font-mono">02</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 font-mono uppercase tracking-wider">
                MOTION GRAPHICS // 3D // AUDIO
              </h3>

              <p className="text-white/60 text-sm font-mono leading-relaxed">
                Adobe Creative Suite - After Effects, Premiere. Long-form, short-form. Plugins include Video CoPilot's Element, Optical Flares. Blender for 3D rendering. Can process STL/STP files from AutoCAD for video production and 3D animations. Audio production includes synced sound effects and 24-bit resolution.
              </p>

              <div className="mt-4 h-px bg-brand-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          </div>
        </div>

        {/* Automotive/Corporate Samples */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-mono uppercase tracking-wider">
              [ AUTOMOTIVE ]
            </h3>
            <p className="text-white/60 font-mono uppercase text-sm tracking-wider">
              COMMERCIAL PRODUCTION // BRAND MESSAGING // CORPORATE IDENTITY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/browndaub512CJDR.gif" 
                alt="Automotive commercial sample 1" 
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/browndaubCJDR.gif" 
                alt="Automotive commercial sample 2" 
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/SpiritCJDR_1.gif" 
                alt="Automotive commercial sample 3" 
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/dandyminimart.gif" 
                alt="Corporate brand sample" 
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>

        {/* Service Card 03 - EDUCATIONAL CONTENT */}
        <div className="mt-16 mb-16">
          <div className="group relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 border border-brand-blue/40 bg-brand-blue/5">
                  <BookOpen className="text-white" size={24} />
                </div>
                <span className="text-xs text-white font-mono">03</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 font-mono uppercase tracking-wider">
                EDUCATIONAL CONTENT
              </h3>

              <p className="text-white/60 text-sm font-mono leading-relaxed">
                Specializing in producing explainer video content. Excellent for mobile, in-field product assembly. Multi-lingual outputs available. Categories include military (DoD/DoW), construction, and industrial design work.
              </p>

              <div className="mt-4 h-px bg-brand-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          </div>
        </div>

        {/* Video Production Samples */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-mono uppercase tracking-wider">
              [ VIDEO PRODUCTION ]
            </h3>
            <p className="text-white/60 font-mono uppercase text-sm tracking-wider">
              CINEMATOGRAPHY // VISUAL STORYTELLING // PRODUCTION EXCELLENCE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/videoprod5.gif" 
                alt="Video production sample 1" 
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/drone1.gif" 
                alt="Video production sample 2" 
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/videoprod3.gif" 
                alt="Video production sample 3" 
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="relative bg-black border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 overflow-hidden rounded-lg">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/GIFS%20for%20Horseheads%20Media/videoprod4.gif" 
                alt="Video production sample 4" 
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>

        {/* Distribution & Reach Section */}
        <div className="mt-16 p-8 border border-brand-blue/30 bg-black">
          <h3 className="text-2xl font-bold text-white mb-6 font-mono uppercase tracking-wider text-center">[ DISTRIBUTION ]</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-white font-mono uppercase tracking-wider mb-4 text-lg">DIGITAL PLATFORMS</h4>
              <ul className="text-white font-mono space-y-2 text-sm">
                <li>• Samsung TV Plus</li>
                <li>• Hulu</li>
                <li>• Roku</li>
                <li>• YouTube TV</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-white font-mono uppercase tracking-wider mb-4 text-lg">LOCAL BROADCAST</h4>
              <ul className="text-white font-mono space-y-2 text-sm">
                <li>• WETM-TV</li>
                <li>• WENY-TV</li>
                <li>• WYDC-TV</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-white font-mono uppercase tracking-wider mb-4 text-lg">LOCAL RADIO</h4>
              <ul className="text-white font-mono space-y-2 text-sm">
                <li>• 94 ROCK</li>
                <li>• WOKN</li>
                <li>• WAVR</li>
                <li>• WLNL</li>
                <li>• WNKI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}