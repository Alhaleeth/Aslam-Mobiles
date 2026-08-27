import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Wrench, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Smartphone, 
  User, 
  Phone, 
  Calendar, 
  FileText,
  MessageSquare
} from 'lucide-react';
import { ServiceRequest } from '../../types';
import { WhatsAppMessages, openWhatsApp } from '../../utils/whatsapp';

const SERVICE_OPTIONS = [
  'Display Replacement',
  'Glass Replacement',
  'Battery Replacement',
  'Charging Port Repair',
  'Speaker Repair',
  'Mic Repair',
  'Camera Repair',
  'Software Service',
  'Hardware / Motherboard',
  'Water Damage Service',
  'General Repair',
  'Other'
];

const POPULAR_BRANDS = [
  'Samsung',
  'Xiaomi / Redmi',
  'Vivo',
  'Oppo',
  'Realme',
  'OnePlus',
  'Apple (iPhone)',
  'Motorola',
  'Poco',
  'Infinix',
  'Other Brand'
];

export const ServiceRequestForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';

  const [formData, setFormData] = useState<Partial<ServiceRequest>>({
    customerName: '',
    phone: '',
    deviceBrand: '',
    deviceModel: '',
    serviceRequired: initialService || 'Display Replacement',
    problemDescription: '',
    preferredContactMethod: 'WhatsApp',
    preferredDate: '',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.customerName?.trim()) {
      errs.customerName = 'Please enter your name';
    }
    if (!formData.phone?.trim()) {
      errs.phone = 'Please enter your mobile phone number';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.deviceBrand?.trim()) {
      errs.deviceBrand = 'Please select or enter your device brand';
    }
    if (!formData.deviceModel?.trim()) {
      errs.deviceModel = 'Please enter your device model name';
    }
    if (!formData.serviceRequired?.trim()) {
      errs.serviceRequired = 'Please select a required service';
    }
    if (!formData.problemDescription?.trim()) {
      errs.problemDescription = 'Please describe the problem you are experiencing';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save to local storage for admin-ready persistence
    try {
      const existing = JSON.parse(localStorage.getItem('aslam_service_requests') || '[]');
      const newRecord: ServiceRequest = {
        id: 'REQ-' + Date.now(),
        customerName: formData.customerName || '',
        phone: formData.phone || '',
        deviceBrand: formData.deviceBrand || '',
        deviceModel: formData.deviceModel || '',
        serviceRequired: formData.serviceRequired || '',
        problemDescription: formData.problemDescription || '',
        preferredContactMethod: formData.preferredContactMethod || 'WhatsApp',
        preferredDate: formData.preferredDate || new Date().toISOString().split('T')[0],
        additionalNotes: formData.additionalNotes || '',
        status: 'Pending',
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem('aslam_service_requests', JSON.stringify([newRecord, ...existing]));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }

    // Build WhatsApp message & redirect
    const msg = WhatsAppMessages.serviceRequest(formData);
    openWhatsApp(msg);

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 p-8 shadow-card text-center max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900">Service Request Initiated!</h3>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Thank you <strong>{formData.customerName}</strong>. Your repair details have been prepared and sent via WhatsApp to Aslam Mobiles. Our technician will review your request and get back to you promptly.
        </p>
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                customerName: '',
                phone: '',
                deviceBrand: '',
                deviceModel: '',
                serviceRequired: 'Display Replacement',
                problemDescription: '',
                preferredContactMethod: 'WhatsApp',
                preferredDate: '',
                additionalNotes: '',
              });
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 transition"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-card">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center space-x-2 text-electric-600 font-semibold text-xs uppercase tracking-wider">
          <Wrench className="w-4 h-4" />
          <span>Direct Repair Consultation</span>
        </div>
        <h2 className="text-2xl font-black text-navy-900 mt-1">
          Request Mobile Service
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Fill in your phone details below. Once submitted, it forwards your request directly to our technician via WhatsApp for fastest confirmation.
        </p>
      </div>

      <div className="space-y-6">
        
        {/* Customer Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Customer Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={formData.customerName || ''}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                placeholder="Your full name"
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition ${
                  errors.customerName 
                    ? 'border-red-400 focus:ring-red-200' 
                    : 'border-slate-300 focus:border-electric-500 focus:ring-electric-100'
                }`}
              />
            </div>
            {errors.customerName && (
              <p className="text-xs text-red-500 mt-1 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.customerName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Mobile Number *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="tel"
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="10-digit mobile number"
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition ${
                  errors.phone 
                    ? 'border-red-400 focus:ring-red-200' 
                    : 'border-slate-300 focus:border-electric-500 focus:ring-electric-100'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Device Brand & Model */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Device Brand *
            </label>
            <div className="relative">
              <Smartphone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <select
                value={formData.deviceBrand || ''}
                onChange={(e) => setFormData({ ...formData, deviceBrand: e.target.value })}
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition bg-white ${
                  errors.deviceBrand 
                    ? 'border-red-400 focus:ring-red-200' 
                    : 'border-slate-300 focus:border-electric-500 focus:ring-electric-100'
                }`}
              >
                <option value="">Select Brand</option>
                {POPULAR_BRANDS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            {errors.deviceBrand && (
              <p className="text-xs text-red-500 mt-1 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.deviceBrand}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Mobile Model *
            </label>
            <input
              type="text"
              value={formData.deviceModel || ''}
              onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
              placeholder="e.g. Galaxy A15 / Redmi Note 13"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition ${
                errors.deviceModel 
                  ? 'border-red-400 focus:ring-red-200' 
                  : 'border-slate-300 focus:border-electric-500 focus:ring-electric-100'
              }`}
            />
            {errors.deviceModel && (
              <p className="text-xs text-red-500 mt-1 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.deviceModel}
              </p>
            )}
          </div>
        </div>

        {/* Service Required Dropdown */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Service Required *
          </label>
          <select
            value={formData.serviceRequired || ''}
            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition bg-white ${
              errors.serviceRequired 
                ? 'border-red-400 focus:ring-red-200' 
                : 'border-slate-300 focus:border-electric-500 focus:ring-electric-100'
            }`}
          >
            {SERVICE_OPTIONS.map((srv) => (
              <option key={srv} value={srv}>{srv}</option>
            ))}
          </select>
          {errors.serviceRequired && (
            <p className="text-xs text-red-500 mt-1 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.serviceRequired}
            </p>
          )}
        </div>

        {/* Problem Description */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Problem Description *
          </label>
          <textarea
            rows={3}
            value={formData.problemDescription || ''}
            onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
            placeholder="Describe what happened (e.g., dropped on concrete, black display lines, phone not charging, liquid spill...)"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition ${
              errors.problemDescription 
                ? 'border-red-400 focus:ring-red-200' 
                : 'border-slate-300 focus:border-electric-500 focus:ring-electric-100'
            }`}
          />
          {errors.problemDescription && (
            <p className="text-xs text-red-500 mt-1 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.problemDescription}
            </p>
          )}
        </div>

        {/* Preferred Date & Preferred Contact Method */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Preferred Visit Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="date"
                value={formData.preferredDate || ''}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-100 bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, preferredContactMethod: 'WhatsApp' })}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex items-center justify-center space-x-1.5 transition ${
                  formData.preferredContactMethod === 'WhatsApp'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300 ring-2 ring-emerald-100'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, preferredContactMethod: 'Phone Call' })}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex items-center justify-center space-x-1.5 transition ${
                  formData.preferredContactMethod === 'Phone Call'
                    ? 'bg-blue-50 text-blue-700 border-blue-300 ring-2 ring-blue-100'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Phone Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Additional Notes (Optional)
          </label>
          <input
            type="text"
            value={formData.additionalNotes || ''}
            onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
            placeholder="e.g. Need urgent repair before evening, have backup phone, etc."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-100"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-electric-500 hover:bg-electric-600 shadow-md shadow-electric-500/25 active:scale-[0.99] transition cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Submit Service Request</span>
          </button>
          <p className="text-[11px] text-slate-400 text-center mt-2.5">
            Opens WhatsApp to forward your details directly to Aslam Mobiles for immediate review.
          </p>
        </div>

      </div>
    </form>
  );
};
