import { Play, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const verticalVideos = [
    {
      title: 'MOBILE VIDEO CONTENT',
      category: 'VERTICAL VIDEO',
      description: 'Mobile-optimized vertical video for social media',
      gradient: 'from-purple-500 to-pink-600',
      videoUrl: 'https://vimeo.com/1121992111?fl=tl&fe=ec',
      isVertical: true
    },
    {
      title: 'VERTICAL CONTENT',
      category: 'VERTICAL VIDEO',
      description: 'Engaging vertical format for mobile platforms',
      gradient: 'from-purple-500 to-pink-600',
      videoUrl: 'https://vimeo.com/1157726681/16e25e1a62?share=copy&fl=sv&fe=ci',
      isVertical: true
    }
  ];

  const gridVideos = [
    {
      title: 'CORPORATE TRAINING VIDEO',
      category: 'MOTION GRAPHICS',
      description: 'Military infographic training video',
      gradient: 'from-rose-500 to-orange-600',
      videoUrl: 'https://vimeo.com/1121987779?fl=tl&fe=ec'
    },
    {
      title: 'AUTOMOTIVE COMMERCIAL',
      category: 'VIDEO PRODUCTION',
      description: 'Full commercial production with co-op compliance',
      gradient: 'from-brand-blue to-blue-600',
      videoUrl: 'https://vimeo.com/1118962928?fl=tl&fe=ec'
    },
    {
      title: 'PRODUCT ASSEMBLY GUIDE',
      category: '3D ANIMATION',
      description: 'Technical explainer with detailed 3D product visualization',
      gradient: 'from-blue-500 to-indigo-600',
      videoUrl: 'https://vimeo.com/1118951365?fl=tl&fe=ec'
    }
  ];

  const brandShowcase = {
    title: 'BRAND LAUNCH CAMPAIGN',
    category: 'MOTION GRAPHICS',
    description: 'Complete motion graphics package for brand introduction',
    gradient: 'from-indigo-500 to-purple-600',
    videoUrl: 'https://vimeo.com/1118952047?fl=tl&fe=ec',
    isShowcase: true
  };

  const droneShowcase = {
    title: 'AERIAL DRONE SERVICES',
    category: 'DRONE FOOTAGE',
    description: 'Professional aerial cinematography for corporate and business video productions',
    gradient: 'from-pink-500 to-rose-600',
    videoUrl: 'https://vimeo.com/1131799162?share=copy&fl=sv&fe=ci',
    isShowcase: true
  };

  const webDesignShowcase = {
    title: 'WEB DESIGN & DEVELOPMENT',
    category: 'WEB DEVELOPMENT',
    description: 'Custom web applications and digital platforms designed for modern businesses',
    gradient: 'from-blue-500 to-cyan-500',
    isShowcase: true
  };

  const greenScreenShowcase = {
    title: 'GREEN SCREEN SERVICES',
    category: 'VIDEO PRODUCTION',
    description: 'Professional green screen production and keying for corporate presentations, training videos, and digital content',
    gradient: 'from-green-500 to-emerald-600',
    videoUrl: 'https://vimeo.com/1129924675/068cc42b28?fl=ip&fe=ec',
    isShowcase: true
  };

  return (
    <section id="portfolio" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-mono uppercase tracking-wider">
            [ OUR PORTFOLIO ]
          </h2>
          <p className="text-white/60 font-mono uppercase text-sm tracking-wider">
            SHOWCASING OUR RECENT WORK ACROSS VIDEO PRODUCTION, MOTION GRAPHICS, AND DIGITAL DESIGN
          </p>
        </div>

        {/* Top Row: Vertical Video + 3 Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Left Column: Vertical Videos */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-6 h-full">
              {verticalVideos.map((verticalVideo, index) => (
                <div key={index} className="group relative bg-slate-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <iframe
                      src={`https://player.vimeo.com/video/${verticalVideo.videoUrl.match(/vimeo\.com\/(\d+)/)?.[1]}?h=${verticalVideo.videoUrl.match(/\/([a-z0-9]+)\?/)?.[1] || ''}&title=0&byline=0&portrait=0`}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                        {verticalVideo.category}
                      </span>
                      <a
                        href={verticalVideo.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 group-hover:text-brand-blue transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-blue transition-colors font-mono uppercase tracking-wider">
                      {verticalVideo.title}
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed font-mono">
                      {verticalVideo.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Videos Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-6 h-full">
              {gridVideos.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <iframe
                      src={`https://player.vimeo.com/video/${item.videoUrl.match(/vimeo\.com\/(\d+)/)?.[1]}?h=${item.videoUrl.match(/fl=([^&]+)/)?.[1] || ''}&title=0&byline=0&portrait=0`}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                        {item.category}
                      </span>
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white group-hover:text-brand-blue transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-blue transition-colors font-mono uppercase tracking-wider">
                      {item.title}
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed font-mono">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row: Brand Showcase - Full Width */}
        <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-1 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors font-mono uppercase tracking-wider">
                {brandShowcase.title}
              </h3>

              <p className="text-white/60 text-lg leading-relaxed mb-6 font-mono">
                {brandShowcase.description}
              </p>

              <a
                href={brandShowcase.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-brand-blue bg-brand-blue text-white px-8 py-4 font-mono uppercase tracking-wider hover:bg-brand-blue/80 transition-all font-bold"
              >
                [ View Campaign ]
              </a>
            </div>

            {/* Right: Video + Images Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative aspect-video overflow-hidden rounded-lg">
                <iframe
                  src={`https://player.vimeo.com/video/${brandShowcase.videoUrl.match(/vimeo\.com\/(\d+)/)?.[1]}?h=${brandShowcase.videoUrl.match(/fl=([^&]+)/)?.[1] || ''}&title=0&byline=0&portrait=0`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/dandy1.JPG" alt="Brand launch screens" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/dandy2.JPG" alt="Brand signup interface" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </div>

        {/* Third Row: Drone Services Showcase - Full Width */}
        <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-1 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors font-mono uppercase tracking-wider">
                {droneShowcase.title}
              </h3>

              <p className="text-white/60 text-lg leading-relaxed mb-6 font-mono">
                {droneShowcase.description}
              </p>

              <a
                href={droneShowcase.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-brand-blue bg-brand-blue text-white px-8 py-4 font-mono uppercase tracking-wider hover:bg-brand-blue/80 transition-all font-bold"
              >
                [ View Full Reel ]
              </a>
            </div>

            {/* Right: Video + Images Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative aspect-video overflow-hidden rounded-lg">
                <iframe
                  src={`https://player.vimeo.com/video/${droneShowcase.videoUrl.match(/vimeo\.com\/(\d+)/)?.[1]}?h=${droneShowcase.videoUrl.match(/fl=([^&]+)/)?.[1] || ''}&title=0&byline=0&portrait=0`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/drone1.JPG" alt="Drone aerial boathouse" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/dron2.JPG" alt="Drone cityscape sunset" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </div>

        {/* Third Row: Green Screen Showcase - Full Width */}
        <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-1 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors font-mono uppercase tracking-wider">
                {greenScreenShowcase.title}
              </h3>

              <p className="text-white/60 text-lg leading-relaxed mb-6 font-mono">
                {greenScreenShowcase.description}
              </p>

              <a
                href={greenScreenShowcase.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-brand-blue bg-brand-blue text-white px-8 py-4 font-mono uppercase tracking-wider hover:bg-brand-blue/80 transition-all font-bold"
              >
                [ View Reel ]
              </a>
            </div>

            {/* Right: Video + Images Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative aspect-video overflow-hidden rounded-lg">
                <iframe
                  src={`https://player.vimeo.com/video/${greenScreenShowcase.videoUrl.match(/vimeo\.com\/(\d+)/)?.[1]}?h=${greenScreenShowcase.videoUrl.match(/\/([a-z0-9]+)\?/)?.[1] || ''}&title=0&byline=0&portrait=0`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/Capture%202.JPG" alt="Green screen news broadcast" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/greenscreen5.JPG" alt="Green screen corporate presenter" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </div>

        {/* Fourth Row: Web Design Showcase - Full Width */}
        <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Left: Images Grid */}
            <div className="grid grid-cols-2 gap-3">
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/tskmgr3.JPG" alt="Web design light theme" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/tskmgr4.JPG" alt="Web application interface" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/tskmgr1.JPG" alt="Task management app" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/tskmgr2.JPG" alt="Project dashboard" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors font-mono uppercase tracking-wider">
                {webDesignShowcase.title}
              </h3>

              <p className="text-white/60 text-lg leading-relaxed mb-6 font-mono">
                {webDesignShowcase.description}
              </p>

              <a
                href="https://faskr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-brand-blue bg-brand-blue text-white px-8 py-4 font-mono uppercase tracking-wider hover:bg-brand-blue/80 transition-all font-bold"
              >
                [ Try Faskr App ]
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </div>

      </div>
    </section>
  );
}
