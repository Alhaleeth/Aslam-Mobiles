import React, { useState } from 'react';
import { Send, CheckCircle, MessageSquare, Phone, User, Mail, HelpCircle } from 'lucide-react';
import { WhatsAppMessages, openWhatsApp } from '../../utils/whatsapp';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Mobile Repair Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const formattedMessage = [
      `*GENERAL ENQUIRY - ASLAM MOBILES*`,
      `👤 Name: ${name}`,
      `📞 Phone: ${phone}`,
      `📌 Subject: ${subject}`,
      message ? `💬 Message: ${message}` : '',
    ].filter(Boolean).join('\n');

    openWhatsApp(formattedMessage);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 p-8 shadow-card text-center">
        <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-navy-900">Message Prepared!</h3>
        <p className="text-sm text-slate-600 mt-1">
          Your enquiry has been opened in WhatsApp to chat with Aslam Mobiles.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setMessage('');
          }}
          className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card">
      <h3 className="text-xl font-bold text-navy-900 mb-1">
        Send Us a Direct Message
      </h3>
      <p className="text-xs text-slate-500 mb-6">
        Have a question about a phone price, accessories, or ticket booking? Fill out this quick form.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Your Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-100"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Mobile Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-100"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Enquiry Topic
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-100 bg-white"
          >
            <option value="Mobile Repair Enquiry">Mobile Repair Enquiry</option>
            <option value="Mobile Sales / Price Enquiry">Mobile Sales / Price Enquiry</option>
            <option value="Mobile Accessories Enquiry">Mobile Accessories Enquiry</option>
            <option value="Air / Bus Ticket Booking">Air / Bus Ticket Booking</option>
            <option value="Online Application / Digital Service">Online Application / Digital Service</option>
            <option value="General Question">General Question</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Your Message
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you are looking for..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-100"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl text-sm font-bold text-white bg-electric-500 hover:bg-electric-600 shadow-md shadow-electric-500/20 active:scale-98 transition"
        >
          <Send className="w-4 h-4" />
          <span>Send Enquiry to WhatsApp</span>
        </button>
      </div>
    </form>
  );
};
