import React from 'react';
import { MessageCircle, CheckCircle2, Tag } from 'lucide-react';
import { Accessory } from '../../types';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';
import { handleImageError } from '../../utils/imageFallback';

interface AccessoryCardProps {
  accessory: Accessory;
}

export const AccessoryCard: React.FC<AccessoryCardProps> = ({ accessory }) => {
  const whatsappUrl = getWhatsAppUrl(
    WhatsAppMessages.accessoryEnquiry(accessory.name, accessory.category)
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-card-hover hover:border-cyber-cyan/50 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden group">
      
      {/* Image and Category Badge */}
      <div className="relative h-48 w-full bg-slate-50 overflow-hidden flex items-center justify-center p-4">
        <img
          src={accessory.image}
          alt={accessory.name}
          loading="lazy"
          onError={(e) => handleImageError(e, 'accessory')}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy-900/90 text-white backdrop-blur-md">
          {accessory.category}
        </span>
        <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
          {accessory.stockStatus}
        </span>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-navy-900 group-hover:text-electric-600 transition line-clamp-1">
            {accessory.name}
          </h3>

          <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
            {accessory.description}
          </p>

          {accessory.compatibility && (
            <div className="mt-3 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 line-clamp-1">
              <strong>Fit:</strong> {accessory.compatibility}
            </div>
          )}
        </div>

        {/* Price & Action */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-medium">Starting from</span>
            <span className="text-base font-extrabold text-navy-900">
              ₹{Number(accessory.price).toLocaleString('en-IN')}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition shadow-sm active:scale-95"
            title="Enquire on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
            <span>Enquire</span>
          </a>
        </div>

      </div>

    </div>
  );
};
