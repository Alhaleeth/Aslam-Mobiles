import { Accessory } from '../types';

export const ACCESSORIES_DATA: Accessory[] = [
  // Protection
  {
    id: 'acc-tempered-glass',
    name: '9D Edge-to-Edge Tempered Glass',
    category: 'Protection',
    price: 149,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'High alumina scratch-resistant glass, oleophobic fingerprint coating, bubble-free edge fit.',
    compatibility: 'Available for all Samsung, Redmi, Vivo, Oppo, Realme, iPhone models'
  },
  {
    id: 'acc-back-case',
    name: 'Shockproof Matte Armor Cases',
    category: 'Protection',
    price: 249,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'Military-grade drop cushion corners, camera bezel lift, tactile button covers in multiple colors.',
    compatibility: 'Wide range of models in stock'
  },
  {
    id: 'acc-camera-lens-protector',
    name: 'Camera Lens Metal Ring Protector',
    category: 'Protection',
    price: 99,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'Anti-scratch individual alloy rings with sapphire glass for maximum camera lens defense without glare.',
    compatibility: 'Multi-camera smartphones'
  },

  // Charging
  {
    id: 'acc-fast-charger-33w',
    name: '33W / 65W Fast SuperVOOC/PD Charger',
    category: 'Charging',
    price: 599,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'Dual port Type-C and USB-A with Power Delivery and fast charging protocol support.',
    compatibility: 'Android, iPhone, Tablets'
  },
  {
    id: 'acc-braided-cable',
    name: 'Heavy Duty Braided Fast Charging Cable',
    category: 'Charging',
    price: 199,
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: '1.2m tangle-free nylon braided cord with reinforced neck joints. Supports up to 6A charging & 480Mbps data transfer.',
    compatibility: 'Available in Type-C, Lightning, and Micro USB'
  },
  {
    id: 'acc-car-charger',
    name: 'Dual Port Turbo Car Charger',
    category: 'Charging',
    price: 349,
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'Compact 36W metallic car charger with smart IC protection against short-circuit and temperature spikes.',
    compatibility: '12V-24V vehicles'
  },

  // Audio
  {
    id: 'acc-tws-earbuds',
    name: 'True Wireless Stereo (TWS) Earbuds',
    category: 'Audio',
    price: 899,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'Bluetooth 5.3, deep punchy bass, environmental noise cancellation (ENC) for clear calls, 30-hour playback case.',
    compatibility: 'All Bluetooth enabled phones'
  },
  {
    id: 'acc-wired-earphones',
    name: 'Metallic In-Ear Bass Earphones',
    category: 'Audio',
    price: 199,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'Comfortable angled buds, in-line HD condenser mic with one-touch call button, deep dynamic acoustic driver.',
    compatibility: '3.5mm jack / Type-C digital audio variants'
  },
  {
    id: 'acc-bt-neckband',
    name: 'Magnetic Wireless Neckband Headset',
    category: 'Audio',
    price: 649,
    image: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'Skin-friendly silicone neckband, instant magnetic on/off, vibration alert for calls, and 40-hour marathon battery.',
    compatibility: 'Universal Bluetooth'
  },

  // Power
  {
    id: 'acc-powerbank-10000',
    name: '10,000mAh Slim Power Bank',
    category: 'Power',
    price: 999,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'Compact pocket-friendly lithium-polymer power bank with 22.5W two-way fast charging and LED percentage readout.',
    compatibility: 'Smartphones, earbuds, smartwatches'
  },
  {
    id: 'acc-powerbank-20000',
    name: '20,000mAh Heavy Duty Power Bank',
    category: 'Power',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'Triple output ports to charge 3 devices at once. Reliable companion for travelers and busy workdays.',
    compatibility: 'Multi-device fast charging'
  },

  // Other Accessories
  {
    id: 'acc-mobile-stand',
    name: 'Adjustable Desktop Mobile & Tablet Stand',
    category: 'Other Accessories',
    price: 149,
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'Aluminum alloy foldable stand with anti-slip silicone cushions and cable routing pass-through.',
    compatibility: 'All phones & mini tablets'
  },
  {
    id: 'acc-car-holder',
    name: '360° Rotating Car Dashboard & AC Vent Holder',
    category: 'Other Accessories',
    price: 249,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'One-touch automatic clamp with firm suction gel and 360° ball joint for hands-free GPS navigation.',
    compatibility: '4.7 to 7.0 inch phones'
  },
  {
    id: 'acc-otg-memory',
    name: 'High Speed OTG Adapters & MicroSD Cards',
    category: 'Other Accessories',
    price: 299,
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    description: 'Type-C to USB 3.0 OTG connectors and Class-10 high-speed memory cards (32GB / 64GB / 128GB).',
    compatibility: 'Android & OTG devices'
  }
];
