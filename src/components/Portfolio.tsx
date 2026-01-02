import { Play, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const verticalVideo = {
    title: 'Mobile Video Content',
    category: 'Vertical Video',
    description: 'Mobile-optimized vertical video for social media',
    gradient: 'from-purple-500 to-pink-600',
    videoUrl: 'https://vimeo.com/1121992111?fl=tl&fe=ec',
    isVertical: true
  };

  const gridVideos = [
    {
      title: 'Automotive Commercial',
      category: 'Video Production',
      description: 'Full commercial production with co-op compliance',
      gradient: 'from-cyan-500 to-blue-600',
      videoUrl: 'https://vimeo.com/1118962928?fl=tl&fe=ec'
    },
    {
      title: 'Product Assembly Guide',
      category: '3D Animation',
      description: 'Technical explainer with detailed 3D product visualization',
      gradient: 'from-blue-500 to-indigo-600',
      videoUrl: 'https://vimeo.com/1118951365?fl=tl&fe=ec'
    },
    {
      title: 'Corporate Training Video',
      category: 'Motion Graphics',
      description: 'Military infographic training video',
      gradient: 'from-rose-500 to-orange-600',
      videoUrl: 'https://vimeo.com/1121987779?fl=tl&fe=ec'
    }
  ];

  const brandShowcase = {
    title: 'Brand Launch Campaign',
    category: 'Motion Graphics',
    description: 'Complete motion graphics package for brand introduction',
    gradient: 'from-indigo-500 to-purple-600',
    videoUrl: 'https://vimeo.com/1118952047?fl=tl&fe=ec',
    isShowcase: true
  };

  const droneShowcase = {
    title: 'Aerial Drone Services',
    category: 'Drone Footage',
    description: 'Professional aerial cinematography for corporate and business video productions',
    gradient: 'from-pink-500 to-rose-600',
    videoUrl: 'https://vimeo.com/1131799162?share=copy&fl=sv&fe=ci',
    isShowcase: true
  };

  const webDesignShowcase = {
    title: 'Web Design & Development',
    category: 'Web Development',
    description: 'Custom web applications and digital platforms designed for modern businesses',
    gradient: 'from-blue-500 to-cyan-500',
    isShowcase: true
  };

  const greenScreenShowcase = {
    title: 'Green Screen Services',
    category: 'Video Production',
    description: 'Professional green screen production and keying for corporate presentations, training videos, and digital content',
    gradient: 'from-green-500 to-emerald-600',
    videoUrl: 'https://vimeo.com/1129924675/068cc42b28?fl=ip&fe=ec',
    isShowcase: true
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our recent work across video production, motion graphics, and digital design
          </p>
        </div>

        {/* Top Row: Vertical Video + 3 Videos Grid + Brand Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Left Column: Vertical Video */}
          <div className="lg:col-span-3">
            <div className="group relative bg-slate-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="relative aspect-[9/16] overflow-hidden">
                <iframe
                  src={`https://player.vimeo.com/video/${verticalVideo.videoUrl.match(/vimeo\.com\/(\d+)/)?.[1]}?h=${verticalVideo.videoUrl.match(/fl=([^&]+)/)?.[1] || ''}&title=0&byline=0&portrait=0`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                    {verticalVideo.category}
                  </span>
                  <a
                    href={verticalVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 group-hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {verticalVideo.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {verticalVideo.description}
                </p>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${verticalVideo.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
            </div>
          </div>

          {/* Middle Column: 3 Videos Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {gridVideos.map((item, index) => (
                <div
                  key={index}
                  className={`group relative bg-slate-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 ${index === 2 ? 'md:col-span-2' : ''}`}
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

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                        {item.category}
                      </span>
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 group-hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Brand Showcase */}
          <div className="lg:col-span-4">
            <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 h-full">
              <div className="flex flex-col h-full">
                <div className="p-6 flex-shrink-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${brandShowcase.gradient} group-hover:scale-110 transition-transform`}>
                      <Play className="text-white" size={24} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {brandShowcase.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-4">
                    {brandShowcase.description}
                  </p>

                  <a
                    href={brandShowcase.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
                  >
                    View Campaign
                    <ExternalLink size={18} />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2 p-4 bg-slate-950/50 flex-grow">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <iframe
                      src={`https://player.vimeo.com/video/${brandShowcase.videoUrl.match(/vimeo\.com\/(\d+)/)?.[1]}?h=${brandShowcase.videoUrl.match(/fl=([^&]+)/)?.[1] || ''}&title=0&byline=0&portrait=0`}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/dandy1.JPG" alt="Brand launch screens" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform" />
                  <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/dandy2.JPG" alt="Brand signup interface" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform" />
                  <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/dandy3.JPG" alt="Brand rewards card" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform" />
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${brandShowcase.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
            </div>
          </div>
        </div>

        {/* Middle Row: Drone Services Showcase - Full Width */}
        <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${droneShowcase.gradient} group-hover:scale-110 transition-transform`}>
                  <Play className="text-white" size={28} />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {droneShowcase.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {droneShowcase.description}
              </p>

              <a
                href={droneShowcase.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 self-start"
              >
                View Full Reel
                <ExternalLink size={20} />
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

          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${droneShowcase.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
        </div>

        {/* Third Row: Green Screen Showcase - Full Width */}
        <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${greenScreenShowcase.gradient} group-hover:scale-110 transition-transform`}>
                  <Play className="text-white" size={28} />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {greenScreenShowcase.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {greenScreenShowcase.description}
              </p>

              <a
                href={greenScreenShowcase.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105 self-start"
              >
                View Reel
                <ExternalLink size={20} />
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

          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${greenScreenShowcase.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
        </div>

        {/* Fourth Row: Web Design Showcase - Full Width */}
        <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Left: Images Grid */}
            <div className="grid grid-cols-2 gap-3">
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/dandy4.JPG" alt="Web design light theme" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/drone3.JPG" alt="Web application interface" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/tskmgr1.JPG" alt="Task management app" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
              <img src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/tskmgr2.JPG" alt="Project dashboard" className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform" />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${webDesignShowcase.gradient} group-hover:scale-110 transition-transform`}>
                  <ExternalLink className="text-white" size={28} />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {webDesignShowcase.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {webDesignShowcase.description}
              </p>
            </div>
          </div>

          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${webDesignShowcase.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
        </div>

      </div>
    </section>
  );
}
