import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';

export const StrongCTA: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(WhatsAppMessages.general());

  return (
    <section className="py-20 bg-navy-950 bg-tech-circuit text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-electric-500/20 text-cyber-cyan border border-cyber-cyan/30 mb-5 backdrop-blur-md shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Fast, Reliable & Affordable Under One Roof • ECR Road</span>
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
          Need a Mobile, Repair or Digital Service?
        </h2>

        <p className="text-xl sm:text-2xl font-bold text-cyber-cyan mt-4">
          Aslam Mobiles is ready to serve you.
        </p>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-3 leading-relaxed">
          Visit our workshop on ECR Road, Senthalaippattinam, Peravurani or reach out directly for immediate assistance, quick quotes, and doorstep guidance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href={`tel:${BUSINESS_CONFIG.phones.primary}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl text-base font-bold text-navy-950 bg-white hover:bg-slate-100 shadow-xl hover:shadow-glow-cyan transition active:scale-95 group"
          >
            <Phone className="w-5 h-5 text-electric-600 animate-pulse group-hover:scale-110 transition" />
            <span>Call {BUSINESS_CONFIG.phones.primary}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 hover:shadow-glow-emerald transition active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-slate-400">
          📍 <strong>ECR Road, Senthalaippattinam, Peravurani (Tk), Thanjavur - 614612</strong> • Helpline: <a href={`tel:${BUSINESS_CONFIG.phones.secondary}`} className="text-white underline font-semibold">{BUSINESS_CONFIG.phones.secondary}</a> • Owner: <span className="text-white font-medium">{BUSINESS_CONFIG.owner}</span>
        </div>

      </div>
    </section>
  );
};
