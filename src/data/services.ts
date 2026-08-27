import { Service } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'display-replacement',
    name: 'Display Replacement',
    category: 'Display & Glass',
    shortDescription: 'Broken or damaged mobile display replacement with premium quality panels.',
    description: 'Cracked, flickering, black screen, or unresponsive touch? We provide expert display replacement for all leading Android and smartphone brands with calibrated touch response and original-grade color reproduction.',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'Original quality & premium OLED/IPS displays',
      'Accurate touch response calibration',
      'Frame cleaning and dust seal application',
      'Supported on Samsung, Redmi, Vivo, Oppo, Realme, OnePlus, etc.'
    ],
    supportedBrands: ['Samsung', 'Xiaomi/Redmi', 'Vivo', 'Oppo', 'Realme', 'OnePlus', 'Motorola', 'Poco', 'Infinix']
  },
  {
    id: 'glass-replacement',
    name: 'Glass Replacement',
    category: 'Display & Glass',
    shortDescription: 'Front outer glass replacement for supported mobile models where inner display works.',
    description: 'If your touch and inner display are fully functional and only the outer glass is broken, our precision OCA glass lamination restores your screen at a fraction of the cost of full screen replacement.',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'OCA machine lamination technique',
      'Bubble-free clean finishing',
      'Cost-saving alternative to full display unit',
      'Available for supported flat and curved glass models'
    ],
    supportedBrands: ['Samsung', 'Vivo', 'Oppo', 'OnePlus', 'Realme', 'Redmi']
  },
  {
    id: 'battery-replacement',
    name: 'Battery Replacement',
    category: 'Battery & Power',
    shortDescription: 'Replacement for weak, swollen, quickly draining, or dead mobile batteries.',
    description: 'Is your phone draining too fast, heating up during usage, or shutting down at 20%? Get a fresh high-capacity replacement battery with safe installation and proper battery health cycle testing.',
    image: 'https://images.unsplash.com/photo-1619725002198-6a689b72f41d?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'Grade-A certified replacement cells',
      'Over-charge and short-circuit protection',
      'Extended battery backup and standby time',
      'Safe removal of old or swollen batteries'
    ],
    supportedBrands: ['Samsung', 'Redmi', 'Realme', 'Vivo', 'Oppo', 'OnePlus', 'Motorola']
  },
  {
    id: 'charging-port-repair',
    name: 'Charging Port Repair',
    category: 'Hardware',
    shortDescription: 'Fix loose charging connectors, slow charging, and disconnected USB-C/micro USB ports.',
    description: 'Phone only charging at an awkward angle, showing "moisture detected", or not taking charge at all? We clean, re-solder, or replace damaged charging sub-boards and Type-C / Micro USB connectors.',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'Type-C, Micro-USB & Lightning port repairs',
      'Fast charging (VOOC, Dart, SuperVOOC, Turbo) pin integrity check',
      'Sub-board replacement with original microphone & antenna circuits',
      'Fast turnaround'
    ]
  },
  {
    id: 'speaker-repair',
    name: 'Speaker Repair',
    category: 'Audio & Mic',
    shortDescription: 'Ear speaker and loud speaker repair for low, crackling, or completely muted sound.',
    description: 'Cannot hear callers during calls, or music and ringtones sound distorted and muffled? We replace ear pieces, media loud speakers, and clean acoustic mesh filters.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'Ear piece speaker replacement',
      'Bottom loud speaker ringer replacement',
      'Acoustic mesh cleaning and dust removal',
      'Crystal clear audio restored'
    ]
  },
  {
    id: 'mic-repair',
    name: 'Mic Repair',
    category: 'Audio & Mic',
    shortDescription: 'Fix microphone problems when callers cannot hear your voice clearly or voice notes are silent.',
    description: 'Do people complain they cannot hear you on calls or your voice cuts out? We diagnose primary call microphones, secondary noise-cancellation mics, and replace faulty mic modules with precision micro-soldering.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'Primary voice call microphone replacement',
      'Secondary video recording/noise-cancelling mic repair',
      'Noise cancellation filter cleaning',
      'Call testing before delivery'
    ]
  },
  {
    id: 'camera-repair',
    name: 'Camera Repair',
    category: 'Hardware',
    shortDescription: 'Front and rear camera problem diagnosis, blurry focus fix, and lens replacement.',
    description: 'Blurry photos, autofocus clicking or shaking, camera app crashing, or scratched rear camera glass? We replace genuine camera modules and protective sapphire/tempered camera lens covers.',
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'Rear primary & ultra-wide camera replacement',
      'Selfie / front camera sensor replacement',
      'Camera lens outer glass replacement',
      'Sensor dust cleaning'
    ]
  },
  {
    id: 'water-damage-service',
    name: 'Water Damage Service',
    category: 'Hardware',
    shortDescription: 'Emergency inspection, chemical cleaning, and short-circuit diagnosis for liquid-damaged devices.',
    description: 'Dropped your phone in water or caught in heavy rain? Immediate ultrasonic cleaning, motherboard dehydration, and corrosion treatment prevent permanent short circuits and data loss.',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'Ultrasonic PCB bath and moisture removal',
      'Corrosion and rust chemical treatment',
      'Component-level short detection',
      'Maximum data recovery priority'
    ]
  },
  {
    id: 'software-service',
    name: 'Software Service',
    category: 'Software & System',
    shortDescription: 'Troubleshooting software crashes, boot loops, system updates, and virus cleanup.',
    description: 'Stuck on the brand logo, frequent app freezing, system storage full, or update failure? We flash official firmware, recover crashed systems, and optimize system speed.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'Official stock ROM flashing & reinstallation',
      'Stuck on boot logo / restart loop resolution',
      'Safe backup & phone-to-phone data transfer',
      'System lag and malware cleanup'
    ]
  },
  {
    id: 'mobile-unlocking-support',
    name: 'Mobile Unlocking / Software Support',
    category: 'Software & System',
    shortDescription: 'Legitimate and authorized software assistance for pattern recovery and account access.',
    description: 'Forgot your screen pattern or PIN after resetting your own device? We provide authorized software assistance to help owners regain access to their phones with verified ownership proof.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'Strictly legitimate & authorized software services only',
      'Requires verified customer proof of device ownership',
      'Assistance with account login and device setup',
      'Ethical and secure procedure'
    ]
  },
  {
    id: 'motherboard-hardware-service',
    name: 'Motherboard / Hardware Service',
    category: 'Hardware',
    shortDescription: 'Advanced micro-soldering, IC replacement, power IC, and dead device troubleshooting.',
    description: 'For completely dead phones, network no-service issues, backlight failure, or overheating boards, our advanced microscope micro-soldering repairs board-level ICs without replacing the whole expensive motherboard.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'Precision micro-soldering with microscope station',
      'Power IC, Charging IC & Network IC rework',
      'Short circuit detection with thermal/multimeter testing',
      'Dead device revival'
    ]
  },
  {
    id: 'general-mobile-repair',
    name: 'General Mobile Repair',
    category: 'General',
    shortDescription: 'Complete diagnostic checkup for any hardware, sensor, button, or housing damage.',
    description: 'Power button stiff, volume keys not working, vibration motor broken, or bent frame? Bring your device for an end-to-end diagnosis and transparent pricing estimate.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    active: true,
    highlights: [
      'Volume & power button flex replacement',
      'Vibrator motor and sensor calibration',
      'Body housing and middle frame replacement',
      'Complete diagnostic checkup'
    ]
  }
];
