import { Film, Monitor, Boxes, Camera, Sparkles, Layers } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      icon: Film,
      title: 'Green Screen Technology',
      description: 'State-of-the-art green screen capabilities available both in-studio and mobile. Create limitless environments and professional compositions for any production.',
      features: ['In-Studio Setup', 'Mobile Production', 'Professional Lighting', 'Real-time Preview']
    },
    {
      icon: Boxes,
      title: '3D Design & Animation',
      description: 'Advanced 3D modeling and animation for product visualization, technical explainers, and commercial applications.',
      features: ['Product Visualization', 'Technical Explainers', 'Assembly Instructions', 'Photo-realistic Rendering']
    },
    {
      icon: Layers,
      title: 'Motion Graphics Mastery',
      description: 'Professional motion graphics that bring your brand to life. From logo animations to complex visual effects.',
      features: ['2D/3D Motion Design', 'Visual Effects', 'Title Sequences', 'Brand Animation']
    },
    {
      icon: Camera,
      title: 'Full Production Services',
      description: 'Complete commercial production from pre-production planning through post-production delivery.',
      features: ['Concept Development', 'Scriptwriting', 'Filming & Direction', 'Post-Production']
    },
    {
      icon: Monitor,
      title: 'Technical How-To Videos',
      description: 'Specialized in creating detailed instructional content with 3D elements for product assembly and technical education.',
      features: ['Customer Assembly Guides', 'Product Details', 'Training Videos', 'Interactive Elements']
    },
    {
      icon: Sparkles,
      title: 'HD Video Production',
      description: 'High-definition video production with professional-grade equipment and experienced creative team.',
      features: ['HD Quality', 'Professional Audio', 'Color Grading', 'Cinema-Quality Output']
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Industry-leading technology and expertise to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
                    <Icon className="text-cyan-400" size={28} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {capability.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {capability.description}
                </p>

                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Elevate Your Brand?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            From concept to completion, we provide comprehensive production services tailored to your needs. Let's create something extraordinary together.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
