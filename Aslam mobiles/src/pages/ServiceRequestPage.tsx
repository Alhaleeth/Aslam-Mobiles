import React from 'react';
import { Wrench, Clock, CheckCircle2, ShieldCheck, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { ServiceRequestForm } from '../components/forms/ServiceRequestForm';
import { SEO } from '../components/common/SEO';
import { BUSINESS_CONFIG } from '../config/business';

export const ServiceRequestPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Request Mobile Repair & Service | Aslam Mobiles"
        description="Book your mobile repair online with Aslam Mobiles. Fast turnaround, transparent estimates, and genuine parts for display, glass, and battery replacements."
      />

      {/* Header */}
      <section className="bg-navy-950 bg-tech-circuit text-white py-12 sm:py-16 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-cyan/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 px-3.5 py-1 rounded-full border border-cyber-cyan/30">
              Fast Booking & Turnaround
            </span>
            <span className="text-xs font-semibold text-slate-300 bg-navy-800/80 px-3.5 py-1 rounded-full border border-navy-700">
              📍 Workshop on ECR Road, Senthalaippattinam
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-electric-400">Service Request</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
            Schedule a diagnostic checkup or repair consultation. Drop off at our ECR Road center or consult our technician directly.
          </p>
        </div>
      </section>

      {/* Form & Guidelines Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 7 Columns: Form */}
            <div className="lg:col-span-7">
              <ServiceRequestForm />
            </div>

            {/* Right 5 Columns: Repair Workflow & Assurance */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Emergency Call Box */}
              <div className="p-6 rounded-2xl bg-navy-900 text-white border border-navy-800 shadow-card">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <Phone className="w-4 h-4" />
                  <span>Immediate Phone Support</span>
                </div>
                <h3 className="text-lg font-black mt-1">Need Urgent Same-Day Service?</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  If your phone is completely dead or you need immediate emergency repair, call our technician directly for instant triage:
                </p>
                <div className="mt-4 pt-3 border-t border-navy-800 space-y-2">
                  <a
                    href={`tel:${BUSINESS_CONFIG.phones.primary}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-navy-800 hover:bg-navy-700 transition"
                  >
                    <span className="text-xs text-slate-300">Direct Call (Primary):</span>
                    <strong className="text-white text-sm">{BUSINESS_CONFIG.phones.primary}</strong>
                  </a>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phones.secondary}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-navy-800 hover:bg-navy-700 transition"
                  >
                    <span className="text-xs text-slate-300">Secondary Line:</span>
                    <strong className="text-white text-sm">{BUSINESS_CONFIG.phones.secondary}</strong>
                  </a>
                </div>
              </div>

              {/* Service Guidelines */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
                  Important Repair Guidelines
                </h4>
                
                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Data Backup:</strong> Whenever your device allows, please create a backup of your personal photos and chats before handing over for hardware service.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Transparent Testing:</strong> All replacement parts (screens, batteries, ports) are tested thoroughly prior to customer handover.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Water Damage Notice:</strong> If your phone was submerged in liquid, do NOT attempt to charge it. Bring it in immediately for ultrasonic cleaning.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Legitimate Unlocking:</strong> Pattern/account access support requires proof of device ownership.</span>
                  </li>
                </ul>
              </div>

              {/* Working Hours */}
              <div className="p-5 rounded-2xl bg-slate-100/90 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-navy-900 flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-electric-600" />
                  <span>Shop Timings:</span>
                </div>
                <div>{BUSINESS_CONFIG.workingHours.days}: {BUSINESS_CONFIG.workingHours.timings}</div>
                <div>Sunday: {BUSINESS_CONFIG.workingHours.sunday}</div>
                <div className="pt-2 text-[11px] text-slate-500">
                  Owner: <strong>{BUSINESS_CONFIG.owner}</strong> — ASLAM MOBILES
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};
