import React from 'react';
import { Globe, Plane, Bus, FileText, CheckCircle2, ShieldAlert, Phone, MessageCircle } from 'lucide-react';
import { DIGITAL_SERVICES_DATA } from '../data/digitalServices';
import { DigitalServiceCard } from '../components/cards/DigitalServiceCard';
import { SEO } from '../components/common/SEO';
import { BUSINESS_CONFIG } from '../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../utils/whatsapp';

export const EServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Air Ticket & Bus Ticket Booking Senthalai, Kattumavadi, Pattukkottai | Aslam Mobiles"
        description="Air ticket booking desk, bus reservations, online application filing and digital services at Aslam Mobiles on ECR Road, Senthalaippattinam near Kattumavadi & Pattukkottai."
        keywords="air ticket booking kattumavadi, bus ticket booking senthalai, flight tickets pattukkottai, e services senthalaippattinam, online application senthalai, aslam travel desk"
        canonicalPath="/e-services"
      />

      {/* Header */}
      <section className="bg-navy-950 bg-tech-circuit text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 px-3.5 py-1 rounded-full border border-cyber-cyan/30">
              Convenient Local Online Center
            </span>
            <span className="text-xs font-semibold text-slate-300 bg-navy-800/80 px-3.5 py-1 rounded-full border border-navy-700">
              📍 ECR Road, Senthalaippattinam
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Digital & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-emerald-400">E-Services</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
            Reliable assistance for air and bus ticket reservations, digital applications, and online service guidance at our ECR Road center.
          </p>
        </div>
      </section>

      {/* Important Compliance & Information Banner */}
      <div className="bg-blue-50/90 border-b border-blue-200 py-3.5 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-2 text-xs text-blue-950">
          <FileText className="w-4 h-4 text-electric-600 shrink-0" />
          <span>
            <strong>Service Note:</strong> Aslam Mobiles provides independent digital customer facilitation and assistance for travel bookings and public internet applications. We do not claim official government affiliation.
          </span>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIGITAL_SERVICES_DATA.map((service) => (
              <DigitalServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Travel Consultation Ribbon */}
          <div className="mt-16 p-8 rounded-3xl bg-navy-900 text-white border border-navy-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Plane className="w-4 h-4" />
                  <span>Travel Desk Assistance</span>
                </div>
                <h3 className="text-2xl font-black">
                  Planning a Trip? Get Fast Fare Comparisons & Seat Selection
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Avoid confusing payment gateways. Send us your origin, destination, and travel dates on WhatsApp — we find the most convenient schedules, book your tickets, and send PDFs straight to your phone.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={getWhatsAppUrl(WhatsAppMessages.ticketEnquiry('Air / Bus Ticket'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Enquire Ticket on WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phones.primary}`}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-200 bg-navy-800 hover:bg-navy-700 border border-navy-700 transition"
                >
                  <Phone className="w-4 h-4 text-electric-400" />
                  <span>Call Travel Desk ({BUSINESS_CONFIG.phones.primary})</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
