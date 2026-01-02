import { Video, Palette, Globe, Search, Handshake, ExternalLink } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Commercial Video Production',
      description: 'Full-service commercial production from concept to delivery. High-end video production with 4K capabilities and professional-grade equipment.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Motion Graphics & 3D Design',
      description: 'Dynamic motion graphics and 3D animation for commercials, explainer videos, and brand content. Technical how-to videos with detailed product visualization.',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Modern, responsive websites that capture your brand identity and engage your audience across all devices.',
      gradient: 'from-indigo-500 to-purple-600',
      link: 'https://glyphos-task-manager.netlify.app/',
      isShowcase: true
    },
    {
      icon: Palette,
      title: 'Logo Design & Branding',
      description: 'Create memorable brand identities with custom logo design and comprehensive branding solutions.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Search,
      title: 'SEO Research & Placement',
      description: 'Strategic SEO services to improve your online visibility and drive organic traffic to your business.',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: Handshake,
      title: 'Sponsorships & Co-op',
      description: 'Automotive co-op compliance expertise and sponsorship program management for dealerships and manufacturers.',
      gradient: 'from-rose-500 to-orange-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital design and video production solutions for businesses throughout the Horseheads region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            if (service.isShowcase) {
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 md:col-span-2"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform`}>
                          <Icon className="text-white" size={28} />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
                      >
                        Try It Now
                        <ExternalLink size={18} />
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-2 p-4 bg-slate-950/50">
                      <img src="/src/assets/tskmgr1.JPG" alt="Task Manager Main View" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform" />
                      <img src="/src/assets/tskmgr2.JPG" alt="Task Manager Calendar" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform" />
                      <img src="/src/assets/tskmgr3.JPG" alt="Task Manager Detail" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform" />
                      <img src="/src/assets/tskmgr4.JPG" alt="Task Manager Board" className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform" />
                    </div>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  {service.link && (
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 group-hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
