import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  User, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Search,
  Sparkles
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    { name: 'Pattukkottai', role: 'Mobile Service, Sales & Display Replacement' },
    { name: 'Senthalai & Senthalaippattinam', role: 'Main Store Center on ECR Road' },
    { name: 'Senthalaivayal', role: 'Mobile Repair & Accessories' },
    { name: 'Kattumavadi', role: 'Mobile Service & Air/Bus Ticket Desk' },
    { name: 'Peravurani (Tk)', role: 'Hardware Diagnostics & Screen Repair' },
    { name: 'Sethubavachatram', role: 'Fast Display & Glass Replacement' },
    { name: 'ECR Road Corridor', role: 'Express 30-Minute Touch Screen Fix' },
  ];

  const popularKeywords = [
    'Aslam Mobile',
    'Mobile Service Pattukkottai',
    'Aslam Mobiles Senthalai',
    'Mobile Service Senthalai',
    'Mobile Service Kattumavadi',
    'Senthalaivayal Mobile Service',
    'Mobile Sales and Service Senthalai',
    'Mobile Service Center Pattukkottai',
    'Display Replacement Pattukkottai',
    'Glass Replacement Senthalai',
    'Mobile Accessories Pattukkottai',
    'Air Ticket Booking Kattumavadi',
    'Bus Ticket Booking Senthalaippattinam',
    'Mobile Repair Peravurani',
    'Best Mobile Service ECR Road',
  ];

  return (
    <footer className="bg-navy-950 bg-tech-circuit text-slate-400 border-t border-navy-800 pt-16 pb-24 md:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
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
              Your premier destination for mobile sales, certified repairs, display & glass replacements, genuine accessories, and air/bus ticket booking in <strong>Senthalai, Pattukkottai, Kattumavadi & Peravurani</strong>.
            </p>

            <div className="pt-2 border-t border-navy-800/80">
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <User className="w-4 h-4 text-electric-400" />
                <span>Owner & Lead Technician: <strong className="text-white font-semibold">{BUSINESS_CONFIG.owner}</strong></span>
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
                { name: 'About Us & Owner', path: '/about' },
                { name: 'Mobile Sales Catalog', path: '/sales' },
                { name: 'Mobile Repair & Services', path: '/services' },
                { name: 'Mobile Accessories', path: '/accessories' },
                { name: 'Digital & Travel E-Services', path: '/e-services' },
                { name: 'Book Service Request', path: '/service-request' },
                { name: 'Store Photo Gallery', path: '/gallery' },
                { name: 'Frequently Asked Questions', path: '/faq' },
                { name: 'Contact & Store Location', path: '/contact' },
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

          {/* Col 3: Core Specialized Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-electric-500 pl-3">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Display Replacement (Pattukkottai & Senthalai)',
                'OCA Glass Replacement & Touch Fix',
                'Battery Replacement & Health Diagnostics',
                'Charging Port & Type-C Repair',
                'Mic, Speaker & Audio IC Service',
                'Water Damage Recovery & Cleaning',
                'Motherboard Micro-soldering',
                'Air Ticket Booking (Domestic & International)',
                'Bus Ticket Booking (TN & Inter-state)',
                'Online E-Services & Forms Assistance'
              ].map((service, idx) => (
                <li key={idx} className="flex items-center text-slate-300 text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mr-2.5 shrink-0"></span>
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

        {/* Local SEO Coverage Section */}
        <div className="mt-12 pt-8 border-t border-navy-800 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Service Areas */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-cyber-cyan uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Primary Local Service Coverage Areas</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-navy-900/80 border border-navy-800">
                    <strong className="text-white block">{area.name}</strong>
                    <span className="text-slate-400 text-[11px]">{area.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Search Keywords */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-electric-400 uppercase tracking-wider">
                <Search className="w-3.5 h-3.5" />
                <span>Popular Local Search Queries & Categories</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {popularKeywords.map((kw, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-navy-900 border border-navy-800/90 text-slate-300 hover:text-cyber-cyan transition"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom copyright and legal disclaimer */}
        <div className="mt-8 pt-6 border-t border-navy-800/80 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {currentYear} <strong>ASLAM MOBILES</strong>. All rights reserved. Owner: {BUSINESS_CONFIG.owner}. ECR Road, Senthalaippattinam, Peravurani, Pattukkottai, Thanjavur.</p>
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
