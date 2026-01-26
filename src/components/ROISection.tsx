import { useEffect, useRef } from 'react';

export default function ROISection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          if (entry.target.classList.contains('stat-card')) {
            const numberElement = entry.target.querySelector('.stat-number');
            const barElement = entry.target.querySelector('.stat-bar-fill');
            
            if (numberElement && !numberElement.classList.contains('animated')) {
              animateNumber(numberElement as HTMLElement);
              numberElement.classList.add('animated');
            }
            
            if (barElement && !barElement.classList.contains('animated')) {
              animateBar(barElement as HTMLElement);
              barElement.classList.add('animated');
            }
          }
        }
      });
    }, observerOptions);

    const fadeElements = containerRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    fadeElements?.forEach(el => observer.observe(el));

    return () => fadeElements?.forEach(el => observer.unobserve(el));
  }, []);

  const animateNumber = (element: HTMLElement) => {
    const target = parseInt(element.getAttribute('data-target') || '0');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + '%';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + '%';
      }
    }, 16);
  };

  const animateBar = (element: HTMLElement) => {
    const targetWidth = parseInt(element.getAttribute('data-width') || '0');
    setTimeout(() => {
      element.style.width = targetWidth + '%';
    }, 100);
  };

  const stats = [
    {
      number: 94,
      title: 'Conversion Increase',
      description: '3D product videos and visualizations increase conversions by up to 94% by clearly explaining features and benefits. Interactive 3D/360° views drive 94% higher conversion rates compared to static images.',
      barWidth: 94,
      source: 'Sayduck/Shopify stats',
      url: 'www.sayduck.com/3d-and-ar-statistics-2022',
      footnote: '1'
    },
    {
      number: 200,
      title: 'Sales Lift',
      description: 'In e-commerce and B2B demos, 3D content lifts sales by 200%+ in many cases. 300%+ engagement increase leading to 200%+ sales growth.',
      barWidth: 100,
      source: 'Chasing Illusions Studio case study',
      url: 'www.chasingillusions.in/animated-product-videos-roi',
      footnote: '2'
    },
    {
      number: 50,
      title: 'Return Reduction',
      description: 'Better product understanding cuts support queries and tickets significantly. 3D visualization lowers product returns by up to 40% through accurate expectations and detailed guidance.',
      barWidth: 50,
      source: 'Threekit/Shopify',
      url: 'www.threekit.com/guide-to-roi-in-3d-and-augmented-reality',
      footnote: '3'
    },
    {
      number: 823,
      title: 'Marketing ROI',
      description: 'Real-world case studies show 287% to 823% ROI from 3D product animation campaigns. One B2B manufacturing client achieved 823% ROI using 3D instructional videos to showcase industrial equipment.',
      barWidth: 100,
      source: 'Chasing Illusions Studio case study',
      url: 'www.chasingillusions.in/animated-product-videos-roi',
      footnote: '4'
    }
  ];

  return (
    <section id="roi" className="min-h-screen py-24 bg-black relative overflow-hidden" ref={containerRef}>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-10 h-10 border-t-2 border-l-2 border-brand-blue/40 pointer-events-none"></div>
      <div className="absolute top-8 right-8 w-10 h-10 border-t-2 border-r-2 border-brand-blue/40 pointer-events-none"></div>
      <div className="absolute left-8 w-10 h-10 border-b-2 border-l-2 border-brand-blue/40 pointer-events-none" style={{ top: '420px' }}></div>
      <div className="absolute right-8 w-10 h-10 border-b-2 border-r-2 border-brand-blue/40 pointer-events-none" style={{ top: '420px' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-8 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue mb-4 font-mono uppercase tracking-wider">
            Unlock Massive ROI with 3D Instructional Videos
          </h2>
          <p className="text-xl sm:text-2xl text-white font-bold mb-6 font-mono">
            Proven Results: Simplify Complex Products, Slash Support Costs, and Drive Business Growth
          </p>
        </div>

        {/* Hook */}
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-mono">
            In today's B2B world, complex products lead to confusion, high support tickets, slow onboarding, and lost sales. Our specialized 3D product instructional content turns that around—delivering clear, engaging visuals that pay for themselves quickly.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.slice(0, 3).map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card slide-in-left bg-black border-2 border-brand-blue/30 p-6 hover:border-brand-blue hover:bg-brand-blue/5 transition-all`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="stat-number text-3xl sm:text-4xl font-bold text-white mb-3 font-mono" data-target={stat.number}>
                0%
              </div>
              <div className="stat-bar-container bg-brand-blue/10 border border-brand-blue/30 h-3 mb-4 overflow-hidden">
                <div 
                  className="stat-bar-fill h-full transition-all duration-2000 w-0"
                  style={{
                    background: 'linear-gradient(90deg, #00d9ff 0%, #00a8cc 100%)',
                    boxShadow: '0 0 15px rgba(0, 217, 255, 0.6)'
                  }}
                  data-width={stat.barWidth}
                ></div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide font-mono">{stat.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">{stat.description}</p>
              <div className="text-xs text-white/60 border-t border-brand-blue/20 pt-3">
                <p className="font-semibold text-brand-blue mb-1"><sup>{stat.footnote}</sup> {stat.source}</p>
                <p className="font-mono">{stat.url}</p>
              </div>
            </div>
          ))}

          {/* Full width fourth stat */}
          <div 
            className="col-span-1 md:col-span-2 lg:col-span-3 stat-card slide-in-right bg-black border-2 border-brand-blue/30 p-6 hover:border-brand-blue hover:bg-brand-blue/5 transition-all max-w-2xl mx-auto w-full"
          >
            <div className="stat-number text-3xl sm:text-4xl font-bold text-white mb-3 font-mono" data-target={stats[3].number}>
              0%
            </div>
            <div className="stat-bar-container bg-brand-blue/10 border border-brand-blue/30 h-3 mb-4 overflow-hidden">
              <div 
                className="stat-bar-fill h-full transition-all duration-2000 w-0"
                style={{
                  background: 'linear-gradient(90deg, #00d9ff 0%, #00a8cc 100%)',
                  boxShadow: '0 0 15px rgba(0, 217, 255, 0.6)'
                }}
                data-width={stats[3].barWidth}
              ></div>
            </div>
            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide font-mono">{stats[3].title}</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">{stats[3].description}</p>
            <div className="text-xs text-white/60 border-t border-brand-blue/20 pt-3">
              <p className="font-semibold text-brand-blue mb-1"><sup>{stats[3].footnote}</sup> {stats[3].source}</p>
              <p className="font-mono">{stats[3].url}</p>
            </div>
          </div>
        </div>

        {/* Why Section */}
        <div className="bg-brand-blue/5 border-2 border-brand-blue/30 p-8 fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 uppercase tracking-wider font-mono">
            Why 3D Instructional Content Wins for B2B
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 slide-in-left">
              <div className="w-8 h-8 bg-brand-blue text-black flex items-center justify-center font-bold flex-shrink-0 mt-1">→</div>
              <p className="text-white/90">Explains complex machinery, software, or assemblies in ways 2D/text never can</p>
            </div>
            <div className="flex gap-4 slide-in-left">
              <div className="w-8 h-8 bg-brand-blue text-black flex items-center justify-center font-bold flex-shrink-0 mt-1">→</div>
              <p className="text-white/90">Reusable across sales demos, training portals, websites, apps, and support resources</p>
            </div>
            <div className="flex gap-4 slide-in-right">
              <div className="w-8 h-8 bg-brand-blue text-black flex items-center justify-center font-bold flex-shrink-0 mt-1">→</div>
              <p className="text-white/90">Measurable impact: Track views, engagement, support reductions, and revenue lift</p>
            </div>
            <div className="flex gap-4 slide-in-right">
              <div className="w-8 h-8 bg-brand-blue text-black flex items-center justify-center font-bold flex-shrink-0 mt-1">→</div>
              <p className="text-white/90">Cost-effective long-term: One investment creates evergreen assets that scale</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fade-in, .slide-in-left, .slide-in-right {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in {
          transform: translateY(30px);
        }

        .slide-in-left {
          transform: translateX(-50px);
        }

        .slide-in-right {
          transform: translateX(50px);
        }

        .fade-in.visible,
        .slide-in-left.visible,
        .slide-in-right.visible {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        .stat-bar-fill {
          position: relative;
        }

        .stat-bar-fill::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 2px;
          height: 100%;
          background: #fff;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        }

        .stat-bar-fill.animated {
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(0, 217, 255, 0.6); }
          50% { box-shadow: 0 0 25px rgba(0, 217, 255, 0.9); }
        }

        .grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}
