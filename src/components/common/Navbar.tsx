import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Smartphone, 
  Wrench, 
  Headphones, 
  Globe, 
  Menu, 
  X, 
  ChevronRight,
  ClipboardList,
  MapPin,
  PhoneCall,
  MessageCircle,
  HelpCircle,
  Image as GalleryIcon,
  Info
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Clean, focused navigation links with generous spacing
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Mobiles', path: '/sales' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Digital Services', path: '/e-services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Mobile drawer links with clean icons
  const mobileDrawerLinks = [
    { name: 'Home', path: '/', icon: Smartphone },
    { name: 'Mobile Repair Services', path: '/services', icon: Wrench, badge: 'Expert' },
    { name: 'Smartphone Sales', path: '/sales', icon: Smartphone },
    { name: 'Accessories & Gadgets', path: '/accessories', icon: Headphones },
    { name: 'Digital & Travel Services', path: '/e-services', icon: Globe },
    { name: 'About Business & Owner', path: '/about', icon: Info },
    { name: 'Store Photo Gallery', path: '/gallery', icon: GalleryIcon },
    { name: 'Frequently Asked Questions', path: '/faq', icon: HelpCircle },
    { name: 'Contact & Store Location', path: '/contact', icon: MapPin },
  ];

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-navy-950/90 backdrop-blur-xl border-b border-navy-800/80 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* 1. Brand Logo: Clean & Spacious */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group shrink-0" 
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-cyan to-electric-600 flex items-center justify-center shadow-md shadow-cyber-cyan/20 group-hover:scale-105 transition-transform duration-300">
              <Smartphone className="w-5 h-5 text-navy-950 font-black" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-sans">
                ASLAM <span className="text-cyber-cyan">MOBILES</span>
              </span>
              <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                Sales • Service • Accessories
              </p>
            </div>
          </Link>

          {/* 2. Desktop Navigation: Spacious, uncluttered links with generous breathing room */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-200 py-1.5 relative ${
                    isActive
                      ? 'text-cyber-cyan font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyber-cyan after:rounded-full after:shadow-[0_0_8px_#00E5FF]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* 3. Right Action: Single, clean, high-impact CTA button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/service-request"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-navy-950 bg-cyber-cyan hover:bg-white shadow-md shadow-cyber-cyan/20 transition-all hover:scale-105 active:scale-95"
            >
              <ClipboardList className="w-4 h-4 text-navy-950" />
              <span>Book Repair</span>
            </Link>
          </div>

          {/* 4. Mobile & Tablet Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2.5">
            <Link
              to="/service-request"
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-navy-950 bg-cyber-cyan hover:bg-white shadow-sm transition active:scale-95"
            >
              Repair
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-navy-900 border border-navy-800 hover:border-cyber-cyan/40 focus:outline-none transition active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyber-cyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Mobile & Tablet Slide-out Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="w-full max-w-sm bg-navy-950 border-l border-navy-800 h-full flex flex-col justify-between shadow-2xl p-6 overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-navy-800 pb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyber-cyan/20 text-cyber-cyan flex items-center justify-center font-bold">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-base leading-tight">ASLAM MOBILES</h3>
                    <p className="text-[10px] text-cyber-cyan font-medium">ECR Road, Senthalaippattinam</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-navy-900"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1.5">
                {mobileDrawerLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                        isActive
                          ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30'
                          : 'text-slate-300 hover:bg-navy-900 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-cyber-cyan' : 'text-slate-400'}`} />
                        <span>{link.name}</span>
                      </div>
                      {link.badge ? (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-electric-500/20 text-electric-400 border border-electric-500/30">
                          {link.badge}
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-600" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-navy-800 space-y-3 mt-6">
              <Link
                to="/service-request"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold text-navy-950 bg-cyber-cyan hover:bg-white transition shadow-lg shadow-cyber-cyan/20 active:scale-95"
              >
                <Wrench className="w-4 h-4" />
                <span>Request Mobile Repair</span>
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_CONFIG.phones.primary}`}
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-slate-200 bg-navy-900 hover:bg-navy-800 border border-navy-800 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>{BUSINESS_CONFIG.phones.primary}</span>
                </a>
                <a
                  href={getWhatsAppUrl(WhatsAppMessages.general())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <p className="text-[10px] text-slate-400 text-center pt-1">
                📍 ECR Road, Senthalaippattinam • Peravurani (Tk)
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
