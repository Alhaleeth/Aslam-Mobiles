/**
 * ASLAM MOBILES - Type Definitions
 * Designed for immediate frontend state and future backend/database integration.
 */

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'Android' | 'Budget' | 'Mid-Range' | 'Premium' | 'New' | 'Pre-Owned';
  model: string;
  ram: string;
  storage: string;
  color: string;
  price: string | number;
  offerPrice?: string | number;
  image: string;
  description: string;
  stockStatus: 'In Stock' | 'Available on Request' | 'Pre-Order' | 'Out of Stock';
  isSampleData?: boolean;
}

export interface Service {
  id: string;
  name: string;
  category: 'Hardware' | 'Display & Glass' | 'Audio & Mic' | 'Battery & Power' | 'Software & System' | 'General';
  description: string;
  shortDescription: string;
  image: string;
  active: boolean;
  highlights: string[];
  supportedBrands?: string[];
}

export type AccessoryCategory = 'Protection' | 'Charging' | 'Audio' | 'Power' | 'Other Accessories';

export interface Accessory {
  id: string;
  name: string;
  category: AccessoryCategory;
  price: string | number;
  image: string;
  stockStatus: 'In Stock' | 'Available on Request';
  description: string;
  compatibility?: string;
  isSampleData?: boolean;
}

export interface DigitalService {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
}

export interface ServiceRequest {
  id: string;
  customerName: string;
  phone: string;
  deviceBrand: string;
  deviceModel: string;
  serviceRequired: string;
  problemDescription: string;
  preferredContactMethod: 'WhatsApp' | 'Phone Call';
  preferredDate: string;
  additionalNotes?: string;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export type GalleryCategory = 'Shop' | 'Mobile Phones' | 'Accessories' | 'Repair Work' | 'Customer Service';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
