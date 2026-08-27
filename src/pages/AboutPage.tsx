import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Smartphone, 
  Wrench, 
  Headphones, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  MessageCircle,
  ArrowRight,
  HeartHandshake
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../utils/whatsapp';
import { SEO } from '../components/common/SEO';
import { StrongCTA } from '../components/home/StrongCTA';
import { handleImageError } from '../utils/imageFallback';

export const AboutPage: React.FC = () => {
  const pillars = [
    {
      title: 'Mobile Sales',
      description: 'Budget, mid-range and premium Android smartphones, along with carefully inspected pre-owned models.',
      icon: Smartphone,
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      title: 'Professional Repair',
      description: 'End-to-end diagnosis, display replacement, glass repair, battery replacement, and micro-soldering.',
      icon: Wrench,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    {
      title: 'Mobile Accessories',
      description: 'Tempered glass, drop-proof cases, fast charging adapters, high-spec cables, power banks, and audio gear.',
      icon: Headphones,
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    },
    {
      title: 'Digital E-Services',
      description: 'Convenient assistance for domestic and international flight tickets, bus reservations, and online forms.',
      icon: Globe,
      color: 'text-cyan-500',
      bg: 'bg-cyan-50'
    }
  ];

  return (
    <>
      <SEO
        title="About Aslam Mobiles | Owner Anvar Ibrahim | Senthalai, Pattukkottai"
        description="About Aslam Mobiles: Trusted mobile repair, display replacement and digital solutions shop led by Anvar Ibrahim on ECR Road, Senthalaippattinam near Pattukkottai & Kattumavadi."
        keywords="aslam mobiles owner anvar ibrahim, aslam mobile senthalai history, mobile repair shop senthalaippattinam, pattukkottai mobile technicians"
        canonicalPath="/about"
      />

      {/* Hero Banner */}
      <section className="bg-navy-950 bg-tech-circuit text-white py-16 sm:py-20 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 px-3.5 py-1 rounded-full border border-cyber-cyan/30">
              Our Business Profile
            </span>
            <span className="text-xs font-semibold text-slate-300 bg-navy-800/80 px-3.5 py-1 rounded-full border border-navy-700">
              📍 ECR Road, Senthalaippattinam
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight uppercase">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-electric-400">Aslam Mobiles</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-3">
            Your trusted local destination on ECR Road, Senthalaippattinam for mobile sales, technical service, genuine accessories, and online digital solutions.
          </p>
        </div>
      </section>

      {/* Main Story & Owner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-navy-900">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                  alt="Aslam Mobiles Storefront and Consultation"
                  onError={(e) => handleImageError(e, 'store')}
                  className="w-full h-80 sm:h-96 object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/95 border border-navy-700 backdrop-blur-md text-white shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-electric-500 flex items-center justify-center text-white font-bold">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Business Owner</div>
                      <div className="text-base font-bold text-white">{BUSINESS_CONFIG.owner}</div>
                      <div className="text-[11px] text-cyber-cyan">📍 ECR Road, Senthalaippattinam</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-electric-600 bg-electric-50 px-3 py-1 rounded-full border border-electric-100">
                  Who We Are
                </span>
                <h2 className="text-3xl font-black text-navy-900 mt-2">
                  Complete Mobile & Digital Solutions Under One Roof
                </h2>
              </div>

              {/* Exact content concept requested in prompt */}
              <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed border-l-4 border-electric-500 pl-4 py-1 italic bg-slate-50 rounded-r-xl">
                "Aslam Mobiles is a customer-focused mobile sales and service center located on ECR Road, Senthalaippattinam, providing mobile phones, accessories, professional repair solutions and digital services with convenience, reliability, and affordable pricing."
              </blockquote>

              <p className="text-sm text-slate-600 leading-relaxed">
                Led by owner <strong>{BUSINESS_CONFIG.owner}</strong>, Aslam Mobiles is situated at <strong>ECR Road, Senthalaippattinam, Peravurani (Tk), Thanjavur - 614612</strong>. We established our center to provide fast smartphone repairs, honest diagnostics, genuine spare parts, and everyday online services under one reliable roof for our community.
              </p>

              {/* Core Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center space-x-2 text-navy-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Tested Spare Parts</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Quality displays, glass, batteries, and charging ports installed with care.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center space-x-2 text-navy-900 font-bold text-sm">
                    <HeartHandshake className="w-4 h-4 text-electric-500" />
                    <span>Transparent Pricing</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Clear quotes before initiating repair work, with no surprise hidden fees.
                  </p>
                </div>
              </div>

              {/* Contact Callout */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${BUSINESS_CONFIG.phones.primary}`}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-900 hover:bg-electric-600 transition"
                >
                  <Phone className="w-4 h-4 text-electric-400" />
                  <span>Call {BUSINESS_CONFIG.phones.primary}</span>
                </a>

                <a
                  href={getWhatsAppUrl(WhatsAppMessages.general())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Chat with Us on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-electric-600 bg-electric-50 px-3 py-1 rounded-full border border-electric-100">
              Our Core Departments
            </span>
            <h2 className="text-3xl font-black text-navy-900 mt-2">
              Everything You Need in Mobile & Digital
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Explore how Aslam Mobiles supports personal and business technology requirements every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle hover:shadow-card hover:border-electric-500/40 transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      to={
                        idx === 0 ? '/sales' :
                        idx === 1 ? '/services' :
                        idx === 2 ? '/accessories' : '/e-services'
                      }
                      className="inline-flex items-center text-xs font-bold text-electric-600 hover:text-electric-700"
                    >
                      <span>Explore Department</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Strong Final CTA */}
      <StrongCTA />
    </>
  );
};
