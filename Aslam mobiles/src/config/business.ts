/**
 * ASLAM MOBILES - Core Business Configuration
 * 
 * IMPORTANT:
 * All business details here are strictly based on verified business information.
 * Placeholders for address, map location, and hours are provided so the owner
 * can easily update them without altering the application code.
 */

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  subheading: string;
  description: string;
  owner: string;
  phones: {
    primary: string;
    secondary: string;
    displayPrimary: string;
    displaySecondary: string;
  };
  whatsapp: {
    number: string; // 10 digits
    countryCode: string;
    fullNumber: string; // international format for wa.me
  };
  // Address & Verified Location Configuration
  location: {
    addressPlaceholder: string;
    fullAddress: string;
    street: string;
    area: string;
    taluk: string;
    district: string;
    pincode: string;
    cityState: string;
    landmarkPlaceholder: string;
    googleMapsEmbedUrlPlaceholder: string;
    googleMapsDirectionsUrlPlaceholder: string;
    isAddressConfigured: boolean;
  };
  workingHours: {
    days: string;
    timings: string;
    sunday: string;
  };
  categories: string[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "ASLAM MOBILES",
  shortName: "Aslam Mobiles",
  tagline: "Mobile Sales • Mobile Service • Accessories • Digital Services",
  subheading: "Your Trusted Mobile Sales, Service & Digital Solutions Center",
  description:
    "From mobile sales and accessories to professional repair services, display replacement, glass replacement and digital services — Aslam Mobiles provides complete solutions under one roof.",
  owner: "Anvar Ibrahim",
  phones: {
    primary: "7904761412",
    secondary: "8883871702",
    displayPrimary: "+91 79047 61412",
    displaySecondary: "+91 88838 71702",
  },
  whatsapp: {
    number: "7904761412",
    countryCode: "91",
    fullNumber: "917904761412",
  },
  location: {
    addressPlaceholder: "ECR Road, Senthalaippattinam, Peravurani (Tk), Thanjavur - 614612",
    fullAddress: "ECR Road, Senthalaippattinam, Peravurani (Tk), Thanjavur - 614612",
    street: "ECR Road",
    area: "Senthalaippattinam",
    taluk: "Peravurani (Tk)",
    district: "Thanjavur",
    pincode: "614612",
    cityState: "Peravurani (Tk), Thanjavur, Tamil Nadu - 614612",
    landmarkPlaceholder: "ECR Road, Senthalaippattinam",
    googleMapsEmbedUrlPlaceholder:
      "https://maps.google.com/maps?q=ECR+Road,+Senthalaippattinam,+Peravurani,+Thanjavur+614612&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsDirectionsUrlPlaceholder:
      "https://www.google.com/maps/search/?api=1&query=Aslam+Mobiles+ECR+Road+Senthalaippattinam+Peravurani+Thanjavur+614612",
    isAddressConfigured: true,
  },
  workingHours: {
    days: "Monday – Saturday",
    timings: "9:30 AM – 9:30 PM",
    sunday: "Open (10:00 AM – 8:00 PM)",
  },
  categories: [
    "Mobile Sales",
    "Mobile Repair & Service",
    "Display Replacement",
    "Glass Replacement",
    "Battery Replacement",
    "Charging Port Repair",
    "Software Services",
    "Hardware Services",
    "Mobile Accessories",
    "New & Used Mobiles",
    "E-Services",
    "Bus Ticket Booking",
    "Air Ticket Booking",
    "Online Application Services",
    "Digital Services",
  ],
};
