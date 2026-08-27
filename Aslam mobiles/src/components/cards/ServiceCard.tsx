import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Wrench, ArrowRight } from 'lucide-react';
import { Service } from '../../types';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';
import { handleImageError } from '../../utils/imageFallback';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const whatsappUrl = getWhatsAppUrl(WhatsAppMessages.repairEnquiry(service.name));

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-card-hover hover:border-cyber-cyan/60 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden group">
      
      {/* Service Image Header with Category Badge */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          onError={(e) => handleImageError(e, 'repair')}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"></div>
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-navy-900/90 text-white backdrop-blur-md border border-white/10 shadow-sm">
          {service.category}
        </span>
        <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/90 text-white shadow-sm">
          Genuine Spares
        </span>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-navy-900 group-hover:text-electric-600 transition tracking-tight">
            {service.name}
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key Highlights */}
          {service.highlights && service.highlights.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Service Highlights:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {service.highlights.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-electric-500 mr-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons - Pinned to bottom */}
        <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition active:scale-95"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-600/20 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <Link
            to={`/service-request?service=${encodeURIComponent(service.name)}`}
            className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-navy-900 hover:bg-electric-600 transition active:scale-95 shadow-sm"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Book Repair</span>
          </Link>
        </div>

      </div>

    </div>
  );
};
