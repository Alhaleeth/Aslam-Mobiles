import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Wrench, ChevronUp, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';

export const MobileBottomBar: React.FC = () => {
  const [callDrawerOpen, setCallDrawerOpen] = useState(false);

  return (
    <>
      {/* Call Selector Drawer Modal (Mobile) */}
      {callDrawerOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center md:hidden p-4"
          onClick={() => setCallDrawerOpen(false)}
        >
          <div 
            className="w-full max-w-sm bg-navy-900 border border-navy-700 rounded-2xl p-5 shadow-2xl text-white space-y-4 animate-in slide-in-from-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-navy-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-electric-500/20 text-electric-400 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base">Call Aslam Mobiles</h3>
              </div>
              <button 
                onClick={() => setCallDrawerOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Tap a phone number to directly dial our shop:
            </p>

            <div className="space-y-2.5">
              <a
                href={`tel:${BUSINESS_CONFIG.phones.primary}`}
                className="flex items-center justify-between w-full p-3 bg-navy-800 hover:bg-navy-700 border border-navy-700 rounded-xl transition"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <div className="text-left">
                    <div className="text-xs text-slate-400">Primary Number</div>
                    <div className="font-semibold text-white">{BUSINESS_CONFIG.phones.primary}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg">
                  Call
                </span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phones.secondary}`}
                className="flex items-center justify-between w-full p-3 bg-navy-800 hover:bg-navy-700 border border-navy-700 rounded-xl transition"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <div className="text-left">
                    <div className="text-xs text-slate-400">Secondary Number</div>
                    <div className="font-semibold text-white">{BUSINESS_CONFIG.phones.secondary}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg">
                  Call
                </span>
              </a>
            </div>

            <div className="pt-2 border-t border-navy-800 text-[11px] text-cyber-cyan text-center font-medium">
              📍 ECR Road, Senthalaippattinam, Peravurani
            </div>
          </div>
        </div>
      )}

      {/* Sticky Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-lg border-t border-navy-800 py-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          
          {/* 1. Call Button */}
          <button
            onClick={() => setCallDrawerOpen(true)}
            className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-navy-800 text-white border border-navy-700 active:scale-95 transition font-semibold text-xs shadow-sm"
          >
            <Phone className="w-4 h-4 text-electric-400 animate-pulse" />
            <span>Call Now</span>
          </button>

          {/* 2. WhatsApp Button */}
          <a
            href={getWhatsAppUrl(WhatsAppMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white active:scale-95 transition font-semibold text-xs shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>WhatsApp</span>
          </a>

          {/* 3. Services / Repair Button */}
          <Link
            to="/services"
            className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white active:scale-95 transition font-semibold text-xs shadow-sm"
          >
            <Wrench className="w-4 h-4" />
            <span>Services</span>
          </Link>

        </div>
      </div>
    </>
  );
};
