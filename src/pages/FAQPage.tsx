import React, { useState } from 'react';
import { HelpCircle, Search, Phone, MessageCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/faqs';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { SEO } from '../components/common/SEO';
import { BUSINESS_CONFIG } from '../config/business';
import { WhatsAppMessages, getWhatsAppUrl } from '../utils/whatsapp';

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Repair & Service', 'Mobile Sales', 'Accessories', 'E-Services', 'General'];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Frequently Asked Questions | Aslam Mobiles"
        description="Frequently asked questions about phone repairs, screen replacements, accessories, price enquiries, and travel bookings at Aslam Mobiles."
      />

      {/* Header */}
      <section className="bg-navy-950 bg-tech-circuit text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 px-3.5 py-1 rounded-full border border-cyber-cyan/30">
              Clear Answers
            </span>
            <span className="text-xs font-semibold text-slate-300 bg-navy-800/80 px-3.5 py-1 rounded-full border border-navy-700">
              📍 ECR Road, Senthalaippattinam
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-electric-400">Questions</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
            Find prompt answers about our repair procedures, phone pricing policies, accessory stock, and visiting our shop on ECR Road.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50 min-h-[500px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Category Filter */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-subtle mb-10 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search your question (e.g., display, glass, prices, brands)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-electric-500"
              />
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? 'bg-navy-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion */}
          {filteredFaqs.length > 0 ? (
            <FAQAccordion items={filteredFaqs} defaultOpenIndex={0} />
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-navy-900">No question matched your query</h3>
              <p className="text-xs text-slate-500 mt-1">
                You can ask us directly anytime via call or WhatsApp.
              </p>
              <a
                href={getWhatsAppUrl(WhatsAppMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          )}

          {/* Bottom Help Box */}
          <div className="mt-14 p-8 rounded-3xl bg-navy-900 text-white text-center">
            <h3 className="text-xl font-bold">Still Have a Question?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mt-1">
              Owner <strong>{BUSINESS_CONFIG.owner}</strong> and our staff will be glad to assist with any query.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phones.primary}`}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-navy-900 hover:bg-slate-100"
              >
                <Phone className="w-3.5 h-3.5 text-electric-600" />
                <span>Call {BUSINESS_CONFIG.phones.primary}</span>
              </a>

              <a
                href={getWhatsAppUrl(WhatsAppMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
