import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import ConcentricRingsAnimation from './ConcentricRingsAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic will be implemented here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Concentric Rings Animation Background */}
      <div className="absolute inset-0">
        <ConcentricRingsAnimation />
      </div>
      
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-mono uppercase tracking-wider">
            [ ESTABLISH CONTACT ]
          </h2>
          <p className="text-white/60 font-mono uppercase text-sm tracking-wider">
            MISSION BRIEFING // PROJECT DEPLOYMENT
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Logo Section */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src="https://vekqdmgaoplskiuxawgj.supabase.co/storage/v1/object/public/Images%20for%20Horseheads%20Media/Horseheads%20Media%20Logo%20white%20text%20alpha.png" 
                alt="Horseheads Media"
                className="w-full max-w-xs h-auto"
              />
            </div>

            <div className="bg-black border border-brand-blue/30 p-8">
              <h3 className="text-xl font-bold text-white mb-6 font-mono uppercase tracking-wider">COORDINATES</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-brand-blue/40 bg-brand-blue/5">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-mono text-sm mb-1">LOCATION</h4>
                    <p className="text-white font-mono text-sm">HORSEHEADS, NY 14845</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 border border-brand-blue/40 bg-brand-blue/5">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-mono text-sm mb-1">COMM</h4>
                    <p className="text-white font-mono text-sm">607-331-6383</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 border border-brand-blue/40 bg-brand-blue/5">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-mono text-sm mb-1">EMAIL</h4>
                    <p className="text-white font-mono text-sm">patrick.allyn@horseheadsmedia.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black border border-brand-blue/30 p-8">
            <h3 className="text-xl font-bold text-white mb-6 font-mono uppercase tracking-wider">TRANSMIT MESSAGE</h3>

            <form action="https://formspree.io/f/xykkzdze" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-white mb-2 uppercase">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black border border-brand-blue/40 text-white font-mono placeholder-gray-600 focus:border-brand-blue outline-none transition-all"
                  placeholder="[ENTER NAME]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-white mb-2 uppercase">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black border border-brand-blue/40 text-white font-mono placeholder-gray-600 focus:border-brand-blue outline-none transition-all"
                  placeholder="[ENTER EMAIL]"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-mono text-white mb-2 uppercase">
                  SERVICE
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 bg-black border border-brand-blue/40 text-white font-mono focus:border-brand-blue outline-none transition-all"
                >
                  <option value="" className="bg-black text-white">[ SELECT SERVICE ]</option>
                  <option value="video" className="bg-black text-white">VIDEO PRODUCTION</option>
                  <option value="motion" className="bg-black text-white">MOTION GRAPHICS</option>
                  <option value="education" className="bg-black text-white">EDUCATIONAL CONTENT</option>
                  <option value="web" className="bg-black text-white">WEB DEPLOYMENT</option>
                  <option value="branding" className="bg-black text-white">BRANDING</option>
                  <option value="other" className="bg-black text-white">OTHER</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-white mb-2 uppercase">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-brand-blue/40 text-white font-mono placeholder-gray-600 focus:border-brand-blue outline-none transition-all resize-none"
                  placeholder="[MISSION DETAILS]"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 border-2 border-brand-blue bg-brand-blue text-white font-mono uppercase tracking-wider hover:bg-brand-blue/80 transition-all font-bold flex items-center justify-center gap-2"
              >
                [ SEND ]
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
