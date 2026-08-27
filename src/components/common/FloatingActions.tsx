import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingActions: React.FC = () => {
  const [callPopover, setCallPopover] = useState(false);

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end space-y-3">
      
      {/* Call Numbers Popover */}
      {callPopover && (
        <div className="bg-navy-900 border border-navy-700 rounded-2xl p-4 shadow-2xl text-white w-72 mb-1 animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center justify-between border-b border-navy-800 pb-2.5 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-electric-400">
              Direct Phone Lines
            </span>
            <button 
              onClick={() => setCallPopover(false)}
              className="text-slate-400 hover:text-white p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <a
              href={`tel:${BUSINESS_CONFIG.phones.primary}`}
              className="flex items-center justify-between p-2.5 rounded-lg bg-navy-800 hover:bg-navy-700 transition"
            >
              <div>
                <div className="text-[11px] text-slate-400">Primary Contact</div>
                <div className="font-semibold text-white">{BUSINESS_CONFIG.phones.displayPrimary}</div>
              </div>
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.phones.secondary}`}
              className="flex items-center justify-between p-2.5 rounded-lg bg-navy-800 hover:bg-navy-700 transition"
            >
              <div>
                <div className="text-[11px] text-slate-400">Secondary Line</div>
                <div className="font-semibold text-white">{BUSINESS_CONFIG.phones.displaySecondary}</div>
              </div>
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>

            <div className="pt-2 border-t border-navy-800/80 text-[11px] text-cyber-cyan flex items-center">
              <span>📍 ECR Road, Senthalaippattinam, Peravurani</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Call Trigger Button */}
      <button
        onClick={() => setCallPopover(!callPopover)}
        className="w-12 h-12 rounded-full bg-navy-800 hover:bg-navy-700 border border-slate-700 hover:border-cyber-cyan/50 text-cyber-cyan shadow-xl hover:shadow-glow-cyan flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        title="Call Aslam Mobiles"
        aria-label="Call shop"
      >
        <Phone className="w-5 h-5 group-hover:animate-bounce" />
        <span className="sr-only">Call Shop</span>
      </button>

      {/* Floating WhatsApp Action */}
      <a
        href={getWhatsAppUrl(WhatsAppMessages.general())}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:shadow-glow-emerald flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
        <span className="absolute right-16 bg-navy-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-navy-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
};
