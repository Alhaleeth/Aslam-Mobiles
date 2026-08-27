import React from 'react';
import { Wrench, ShieldCheck, Headphones, Globe, HeartHandshake } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustCards = [
    {
      icon: Wrench,
      title: 'Expert Mobile Service',
      description: 'Professional solutions for common and advanced mobile problems, diagnosed with precision equipment.',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Replacement',
      description: 'Display, glass, battery and other replacement services using tested, high-grade components.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
    },
    {
      icon: Headphones,
      title: 'Genuine Accessories',
      description: 'Mobile accessories for different brands and models including fast chargers, cables, and cases.',
      color: 'text-purple-500',
      bg: 'bg-purple-50',
    },
    {
      icon: Globe,
      title: 'Complete Digital Services',
      description: 'Air tickets, bus tickets and various online services handled conveniently under one roof.',
      color: 'text-cyan-500',
      bg: 'bg-cyan-50',
    },
    {
      icon: HeartHandshake,
      title: 'Customer First',
      description: 'Fast response, transparent communication and reliable service built on direct personal trust.',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 bg-tech-grid border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-electric-600 bg-electric-50 px-3.5 py-1.5 rounded-full border border-electric-100 shadow-sm">
            Commitment to Excellence • Senthalaippattinam
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mt-3 tracking-tight">
            Why Choose Aslam Mobiles?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Combining dependable mobile repair engineering, honest component pricing, and trusted customer service right on ECR Road.
          </p>
        </div>

        {/* 5 Cards Grid - Equal Heights & Aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-subtle hover:shadow-card-hover hover:border-electric-500/40 transition-all duration-300 flex flex-col items-center text-center justify-between group h-full"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition duration-300 shadow-sm`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-auto">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
