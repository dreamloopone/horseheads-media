export default function ClientLogos() {
  const logos = [
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/agency%20p.png',
      alt: 'Agency P'
    },
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/asgco.png',
      alt: 'ASGCO'
    },
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/avw%20logo.png',
      alt: 'AVW'
    },
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/dragonstudios%20white.png',
      alt: 'Dragon Studios'
    },
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/faskr%20logo%20WHITE.png',
      alt: 'Faskr'
    },
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/HII_Logo%20white.png',
      alt: 'HII'
    },
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/HIS%20TABERNACLE.png',
      alt: 'His Tabernacle'
    },
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/Logo_ThreatTec_white.png',
      alt: 'ThreatTec'
    },
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/MasterTeacherlogo%20Whte.png',
      alt: 'Master Teacher'
    },
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/northpowder.png',
      alt: 'North Powder'
    },
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/ufp%20logo.png',
      alt: 'UFP'
    },
    {
      url: 'https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Corporate%20Logos%20for%20Horseheads%20Media/us%20air%20force%20white.png',
      alt: 'US Air Force'
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Technical grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-mono uppercase tracking-wider">
            <span className="whitespace-nowrap">[ CLIENTS ]</span>
          </h2>
          <p className="text-white/60 font-mono uppercase text-sm tracking-wider">
            TRUSTED PARTNERS IN ENTERPRISE SOLUTIONS
          </p>
        </div>

        {/* Logo Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center group hover:scale-110 transition-transform duration-300"
            >
              <img
                src={logo.url}
                alt={logo.alt}
                className="h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>
      </div>
    </section>
  );
}
