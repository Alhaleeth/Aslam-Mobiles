import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Smartphone, 
  Headphones, 
  Globe, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  Image as ImageIcon
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { SERVICES_DATA } from '../data/services';
import { PRODUCTS_DATA } from '../data/products';
import { ACCESSORIES_DATA } from '../data/accessories';
import { DIGITAL_SERVICES_DATA } from '../data/digitalServices';
import { FAQS_DATA } from '../data/faqs';
import { GALLERY_DATA } from '../data/gallery';
import { WhatsAppMessages, getWhatsAppUrl } from '../utils/whatsapp';

import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { QuickContactCTA } from '../components/home/QuickContactCTA';
import { TrustSection } from '../components/home/TrustSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { StrongCTA } from '../components/home/StrongCTA';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ProductCard } from '../components/cards/ProductCard';
import { AccessoryCard } from '../components/cards/AccessoryCard';
import { DigitalServiceCard } from '../components/cards/DigitalServiceCard';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { Lightbox } from '../components/common/Lightbox';

export const HomePage: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_DATA.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length
      );
    }
  };

  const currentGalleryItem =
    selectedImageIndex !== null ? GALLERY_DATA[selectedImageIndex] : null;

  return (
    <>
      <SEO
        title="Aslam Mobiles | Mobile Sales & Service Center (Pattukkottai, Senthalai, Kattumavadi)"
        description="Aslam Mobiles - Leading mobile repair, screen/glass replacement, smartphone sales, accessories & air/bus ticket booking in Senthalai, Pattukkottai, Kattumavadi & Peravurani on ECR Road."
        keywords="aslam mobile, aslam mobiles, aslam, mobile service pattukkottai, mobile service senthalai, mobile service kattumavadi, senthalaivayal mobile service, mobile sales and service senthalai, mobile service center pattukkottai, display replacement pattukkottai, glass replacement senthalai"
        canonicalPath="/"
      />

      {/* 3. Hero section */}
      <Hero />

      {/* 4. Quick contact CTA */}
      <QuickContactCTA />

      {/* 5. Why Choose Aslam Mobiles */}
      <TrustSection />

      {/* 6. Mobile Repair Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-electric-600 bg-electric-50 px-3 py-1 rounded-full border border-electric-100">
                Precision Hardware & Software Diagnostics
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mt-2 tracking-tight">
                Our Complete Mobile Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                From broken screen and glass repair to battery swaps and advanced micro-soldering, our technician provides fast, reliable mobile solutions.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/services"
                className="inline-flex items-center space-x-1.5 text-sm font-bold text-electric-600 hover:text-electric-700 group"
              >
                <span>View All 12 Repair Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/service-request"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-electric-500 hover:bg-electric-600 shadow-md shadow-electric-500/25 transition active:scale-95"
            >
              <Wrench className="w-4 h-4" />
              <span>Request a Repair Now</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 7. Mobile Phones (Mobile Sales) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-electric-600 bg-electric-50 px-3 py-1 rounded-full border border-electric-100">
                New & Quality Pre-Owned
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mt-2 tracking-tight">
                Latest Smartphones at Competitive Prices
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Explore popular Android phones and certified pre-owned devices. Contact Aslam Mobiles for current live quotes, exchange values, and availability.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/sales"
                className="inline-flex items-center space-x-1.5 text-sm font-bold text-electric-600 hover:text-electric-700 group"
              >
                <span>Browse Full Phone Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS_DATA.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-700">
              Looking for a specific model or color not listed here? Call <strong>{BUSINESS_CONFIG.phones.primary}</strong> or chat on WhatsApp — we arrange requested models with official warranty.
            </p>
          </div>

        </div>
      </section>

      {/* 8. Accessories */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Premium Mobile Add-ons
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mt-2 tracking-tight">
                Genuine Mobile Accessories
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                From 9D tempered glass and drop-proof cases to high-wattage fast chargers, braided cords, TWS earbuds, and car holders.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/accessories"
                className="inline-flex items-center space-x-1.5 text-sm font-bold text-electric-600 hover:text-electric-700 group"
              >
                <span>View All Accessories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCESSORIES_DATA.slice(0, 4).map((acc) => (
              <AccessoryCard key={acc.id} accessory={acc} />
            ))}
          </div>

        </div>
      </section>

      {/* 9. Digital / E-Services */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Convenient Online Assistance
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mt-2 tracking-tight">
                Digital & E-Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Get assistance for domestic & international air tickets, express bus reservations, and online application documentation without the hassle.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/e-services"
                className="inline-flex items-center space-x-1.5 text-sm font-bold text-electric-600 hover:text-electric-700 group"
              >
                <span>Explore All E-Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DIGITAL_SERVICES_DATA.slice(0, 3).map((service) => (
              <DigitalServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* 10. How It Works */}
      <HowItWorks />

      {/* 11. Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-electric-600 bg-electric-50 px-3 py-1 rounded-full border border-electric-100">
                Inside Aslam Mobiles
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mt-2 tracking-tight">
                Store & Workstation Gallery
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Take a look at our repair setup, smartphone collections, accessory racks, and dedicated customer service counters.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/gallery"
                className="inline-flex items-center space-x-1.5 text-sm font-bold text-electric-600 hover:text-electric-700 group"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          {/* 6 Preview Gallery Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {GALLERY_DATA.slice(0, 6).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative h-52 sm:h-64 rounded-2xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-200 shadow-subtle hover:shadow-card-hover transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-95 transition"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-electric-500/80 mb-1 inline-block">
                    {item.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. Customer enquiry CTA */}
      <section className="bg-electric-500 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black">
              Have a Query About Phone Prices or Repairs?
            </h3>
            <p className="text-blue-100 text-sm mt-1">
              Owner <strong>{BUSINESS_CONFIG.owner}</strong> and our team are ready to answer your call or message right away.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phones.primary}`}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold bg-white text-navy-950 hover:bg-slate-100 shadow-md transition active:scale-95"
            >
              <Phone className="w-4 h-4 text-electric-600" />
              <span>{BUSINESS_CONFIG.phones.primary}</span>
            </a>

            <a
              href={getWhatsAppUrl(WhatsAppMessages.general())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold bg-navy-900 hover:bg-navy-950 text-white shadow-md transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-electric-600 bg-electric-50 px-3 py-1 rounded-full border border-electric-100">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mt-2 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Everything you need to know about our repair services, mobile sales, and booking process.
            </p>
          </div>

          <FAQAccordion items={FAQS_DATA.slice(0, 6)} />

          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center space-x-1.5 text-sm font-bold text-electric-600 hover:underline"
            >
              <span>View More Questions & Answers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 14. Contact section */}
      <section id="contact" className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-electric-600 bg-electric-50 px-3 py-1 rounded-full border border-electric-100">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mt-2 tracking-tight">
                  Contact Aslam Mobiles
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Visit our store or reach out directly via call or WhatsApp. We are here to serve all your mobile and digital service needs.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-electric-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Phone Numbers</h3>
                    <a href={`tel:${BUSINESS_CONFIG.phones.primary}`} className="block text-base font-bold text-navy-900 hover:text-electric-600 transition mt-0.5">
                      {BUSINESS_CONFIG.phones.displayPrimary} (Primary)
                    </a>
                    <a href={`tel:${BUSINESS_CONFIG.phones.secondary}`} className="block text-sm font-semibold text-slate-700 hover:text-electric-600 transition">
                      {BUSINESS_CONFIG.phones.displaySecondary} (Secondary)
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5 fill-white/20" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp Instant Chat</h3>
                    <a
                      href={getWhatsAppUrl(WhatsAppMessages.general())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base font-bold text-emerald-600 hover:underline mt-0.5"
                    >
                      +91 {BUSINESS_CONFIG.whatsapp.number}
                    </a>
                    <span className="text-xs text-slate-500">Fast responses during store hours</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-navy-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Hours</h3>
                    <div className="text-sm font-bold text-navy-900 mt-0.5">
                      {BUSINESS_CONFIG.workingHours.days}: {BUSINESS_CONFIG.workingHours.timings}
                    </div>
                    <div className="text-xs text-slate-500">
                      Sunday: {BUSINESS_CONFIG.workingHours.sunday}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3.5 hover:border-electric-500/40 transition">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Store Address</h3>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        Verified Shop
                      </span>
                    </div>
                    <div className="text-sm font-bold text-navy-900 mt-1 leading-snug">
                      {BUSINESS_CONFIG.location.addressPlaceholder}
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Landmark: <strong>{BUSINESS_CONFIG.location.landmarkPlaceholder}</strong>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Taluk/Dist: <strong>{BUSINESS_CONFIG.location.cityState}</strong>
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={BUSINESS_CONFIG.location.googleMapsDirectionsUrlPlaceholder}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-navy-900 hover:bg-electric-600 transition"
                      >
                        <MapPin className="w-3 h-3" />
                        <span>Get Directions</span>
                      </a>
                      <a
                        href={`tel:${BUSINESS_CONFIG.phones.primary}`}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call Store</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Col: Live Google Maps & Directions Area */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Map Box with Live Google Maps */}
              <div className="w-full h-80 sm:h-96 rounded-3xl border border-slate-200 bg-slate-100 flex flex-col items-center justify-center relative overflow-hidden shadow-card group">
                {BUSINESS_CONFIG.location.googleMapsEmbedUrlPlaceholder ? (
                  <>
                    <iframe
                      src={BUSINESS_CONFIG.location.googleMapsEmbedUrlPlaceholder}
                      title="Aslam Mobiles Location Map"
                      className="w-full h-full border-0 rounded-3xl"
                      loading="lazy"
                    ></iframe>
                    <div className="absolute top-3 left-3 bg-navy-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-2 shadow-lg border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
                      <span>ECR Road, Senthalaippattinam</span>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3 max-w-md p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-electric-500/10 text-electric-600 flex items-center justify-center mx-auto">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900">
                      Google Maps Location
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      ECR Road, Senthalaippattinam, Peravurani (Tk), Thanjavur - 614612
                    </p>
                  </div>
                )}
              </div>

              {/* Quick Summary Card */}
              <div className="p-6 rounded-2xl bg-navy-900 bg-circuit-accent text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-navy-800">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-semibold text-cyber-cyan uppercase tracking-wider">Fast Service Turnaround</span>
                  </div>
                  <h3 className="text-lg font-bold mt-1">Have a Device Ready for Service?</h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Pre-register your device to save time when visiting our shop on ECR Road.
                  </p>
                </div>
                <Link
                  to="/service-request"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-electric-500 hover:bg-electric-600 text-white transition whitespace-nowrap shadow-md active:scale-95"
                >
                  Book Service Request &rarr;
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 15. Strong CTA */}
      <StrongCTA />

      {/* Lightbox for Gallery */}
      {currentGalleryItem && selectedImageIndex !== null && (
        <Lightbox
          isOpen={selectedImageIndex !== null}
          onClose={closeLightbox}
          imageSrc={currentGalleryItem.image}
          imageAlt={currentGalleryItem.title}
          title={currentGalleryItem.title}
          category={currentGalleryItem.category}
          description={currentGalleryItem.description}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
};
