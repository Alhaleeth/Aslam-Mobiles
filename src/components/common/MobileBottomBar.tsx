import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Wrench, ClipboardList, Home, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';

export const MobileBottomBar: React.FC = () => {
  const [callDrawerOpen, setCallDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Call Selector Drawer Modal (Mobile) */}
      {callDrawerOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center md:hidden p-4 animate-in fade-in duration-200"
          onClick={() => setCallDrawerOpen(false)}
        >
          <div 
            className="w-full max-w-sm bg-navy-950 border border-navy-700 rounded-3xl p-5 shadow-2xl text-white space-y-4 animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-navy-800 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-electric-500/20 text-cyber-cyan flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Direct Phone Lines</h3>
                  <p className="text-[10px] text-slate-400">Aslam Mobiles • {BUSINESS_CONFIG.owner}</p>
                </div>
              </div>
              <button 
                onClick={() => setCallDrawerOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-navy-900"
                aria-label="Close call drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Tap below to directly call technician {BUSINESS_CONFIG.owner}:
            </p>

            <div className="space-y-2.5">
              <a
                href={`tel:${BUSINESS_CONFIG.phones.primary}`}
                className="flex items-center justify-between w-full p-3 bg-navy-900 hover:bg-navy-800 border border-navy-700/80 rounded-2xl transition active:scale-98"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase">Primary Helpline</div>
                    <div className="font-bold text-sm text-white">{BUSINESS_CONFIG.phones.primary}</div>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-xl border border-emerald-500/30">
                  Call
                </span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phones.secondary}`}
                className="flex items-center justify-between w-full p-3 bg-navy-900 hover:bg-navy-800 border border-navy-700/80 rounded-2xl transition active:scale-98"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-electric-500/20 text-cyber-cyan flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase">Secondary Line</div>
                    <div className="font-bold text-sm text-white">{BUSINESS_CONFIG.phones.secondary}</div>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-electric-500/20 text-cyber-cyan rounded-xl border border-cyber-cyan/30">
                  Call
                </span>
              </a>
            </div>

            <div className="pt-2 border-t border-navy-800/80 text-[11px] text-cyber-cyan text-center font-medium">
              📍 ECR Road, Senthalaippattinam, Peravurani (Tk)
            </div>
          </div>
        </div>
      )}

      {/* Sticky Mobile Bottom Navigation Bar (4-Tab Native App Layout) */}
      <nav 
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-xl border-t border-navy-800/90 py-1.5 px-2 shadow-[0_-4px_25px_rgba(0,0,0,0.4)]"
        style={{ paddingBottom: 'max(0.375rem, env(safe-area-inset-bottom, 0px))' }}
      >
        <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
          
          {/* Tab 1: Home / Services */}
          <Link
            to="/"
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition ${
              location.pathname === '/' 
                ? 'text-cyber-cyan font-bold' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Home className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] tracking-tight">Home</span>
          </Link>

          {/* Tab 2: Services */}
          <Link
            to="/services"
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition ${
              location.pathname === '/services' 
                ? 'text-cyber-cyan font-bold' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Wrench className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] tracking-tight">Services</span>
          </Link>

          {/* Tab 3: Call Selector */}
          <button
            onClick={() => setCallDrawerOpen(true)}
            className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-400 hover:text-cyber-cyan transition active:scale-95"
            aria-label="Call shop"
          >
            <Phone className="w-5 h-5 mb-0.5 text-cyber-cyan animate-pulse" />
            <span className="text-[10px] tracking-tight">Call</span>
          </button>

          {/* Tab 4: WhatsApp */}
          <a
            href={getWhatsAppUrl(WhatsAppMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-emerald-400 hover:text-emerald-300 transition active:scale-95"
            aria-label="WhatsApp chat"
          >
            <MessageCircle className="w-5 h-5 mb-0.5 fill-emerald-500/20" />
            <span className="text-[10px] tracking-tight font-semibold">WhatsApp</span>
          </a>

        </div>
      </nav>
    </>
  );
};
