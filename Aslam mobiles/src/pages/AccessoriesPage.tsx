import React, { useState, useMemo } from 'react';
import { Headphones, Shield, Zap, BatteryCharging, MoreHorizontal, Search, MessageCircle } from 'lucide-react';
import { ACCESSORIES_DATA } from '../data/accessories';
import { AccessoryCard } from '../components/cards/AccessoryCard';
import { SEO } from '../components/common/SEO';
import { BUSINESS_CONFIG } from '../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../utils/whatsapp';
import { AccessoryCategory } from '../types';

export const AccessoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryTabs: { label: string; value: string; icon: React.ElementType }[] = [
    { label: 'All Accessories', value: 'All', icon: Headphones },
    { label: 'Protection', value: 'Protection', icon: Shield },
    { label: 'Charging', value: 'Charging', icon: Zap },
    { label: 'Audio', value: 'Audio', icon: Headphones },
    { label: 'Power', value: 'Power', icon: BatteryCharging },
    { label: 'Other Accessories', value: 'Other Accessories', icon: MoreHorizontal },
  ];

  const filteredAccessories = useMemo(() => {
    return ACCESSORIES_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.compatibility && item.compatibility.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Mobile Accessories | Chargers, Cases, Tempered Glass | Aslam Mobiles"
        description="Premium mobile accessories at Aslam Mobiles: 9D tempered glass, camera protectors, fast chargers, braided cables, TWS earbuds, power banks, and car holders."
      />

      {/* Header */}
      <section className="bg-navy-950 bg-tech-circuit text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 px-3.5 py-1 rounded-full border border-cyber-cyan/30">
              Premium Smartphone Add-ons
            </span>
            <span className="text-xs font-semibold text-slate-300 bg-navy-800/80 px-3.5 py-1 rounded-full border border-navy-700">
              📍 In-Store at ECR Road, Senthalaippattinam
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-electric-400">Accessories Collection</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
            Protect and enhance your smartphone with original-quality tempered glass, heavy-duty chargers, cables, audio gadgets, and car accessories available at our shop.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {categoryTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setSelectedCategory(tab.value)}
                    className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                      selectedCategory === tab.value
                        ? 'bg-navy-900 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="w-full lg:w-72">
              <input
                type="text"
                placeholder="Search cases, fast chargers, earbuds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-electric-500"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-slate-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAccessories.map((acc) => (
              <AccessoryCard key={acc.id} accessory={acc} />
            ))}
          </div>

          {filteredAccessories.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 max-w-md mx-auto">
              <Headphones className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-navy-900">No accessories found</h3>
              <p className="text-xs text-slate-500 mt-1">
                We carry hundreds of cases, screen protectors, and cables for various brands at our store.
              </p>
              <a
                href={getWhatsAppUrl(WhatsAppMessages.accessoryEnquiry())}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Ask via WhatsApp</span>
              </a>
            </div>
          )}

          {/* Special request callout */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Need a specific cover or tempered glass for an older model?</h3>
              <p className="text-xs text-slate-300 mt-1">
                We maintain stock for both the newest flagships and classic phone models. Contact us directly with your exact model name!
              </p>
            </div>
            <a
              href={getWhatsAppUrl(WhatsAppMessages.accessoryEnquiry())}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-electric-500 hover:bg-electric-600 text-white whitespace-nowrap"
            >
              Check Availability
            </a>
          </div>

        </div>
      </section>
    </>
  );
};
