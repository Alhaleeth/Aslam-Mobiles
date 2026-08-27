import React from 'react';
import { MessageCircle, Phone, CheckCircle2, Globe, Shield } from 'lucide-react';
import { DigitalService } from '../../types';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';
import { handleImageError } from '../../utils/imageFallback';

interface DigitalServiceCardProps {
  service: DigitalService;
}

export const DigitalServiceCard: React.FC<DigitalServiceCardProps> = ({ service }) => {
  const whatsappUrl = getWhatsAppUrl(
    WhatsAppMessages.digitalServiceEnquiry(service.name)
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-card-hover hover:border-cyber-cyan/50 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden group">
      
      {/* Header Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          onError={(e) => handleImageError(e, 'store')}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-electric-500 text-white shadow-md">
          {service.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-navy-900 group-hover:text-electric-600 transition tracking-tight">
            {service.name}
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {service.description}
          </p>

          {/* Features list */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Assistance Covers:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition shadow-sm active:scale-95"
            title="Enquire on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
            <span>{service.ctaText || 'Enquire Now'}</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phones.primary}`}
            className="p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition"
            title="Direct Call"
          >
            <Phone className="w-4 h-4 text-electric-600" />
          </a>
        </div>

      </div>

    </div>
  );
};
