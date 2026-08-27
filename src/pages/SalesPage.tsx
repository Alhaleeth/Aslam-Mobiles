import React, { useState, useMemo } from 'react';
import { Search, Filter, Smartphone, Info, Phone, MessageCircle } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { ProductCard } from '../components/cards/ProductCard';
import { SEO } from '../components/common/SEO';
import { BUSINESS_CONFIG } from '../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../utils/whatsapp';

type CategoryFilter = 'All' | 'Android' | 'Budget' | 'Mid-Range' | 'Premium' | 'Pre-Owned';

export const SalesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: CategoryFilter[] = [
    'All',
    'Budget',
    'Mid-Range',
    'Premium',
    'Pre-Owned',
  ];

  const brands = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS_DATA.forEach((p) => set.add(p.brand));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All' ||
        item.category === selectedCategory ||
        (selectedCategory === 'Android' && item.brand !== 'Apple');

      // Brand filter
      const matchesBrand =
        selectedBrand === 'All' || item.brand === selectedBrand;

      // Search query
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  return (
    <>
      <SEO
        title="Latest Smartphones at Competitive Prices | Aslam Mobiles"
        description="Browse new Android smartphones, budget phones, mid-range devices, and certified pre-owned mobiles at Aslam Mobiles. Enquire directly for live pricing and stock."
      />

      {/* Header Banner */}
      <section className="bg-navy-950 bg-tech-circuit text-white py-14 sm:py-18 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 px-3.5 py-1 rounded-full border border-cyber-cyan/30">
              Mobile Sales Division
            </span>
            <span className="text-xs font-semibold text-slate-300 bg-navy-800/80 px-3.5 py-1 rounded-full border border-navy-700">
              📍 ECR Road, Senthalaippattinam
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Latest Smartphones at <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-electric-400">Competitive Prices</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
            Discover new Android smartphones, budget options, feature-packed mid-range phones, and certified pre-owned devices at our store.
          </p>
        </div>
      </section>

      {/* Notice regarding demo data & live pricing */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-2 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Note for Customers:</strong> Phone models and prices shown below are sample catalog structures. Mobile market rates fluctuate daily; tap <strong>"Enquire on WhatsApp"</strong> or call <strong>{BUSINESS_CONFIG.phones.primary}</strong> for today's exact best quote & current stock!
          </span>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    selectedCategory === cat
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'All' ? 'All Phones' : cat}
                </button>
              ))}
            </div>

            {/* Brand Filter & Search Input */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Brand select */}
              <div className="w-full sm:w-auto flex items-center space-x-2">
                <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full sm:w-auto px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:border-electric-500"
                >
                  {brands.map((b) => (
                    <option key={b} value={b}>
                      {b === 'All' ? 'All Brands' : b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search */}
              <div className="w-full sm:w-64 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search model, RAM, brand..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-electric-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-slate-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8 max-w-lg mx-auto">
              <Smartphone className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-navy-900">No phones matching this search</h3>
              <p className="text-xs text-slate-500 mt-1">
                We might still have it in stock! Contact us directly to check immediate shop availability.
              </p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedBrand('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  Reset Filters
                </button>
                <a
                  href={getWhatsAppUrl(WhatsAppMessages.phoneEnquiry())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          )}

          {/* Bottom custom order banner */}
          <div className="mt-14 p-8 rounded-3xl bg-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-electric-400">Custom Orders & Inquiries</span>
              <h3 className="text-2xl font-black mt-1">Want a Specific Model or Color?</h3>
              <p className="text-sm text-slate-300 mt-1">
                Share the brand, model, and storage capacity you need. We source official Indian retail units at competitive prices.
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <a
                href={`tel:${BUSINESS_CONFIG.phones.primary}`}
                className="px-5 py-3 rounded-xl text-xs font-bold bg-navy-800 hover:bg-navy-700 border border-navy-700 text-white"
              >
                Call {BUSINESS_CONFIG.phones.primary}
              </a>
              <a
                href={getWhatsAppUrl(WhatsAppMessages.phoneEnquiry())}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
