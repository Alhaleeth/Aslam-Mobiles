import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, Smartphone, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO title="Page Not Found | Aslam Mobiles" />

      <section className="py-24 bg-slate-50 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <span className="text-6xl font-black text-electric-500 font-mono">404</span>
          <h1 className="text-2xl font-black text-navy-900 mt-2">Page Not Found</h1>
          <p className="text-sm text-slate-600 mt-2">
            The page you requested doesn't exist or has moved. Explore our core services or head back home.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-900 hover:bg-electric-600 transition"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition"
            >
              <Wrench className="w-4 h-4" />
              <span>View Repair Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
