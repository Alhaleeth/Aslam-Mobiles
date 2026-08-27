import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { FloatingActions } from './components/common/FloatingActions';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SalesPage } from './pages/SalesPage';
import { ServicesPage } from './pages/ServicesPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { EServicesPage } from './pages/EServicesPage';
import { ServiceRequestPage } from './pages/ServiceRequestPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { FAQPage } from './pages/FAQPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-electric-500 selection:text-white">
      <ScrollToTop />
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navbar */}
      <Navbar />

      {/* Main Page Routing */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/e-services" element={<EServicesPage />} />
          <Route path="/service-request" element={<ServiceRequestPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Floating Action Buttons (Desktop Popover & WhatsApp) */}
      <FloatingActions />

      {/* Mobile Bottom Sticky Bar (Call | WhatsApp | Services) */}
      <MobileBottomBar />

      {/* Professional Footer */}
      <Footer />
    </div>
  );
};

export default App;
