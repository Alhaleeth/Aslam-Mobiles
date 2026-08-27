import React from 'react';
import { MessageCircle, Phone, Cpu, HardDrive, Palette, CheckCircle, Info } from 'lucide-react';
import { Product } from '../../types';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';
import { handleImageError } from '../../utils/imageFallback';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = getWhatsAppUrl(
    WhatsAppMessages.phoneEnquiry(product.name, product.model, product.offerPrice || product.price)
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-card-hover hover:border-cyber-cyan/50 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden group">
      
      {/* Product Image & Badges */}
      <div className="relative h-56 w-full bg-slate-50 p-6 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => handleImageError(e, 'phone')}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* Top left category badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase bg-navy-900 text-white shadow-sm">
          {product.category}
        </span>

        {/* Condition / Demo indicator */}
        {product.isSampleData && (
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
            Demo Listing
          </span>
        )}

        {/* Stock Status Badge */}
        <span className={`absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-semibold flex items-center space-x-1 ${
          product.stockStatus === 'In Stock' 
            ? 'bg-emerald-100 text-emerald-800' 
            : 'bg-blue-100 text-blue-800'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          <span>{product.stockStatus}</span>
        </span>
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-semibold text-electric-600 uppercase tracking-wider">
            {product.brand}
          </div>
          <h3 className="text-base font-bold text-navy-900 mt-1 line-clamp-1 group-hover:text-electric-600 transition">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 mt-1 font-mono">
            Model: {product.model}
          </p>

          {/* Specs Pills */}
          <div className="grid grid-cols-2 gap-2 mt-3.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
            <div className="flex items-center space-x-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg">
              <Cpu className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>RAM: <strong>{product.ram}</strong></span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg">
              <HardDrive className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>ROM: <strong>{product.storage}</strong></span>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 text-xs text-slate-500 mt-2">
            <Palette className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="line-clamp-1">Colors: {product.color}</span>
          </div>

          {/* Price Box */}
          <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-medium">
                {product.isSampleData ? 'Estimated / Sample Price' : 'Store Price'}
              </span>
              <div className="flex items-baseline space-x-2">
                <span className="text-lg font-black text-navy-900">
                  ₹{Number(product.offerPrice || product.price).toLocaleString('en-IN')}
                </span>
                {product.offerPrice && (
                  <span className="text-xs text-slate-400 line-through">
                    ₹{Number(product.price).toLocaleString('en-IN')}
                  </span>
                )}
              </div>
            </div>
            <div className="text-[10px] text-slate-500 text-right max-w-[90px] leading-tight">
              Contact shop for live offer
            </div>
          </div>

          <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center space-x-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition shadow-sm active:scale-95"
            title="Enquire price on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Enquire on WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phones.primary}`}
            className="p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition"
            title="Direct Call"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

      </div>

    </div>
  );
};
