import React from 'react';
import { Phone, MessageCircle, Wrench, Shield, CheckCircle, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';

export const QuickContactCTA: React.FC = () => {
  return (
    <section className="bg-navy-950 bg-circuit-accent border-y border-navy-800/80 py-6 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 relative z-10">
        
        {/* Left: Quick Pitch */}
        <div className="flex items-center space-x-3.5 text-center md:text-left">
          <div className="w-11 h-11 rounded-xl bg-electric-500/20 text-cyber-cyan border border-cyber-cyan/30 flex items-center justify-center shrink-0 hidden sm:flex shadow-sm">
            <Phone className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span>Need Immediate Mobile Assistance or Quote?</span>
              <span className="inline-flex items-center text-xs font-normal text-cyber-cyan bg-navy-800/80 px-2 py-0.5 rounded-md border border-cyber-cyan/20">
                <MapPin className="w-3 h-3 mr-1" />
                ECR Road Shop
              </span>
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Speak directly with technician {BUSINESS_CONFIG.owner} or start an instant WhatsApp conversation.
            </p>
          </div>
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${BUSINESS_CONFIG.phones.primary}`}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-800 hover:bg-navy-700 border border-slate-700 hover:border-cyber-cyan/40 transition active:scale-95 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>{BUSINESS_CONFIG.phones.primary}</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phones.secondary}`}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-800 hover:bg-navy-700 border border-slate-700 hover:border-cyber-cyan/40 transition active:scale-95 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>{BUSINESS_CONFIG.phones.secondary}</span>
          </a>

          <a
            href={getWhatsAppUrl(WhatsAppMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
            <span>WhatsApp Us</span>
          </a>
        </div>

      </div>
    </section>
  );
};
