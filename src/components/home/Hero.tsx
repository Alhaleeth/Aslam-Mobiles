import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Wrench, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  Cpu, 
  MapPin, 
  Zap 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';
import { handleImageError } from '../../utils/imageFallback';

export const Hero: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WhatsAppMessages.general());

  return (
    <section className="relative bg-navy-950 bg-tech-circuit text-white overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 md:pt-16 md:pb-28">
      
      {/* Background Glowing Mesh Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[300px] sm:h-[380px] bg-electric-500/20 blur-[90px] sm:blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-4 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-cyber-cyan/15 blur-[80px] sm:blur-[110px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-500/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none"></div>

      {/* Subtle circuit grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Top Badges: Category & Verified Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-electric-500/15 border border-electric-500/30 text-electric-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cyber-cyan" />
                <span>Mobile Sales • Repair • E-Services</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-navy-800/80 border border-cyber-cyan/30 text-cyber-cyan text-[11px] sm:text-xs font-semibold backdrop-blur-md">
                <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cyber-cyan animate-pulse" />
                <span>ECR Road, Senthalaippattinam</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-sans leading-tight sm:leading-tight">
              ASLAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-electric-400 to-accent-cyan">MOBILES</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 leading-snug">
              {BUSINESS_CONFIG.subheading}
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {BUSINESS_CONFIG.description}
            </p>

            {/* Verified Location & Trust Highlights */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-x-5 text-xs text-slate-300 pt-3 border-t border-navy-800/80">
              <span className="flex items-center font-medium">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400 mr-1.5 shrink-0" />
                <span className="truncate">Owner: <strong className="text-white ml-0.5">{BUSINESS_CONFIG.owner}</strong></span>
              </span>
              <span className="flex items-center font-medium">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400 mr-1.5 shrink-0" />
                <span className="truncate">Helpline: <strong className="text-white ml-0.5">{BUSINESS_CONFIG.phones.primary}</strong></span>
              </span>
              <span className="flex items-center font-medium">
                <Zap className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyber-cyan mr-1.5 shrink-0" />
                <span>Display & Glass Fix</span>
              </span>
              <span className="flex items-center font-medium text-cyber-cyan">
                <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyber-cyan mr-1.5 shrink-0" />
                <span>Peravurani (Tk)</span>
              </span>
            </div>

            {/* Hero CTA Buttons - Mobile stack, Tablet/Desktop row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-2">
              {/* Button 1: Call Now */}
              <a
                href={`tel:${BUSINESS_CONFIG.phones.primary}`}
                className="w-full sm:w-auto h-12 inline-flex items-center justify-center space-x-2 px-5 sm:px-6 rounded-xl text-sm font-bold text-white bg-navy-800 hover:bg-navy-700 border border-slate-600 hover:border-cyber-cyan/50 shadow-md transition active:scale-95 group"
              >
                <Phone className="w-4 h-4 text-cyber-cyan animate-pulse group-hover:scale-110 transition" />
                <span>Call Now ({BUSINESS_CONFIG.phones.primary})</span>
              </a>

              {/* Button 2: WhatsApp Us */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 inline-flex items-center justify-center space-x-2 px-5 sm:px-6 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition active:scale-95 group"
              >
                <MessageCircle className="w-4 h-4 fill-white/20 group-hover:scale-110 transition" />
                <span>WhatsApp Us</span>
              </a>

              {/* Button 3: Explore Services */}
              <Link
                to="/services"
                className="w-full sm:w-auto h-12 inline-flex items-center justify-center space-x-2 px-5 sm:px-6 rounded-xl text-sm font-bold text-white bg-electric-500 hover:bg-electric-600 shadow-lg shadow-electric-500/30 transition active:scale-95 group"
              >
                <Wrench className="w-4 h-4 group-hover:rotate-12 transition" />
                <span>Explore Services</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Visual Tech Showcase with Mobile Repair Aesthetics */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Tech Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyber-cyan via-electric-500 to-emerald-400 opacity-30 blur-lg group-hover:opacity-60 transition duration-1000"></div>

              {/* Main Showcase Image Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-navy-700/90 bg-navy-900/90 shadow-2xl backdrop-blur-xl group">
                <img
                  src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=80"
                  alt="Mobile Phone Diagnostics and Repair at Aslam Mobiles"
                  onError={(e) => handleImageError(e, 'repair')}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

                {/* Bottom Overlay inside card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-2xl bg-navy-900/95 border border-navy-700/80 backdrop-blur-md shadow-lg">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold text-cyber-cyan uppercase tracking-wider flex items-center truncate">
                        <MapPin className="w-3 h-3 mr-1 shrink-0" />
                        <span>ECR Road, Senthalaippattinam</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate">
                        Aslam Mobiles Tech Center
                      </div>
                    </div>
                    <Link
                      to="/service-request"
                      className="shrink-0 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-bold bg-electric-500 hover:bg-electric-600 text-white shadow-md transition active:scale-95"
                    >
                      Book Repair
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Display & Glass Specialist (Responsive) */}
              <div className="hidden sm:flex absolute -top-3 -left-3 sm:-top-4 sm:-left-6 bg-navy-900/95 border border-cyber-cyan/40 p-2.5 sm:p-3 rounded-2xl shadow-xl backdrop-blur-md items-center space-x-2.5 sm:space-x-3 animate-float">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-electric-500/20 text-cyber-cyan flex items-center justify-center">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold">Specialization</div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">Display & Glass Fix</div>
                </div>
              </div>

              {/* Floating Badge 2: Diagnostics & Fast Service (Responsive) */}
              <div className="hidden sm:flex absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-6 bg-navy-900/95 border border-emerald-500/40 p-2.5 sm:p-3 rounded-2xl shadow-xl backdrop-blur-md items-center space-x-2.5 sm:space-x-3 animate-float-slow">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold">Hardware Diagnostics</div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">Fast 30-Min Service</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
