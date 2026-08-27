import React from 'react';
import { PhoneCall, MessageSquareText, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Call or WhatsApp Aslam Mobiles directly at 7904761412 or 8883871702.',
      icon: PhoneCall,
    },
    {
      number: '02',
      title: 'Tell Us Your Requirement',
      description: 'Share your mobile model, problem, accessory needed, or travel ticket booking details.',
      icon: MessageSquareText,
    },
    {
      number: '03',
      title: 'Get the Solution',
      description: 'Visit our shop on ECR Road, Senthalaippattinam or proceed with your confirmed repair service or ticket booking.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-16 bg-navy-950 bg-tech-circuit text-white border-y border-navy-800 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 px-3.5 py-1 rounded-full border border-cyber-cyan/30">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">
            How It Works
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Getting your phone serviced or booking digital services with Aslam Mobiles is easy and fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-navy-900/90 border border-navy-800 rounded-2xl p-8 relative flex flex-col items-start group hover:border-cyber-cyan/50 hover:shadow-glow-cyan/20 transition duration-300 backdrop-blur-md"
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <span className="text-3xl font-black text-cyber-cyan font-mono tracking-tight">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-electric-500/20 text-cyber-cyan flex items-center justify-center group-hover:scale-110 transition shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
