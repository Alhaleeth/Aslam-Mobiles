import { BUSINESS_CONFIG } from '../config/business';
import { ServiceRequest } from '../types';

/**
 * Reusable WhatsApp link builder
 */
export function getWhatsAppUrl(message: string, phoneNumber = BUSINESS_CONFIG.whatsapp.fullNumber): string {
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${phoneNumber}?text=${encodedText}`;
}

/**
 * Pre-defined WhatsApp message templates as required
 */
export const WhatsAppMessages = {
  general: () => 
    "Hello Aslam Mobiles, I would like to enquire about your mobile sales, repair, and digital services.",

  repairEnquiry: (serviceName?: string) =>
    serviceName
      ? `Hello Aslam Mobiles, I would like to enquire about ${serviceName} service for my mobile.`
      : "Hello Aslam Mobiles, I would like to enquire about mobile repair/service.",

  phoneEnquiry: (phoneName?: string, model?: string, price?: string | number) => {
    if (phoneName) {
      return `Hello Aslam Mobiles, I would like to enquire about the mobile phone: ${phoneName}${model ? ` (${model})` : ''}${price ? ` listed at ₹${price}` : ''}. Is it available in stock?`;
    }
    return "Hello Aslam Mobiles, I would like to enquire about a mobile phone.";
  },

  accessoryEnquiry: (accessoryName?: string, category?: string) => {
    if (accessoryName) {
      return `Hello Aslam Mobiles, I would like to enquire about the accessory: ${accessoryName}${category ? ` (${category})` : ''}.`;
    }
    return "Hello Aslam Mobiles, I would like to enquire about mobile accessories.";
  },

  ticketEnquiry: (ticketType?: string) => {
    if (ticketType) {
      return `Hello Aslam Mobiles, I would like to enquire about ${ticketType} booking services.`;
    }
    return "Hello Aslam Mobiles, I would like to enquire about ticket booking services.";
  },

  digitalServiceEnquiry: (serviceName?: string) => {
    if (serviceName) {
      return `Hello Aslam Mobiles, I would like to enquire about your digital service: ${serviceName}.`;
    }
    return "Hello Aslam Mobiles, I would like to enquire about your digital / e-services.";
  },

  serviceRequest: (req: Partial<ServiceRequest>) => {
    return [
      `*NEW SERVICE REQUEST - ASLAM MOBILES*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Customer Name:* ${req.customerName || 'N/A'}`,
      `📱 *Mobile Number:* ${req.phone || 'N/A'}`,
      `🔧 *Device Brand:* ${req.deviceBrand || 'N/A'}`,
      `📲 *Mobile Model:* ${req.deviceModel || 'N/A'}`,
      `🛠️ *Service Required:* ${req.serviceRequired || 'N/A'}`,
      `⚠️ *Problem Description:* ${req.problemDescription || 'N/A'}`,
      `📅 *Preferred Date:* ${req.preferredDate || 'Earliest available'}`,
      `📞 *Contact Mode:* ${req.preferredContactMethod || 'WhatsApp'}`,
      req.additionalNotes ? `📝 *Notes:* ${req.additionalNotes}` : '',
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Please provide an estimate and turnaround time. Thank you!`
    ].filter(Boolean).join('\n');
  }
};

/**
 * Open WhatsApp directly in new window
 */
export function openWhatsApp(message: string, phoneNumber?: string): void {
  const url = getWhatsAppUrl(message, phoneNumber);
  window.open(url, '_blank', 'noopener,noreferrer');
}
