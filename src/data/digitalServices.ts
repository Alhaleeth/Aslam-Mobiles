import { DigitalService } from '../types';

/**
 * DIGITAL & E-SERVICES DATA
 * 
 * IMPORTANT COMPLIANCE NOTE:
 * Services are presented as local customer assistance and facilitation services.
 * We do not claim government authorization, official affiliations, or sovereign authority.
 */

export const DIGITAL_SERVICES_DATA: DigitalService[] = [
  {
    id: 'air-ticket-booking',
    name: 'Air Ticket Booking Assistance',
    category: 'Travel & Ticketing',
    description: 'Hassle-free assistance for booking domestic and international flights at competitive travel fares.',
    features: [
      'Domestic flights across all major Indian airlines',
      'International flight booking assistance',
      'Seat selection, extra baggage & meal preferences',
      'Instant e-ticket printout and WhatsApp PDF delivery',
      'Rescheduling & cancellation guidance'
    ],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Enquire Flight Fares'
  },
  {
    id: 'bus-ticket-booking',
    name: 'Bus Ticket Booking Assistance',
    category: 'Travel & Ticketing',
    description: 'Fast seat reservation for private and state bus operators with confirmed seat selection.',
    features: [
      'AC Sleeper, Semi-Sleeper & Seater reservations',
      'Top operators across South India routes',
      'Real-time seat layout choice (lower/upper berth)',
      'Instant booking confirmation with boarding point details',
      'Emergency travel bookings support'
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Enquire Bus Booking'
  },
  {
    id: 'online-application-services',
    name: 'Online Application Services',
    category: 'Digital Assistance',
    description: 'Assistance for filling, uploading, and submitting supported online applications with accuracy.',
    features: [
      'Support with educational & admission forms',
      'Employment and competitive exam application filling',
      'Photo and signature resizing to required specifications',
      'Document formatting and online verification support',
      'Application status tracking assistance'
    ],
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Enquire Application Help'
  },
  {
    id: 'digital-documentation-services',
    name: 'Digital Documentation Services',
    category: 'Digital Assistance',
    description: 'Scanning, formatting, PDF creation, and digital documentation assistance for all needs.',
    features: [
      'High-resolution document scanning and digitization',
      'PDF conversion, compression, and file merging',
      'Color printouts and photo prints on premium media',
      'Lamination for identity cards and certificates',
      'Safe transfer of files to WhatsApp or USB drives'
    ],
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Enquire Documentation'
  },
  {
    id: 'online-service-assistance',
    name: 'Online Service Assistance',
    category: 'Digital Assistance',
    description: 'Friendly walk-in tech guidance for utility bill payments, recharge, and online portal inquiries.',
    features: [
      'Electricity, DTH, and broadband bill payment guidance',
      'Mobile recharge (Prepaid & Postpaid) assistance',
      'Basic internet portal navigation assistance',
      'Assistance with account setup and password resets',
      'Prompt, patient in-person service'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Enquire Service Help'
  }
];
