import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, CheckCircle2, Search, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { ServiceCard } from '../components/cards/ServiceCard';
import { SEO } from '../components/common/SEO';
import { BUSINESS_CONFIG } from '../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../utils/whatsapp';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Display & Glass',
    'Battery & Power',
    'Hardware',
    'Audio & Mic',
    'Software & System',
    'General',
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((srv) => {
      const matchesCategory = selectedCategory === 'All' || srv.category === selectedCategory;
      const matchesSearch =
        srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Mobile Repair & Services | Display, Glass & Hardware | Aslam Mobiles"
        description="Comprehensive mobile repair services at Aslam Mobiles: display replacement, OCA glass replacement, battery swap, charging port, camera, water damage recovery, and micro-soldering."
      />

      {/* Header Banner */}
      <section className="bg-navy-950 bg-tech-circuit text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 px-3.5 py-1 rounded-full border border-cyber-cyan/30">
              Professional Technical Laboratory
            </span>
            <span className="text-xs font-semibold text-slate-300 bg-navy-800/80 px-3.5 py-1 rounded-full border border-navy-700">
              📍 Workshop on ECR Road, Senthalaippattinam
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Our Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-electric-400">Mobile Services</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
            Expert diagnostic and component-level repair solutions for all popular smartphone brands. Fast turnaround with tested replacement parts right on ECR Road.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/service-request"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-electric-500 hover:bg-electric-600 shadow-lg shadow-electric-500/25 transition active:scale-95 group"
            >
              <Wrench className="w-4 h-4 group-hover:rotate-12 transition" />
              <span>Book a Service Request</span>
            </Link>
            <a
              href={`tel:${BUSINESS_CONFIG.phones.primary}`}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-200 bg-navy-800 hover:bg-navy-700 border border-slate-700 hover:border-cyber-cyan/40 transition active:scale-95"
            >
              <Phone className="w-4 h-4 text-cyber-cyan animate-pulse" />
              <span>Call Technician</span>
            </a>
          </div>
        </div>
      </section>

      {/* Toolbar / Filters */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'All' ? 'All 12 Services' : cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full md:w-72">
              <input
                type="text"
                placeholder="Search display, battery, mic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-electric-500"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 bg-slate-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 max-w-md mx-auto">
              <Wrench className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-navy-900">No service matching "{searchQuery}"</h3>
              <p className="text-xs text-slate-500 mt-1">
                We handle virtually all mobile hardware & software issues. Chat with our technician directly!
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Bottom Repair Assurance Banner */}
          <div className="mt-16 p-8 rounded-3xl bg-navy-900 text-white grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-electric-500/20 text-electric-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Genuine & High-Grade Parts</h4>
                <p className="text-xs text-slate-300 mt-1">
                  We install rigorously tested displays, glass, batteries, and connectors.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Transparent Estimation</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Fair upfront estimates after diagnosis before starting any repair work.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Fast Turnaround</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Same-day or prompt service for urgent mobile repairs and screen replacements.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
