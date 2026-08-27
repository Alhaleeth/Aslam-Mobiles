# ASLAM MOBILES - Official Website

A modern, high-performance, mobile-responsive business website built for **ASLAM MOBILES** — Mobile Sales, Mobile Repair & Service, Genuine Accessories, and Digital E-Services.

- **Owner:** Anvar Ibrahim
- **Primary Phone:** `7904761412`
- **Secondary Phone:** `8883871702`
- **WhatsApp Support:** `+91 7904761412`

---

## 📱 Features

1. **Complete Service Showcase:**
   - Detailed coverage for 12 specialized mobile repair services (Display Replacement, Glass Replacement, Battery Replacement, Charging Port, Mic, Speaker, Camera, Water Damage Recovery, Software Service, Motherboard Micro-soldering, General Repair, and Authorized Unlocking Support).
2. **Mobile Sales Catalog:**
   - Filterable catalog covering Android, Budget, Mid-range, Premium, and Pre-owned devices with direct WhatsApp price quote inquiries.
3. **Mobile Accessories:**
   - Categorized collections (Protection, Charging, Audio, Power, Other Accessories).
4. **Digital & E-Services:**
   - Travel desk support for Air Tickets (Domestic & International) and Bus Ticket reservations, plus online application and digital documentation assistance.
5. **Direct Action Integration:**
   - Floating Call & WhatsApp action triggers.
   - Mobile Sticky Bottom Action Bar (**Call | WhatsApp | Services**).
   - Pre-formatted, automated WhatsApp enquiry messages.
6. **Online Service Request Form:**
   - Form validation with automatic WhatsApp message formatting and local persistence.
7. **Interactive Gallery:**
   - Lightbox modal with keyboard navigation.
8. **SEO & Structured Data:**
   - Semantic HTML5, dynamic title/meta description tags, Open Graph meta, and `MobilePhoneStore` Schema.org JSON-LD.

---

## 🛠️ Tech Stack

- **React 18** with **TypeScript**
- **Tailwind CSS** for responsive styling
- **Vite** for fast bundling
- **Lucide React** for icons
- **React Router v6** for multi-page navigation

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Configuration & Content Updates

All store configurations and catalogs are cleanly separated for easy maintenance:

| Content Area | File Location |
| :--- | :--- |
| **Business Info, Address & Phone Numbers** | `src/config/business.ts` |
| **Mobile Phones Catalog & Prices** | `src/data/products.ts` |
| **Mobile Repair Services** | `src/data/services.ts` |
| **Accessories Catalog** | `src/data/accessories.ts` |
| **Digital & E-Services** | `src/data/digitalServices.ts` |
| **Gallery Photos** | `src/data/gallery.ts` |
| **Frequently Asked Questions (FAQ)** | `src/data/faqs.ts` |
