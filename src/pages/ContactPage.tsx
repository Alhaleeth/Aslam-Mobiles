import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, User, Send, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../utils/whatsapp';
import { ContactForm } from '../components/forms/ContactForm';
import { SEO } from '../components/common/SEO';

export const ContactPage: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WhatsAppMessages.general());

  return (
    <>
      <SEO
        title="Contact Aslam Mobiles | ECR Road Senthalaippattinam, Pattukkottai, Peravurani"
        description="Contact Aslam Mobiles on ECR Road, Senthalaippattinam (near Pattukkottai & Kattumavadi). Call 7904761412 / 8883871702 or WhatsApp for directions and mobile repair quotes."
        keywords="aslam mobile contact, mobile service pattukkottai phone number, aslam mobiles senthalai address, ecr road senthalaippattinam mobile shop, anvar ibrahim aslam mobiles"
        canonicalPath="/contact"
      />

      {/* Header */}
      <section className="bg-navy-950 bg-tech-circuit text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 px-3.5 py-1 rounded-full border border-cyber-cyan/30">
              Reach Out Anytime
            </span>
            <span className="text-xs font-semibold text-slate-300 bg-navy-800/80 px-3.5 py-1 rounded-full border border-navy-700">
              📍 ECR Road, Senthalaippattinam, Peravurani
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-electric-400">Aslam Mobiles</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
            Have a question about a phone model, need an instant repair estimate, or looking to book tickets? Visit our store on ECR Road or contact us directly.
          </p>

          {/* Quick Action Ribbon */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={`tel:${BUSINESS_CONFIG.phones.primary}`}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-navy-950 bg-white hover:bg-slate-100 shadow-lg hover:shadow-glow-cyan transition active:scale-95 group"
            >
              <Phone className="w-4 h-4 text-electric-600 animate-pulse group-hover:scale-110 transition" />
              <span>Call {BUSINESS_CONFIG.phones.primary}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition active:scale-95 group"
            >
              <MessageCircle className="w-4 h-4 fill-white/20 group-hover:scale-110 transition" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={BUSINESS_CONFIG.location.googleMapsDirectionsUrlPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-navy-800 hover:bg-navy-700 border border-slate-600 hover:border-cyber-cyan/50 transition active:scale-95 group"
            >
              <MapPin className="w-4 h-4 text-cyber-cyan group-hover:scale-110 transition" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Col: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Business Overview Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-xl font-black text-navy-900 uppercase tracking-wide">
                    ASLAM MOBILES
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-slate-500 mt-1">
                    <User className="w-3.5 h-3.5 text-electric-600" />
                    <span>Owner: <strong className="text-slate-800">{BUSINESS_CONFIG.owner}</strong></span>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-electric-600 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-semibold uppercase">Phone Numbers</div>
                      <a href={`tel:${BUSINESS_CONFIG.phones.primary}`} className="block text-sm font-bold text-navy-900 hover:text-electric-600 transition">
                        {BUSINESS_CONFIG.phones.displayPrimary} (Primary)
                      </a>
                      <a href={`tel:${BUSINESS_CONFIG.phones.secondary}`} className="block text-sm font-semibold text-slate-700 hover:text-electric-600 transition">
                        {BUSINESS_CONFIG.phones.displaySecondary} (Secondary)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-semibold uppercase">WhatsApp Chat</div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-emerald-600 hover:underline"
                      >
                        +91 {BUSINESS_CONFIG.whatsapp.number}
                      </a>
                      <p className="text-[11px] text-slate-500 mt-0.5">Quick responses during working hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-semibold uppercase">Working Timings</div>
                      <div className="text-sm font-bold text-navy-900">
                        {BUSINESS_CONFIG.workingHours.days}: {BUSINESS_CONFIG.workingHours.timings}
                      </div>
                      <div className="text-slate-500">
                        Sunday: {BUSINESS_CONFIG.workingHours.sunday}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[11px] text-slate-400 font-semibold uppercase">Shop Address</span>
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          Verified
                        </span>
                      </div>
                      <p className="text-xs text-navy-900 font-bold leading-relaxed mt-0.5">
                        {BUSINESS_CONFIG.location.addressPlaceholder}
                      </p>
                      <p className="text-[11px] text-slate-600 mt-1">
                        Landmark: <strong>{BUSINESS_CONFIG.location.landmarkPlaceholder}</strong>
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        State/Region: {BUSINESS_CONFIG.location.cityState}
                      </p>

                      <div className="mt-2.5">
                        <a
                          href={BUSINESS_CONFIG.location.googleMapsDirectionsUrlPlaceholder}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-bold text-electric-600 hover:text-electric-700"
                        >
                          <MapPin className="w-3 h-3" />
                          <span>Get GPS Navigation Directions &rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${BUSINESS_CONFIG.phones.primary}`}
                    className="py-2.5 px-3 rounded-xl bg-navy-900 hover:bg-electric-600 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition active:scale-95 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition active:scale-95 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Verified Location Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 text-white border border-navy-800 shadow-md space-y-2">
                <div className="font-bold flex items-center space-x-2 text-cyber-cyan text-sm">
                  <MapPin className="w-4 h-4 animate-pulse" />
                  <span>Visiting Our Shop in Senthalaippattinam?</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Located directly on ECR Road, Senthalaippattinam. Convenient access for customers across Peravurani and Thanjavur district. Parking is easily available in front of the center.
                </p>
                <div className="pt-1">
                  <a
                    href={BUSINESS_CONFIG.location.googleMapsDirectionsUrlPlaceholder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyber-cyan hover:underline"
                  >
                    <span>Open in Google Maps Application &rarr;</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Col: Interactive Contact Form & Map */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Form */}
              <ContactForm />

              {/* Map Embed Box */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-navy-900 text-base flex items-center">
                      <MapPin className="w-4 h-4 text-cyber-cyan mr-1.5" />
                      Shop Location Map (ECR Road)
                    </h4>
                    <p className="text-xs text-slate-500">Senthalaippattinam, Peravurani (Tk), Thanjavur - 614612</p>
                  </div>
                  <a
                    href={BUSINESS_CONFIG.location.googleMapsDirectionsUrlPlaceholder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-electric-600 hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="w-full h-80 rounded-2xl border border-slate-200 bg-slate-100 relative overflow-hidden shadow-inner">
                  {BUSINESS_CONFIG.location.googleMapsEmbedUrlPlaceholder ? (
                    <iframe
                      src={BUSINESS_CONFIG.location.googleMapsEmbedUrlPlaceholder}
                      title="Google Maps - Aslam Mobiles Senthalaippattinam"
                      className="w-full h-full border-0 rounded-2xl"
                      loading="lazy"
                    ></iframe>
                  ) : (
                    <div className="space-y-2 max-w-sm p-6 text-center">
                      <MapPin className="w-8 h-8 text-slate-400 mx-auto" />
                      <div className="text-sm font-bold text-navy-900">
                        ECR Road, Senthalaippattinam
                      </div>
                      <p className="text-xs text-slate-500">
                        Peravurani (Tk), Thanjavur - 614612
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};
