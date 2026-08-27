import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  User, 
  Wrench, 
  Headphones, 
  Globe, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 bg-tech-circuit text-slate-400 border-t border-navy-800 pt-16 pb-24 md:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Owner */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-cyan to-electric-600 flex items-center justify-center text-white shadow-md">
                <Smartphone className="w-5 h-5 text-navy-950" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-wider">
                  ASLAM <span className="text-cyber-cyan">MOBILES</span>
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Sales • Service • Accessories • E-Services
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Your trusted mobile sales, service, accessories and digital solutions center. Providing professional repairs, quality parts, and prompt digital services under one roof.
            </p>

            <div className="pt-2 border-t border-navy-800/80">
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <User className="w-4 h-4 text-electric-400" />
                <span>Owner: <strong className="text-white font-semibold">{BUSINESS_CONFIG.owner}</strong></span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-electric-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Mobile Sales', path: '/sales' },
                { name: 'Mobile Repair & Services', path: '/services' },
                { name: 'Mobile Accessories', path: '/accessories' },
                { name: 'Digital & E-Services', path: '/e-services' },
                { name: 'Service Request', path: '/service-request' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center text-slate-400 hover:text-white hover:translate-x-1 transition duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-electric-500" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-electric-500 pl-3">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Display Replacement',
                'Precision Glass Replacement',
                'Battery Replacement',
                'Charging Port Repair',
                'Mic & Speaker Repair',
                'Water Damage Treatment',
                'Motherboard Micro-soldering',
                'Air Ticket Booking Assistance',
                'Bus Ticket Booking Assistance',
                'Online Application Services'
              ].map((service, idx) => (
                <li key={idx} className="flex items-center text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-400 mr-2.5"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-electric-500 pl-3">
              Direct Contact
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-electric-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Direct Phone Calls:</div>
                  <a href={`tel:${BUSINESS_CONFIG.phones.primary}`} className="block text-white font-semibold hover:text-electric-400 transition">
                    {BUSINESS_CONFIG.phones.displayPrimary}
                  </a>
                  <a href={`tel:${BUSINESS_CONFIG.phones.secondary}`} className="block text-white font-semibold hover:text-electric-400 transition">
                    {BUSINESS_CONFIG.phones.displaySecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">WhatsApp Fast Chat:</div>
                  <a
                    href={getWhatsAppUrl(WhatsAppMessages.general())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-semibold hover:underline"
                  >
                    +91 {BUSINESS_CONFIG.whatsapp.number}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-electric-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Store Hours:</div>
                  <div className="text-slate-300">{BUSINESS_CONFIG.workingHours.days}</div>
                  <div className="text-white font-medium">{BUSINESS_CONFIG.workingHours.timings}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{BUSINESS_CONFIG.workingHours.sunday}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyber-cyan mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Store Location:</div>
                  <div className="text-white text-xs font-semibold leading-relaxed mt-1">
                    {BUSINESS_CONFIG.location.addressPlaceholder}
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    Landmark: {BUSINESS_CONFIG.location.landmarkPlaceholder}
                  </div>
                  <a
                    href={BUSINESS_CONFIG.location.googleMapsDirectionsUrlPlaceholder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyber-cyan hover:underline mt-1.5 inline-block font-semibold"
                  >
                    Get Google Maps Directions &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal disclaimer */}
        <div className="mt-12 pt-8 border-t border-navy-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {currentYear} <strong>ASLAM MOBILES</strong>. All rights reserved. Owner: {BUSINESS_CONFIG.owner}.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              Genuine Spare Parts & Certified Diagnostics
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
