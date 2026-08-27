import React from 'react';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-navy-950/95 text-slate-300 text-[11px] sm:text-xs border-b border-navy-800/80 py-1.5 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Quick Status & Address */}
        <div className="flex items-center space-x-3 sm:space-x-4 overflow-hidden">
          <span className="flex items-center text-cyber-cyan font-semibold shrink-0">
            <span className="relative flex h-2 w-2 mr-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="hidden sm:inline">Store Open: </span>
            <span className="text-slate-300 font-normal ml-1">9:30 AM – 9:30 PM</span>
          </span>

          <span className="text-navy-700 hidden sm:inline">•</span>

          <a 
            href={BUSINESS_CONFIG.location.googleMapsDirectionsUrlPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-slate-300 hover:text-cyber-cyan transition font-medium truncate"
            title="View Store on Google Maps"
          >
            <MapPin className="w-3 h-3 mr-1 text-cyber-cyan shrink-0" />
            <span className="truncate">ECR Road, Senthalaippattinam</span>
          </a>
        </div>

        {/* Right: Direct Dial & WhatsApp */}
        <div className="flex items-center space-x-3 shrink-0 ml-auto text-[11px] sm:text-xs">
          <div className="flex items-center space-x-1.5">
            <Phone className="w-3 h-3 text-cyber-cyan shrink-0" />
            <a
              href={`tel:${BUSINESS_CONFIG.phones.primary}`}
              className="font-semibold text-white hover:text-cyber-cyan transition"
            >
              {BUSINESS_CONFIG.phones.primary}
            </a>
          </div>

          <span className="text-navy-700 hidden sm:inline">|</span>

          <a
            href={getWhatsAppUrl(WhatsAppMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition"
          >
            <MessageCircle className="w-3 h-3 mr-1 fill-emerald-400/20 shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
