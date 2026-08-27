import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  category?: string;
  description?: string;
  onNext?: () => void;
  onPrev?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  category,
  description,
  onNext,
  onPrev,
  hasPrev = true,
  hasNext = true,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-navy-950 border border-navy-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 border-b border-navy-800 bg-navy-900/60">
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-white font-bold text-base md:text-lg">{title}</h3>
              {category && (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-electric-500/20 text-electric-400 font-semibold border border-electric-500/30">
                  {category}
                </span>
              )}
            </div>
            {description && <p className="text-xs text-slate-400 mt-0.5">{description}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 transition"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display Area */}
        <div className="relative flex-1 flex items-center justify-center bg-black/40 overflow-hidden min-h-[300px] max-h-[70vh]">
          <img
            src={imageSrc}
            alt={imageAlt}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=80';
            }}
            className="max-w-full max-h-[70vh] object-contain rounded-lg p-2"
          />

          {/* Navigation Controls */}
          {hasPrev && onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy-900/80 hover:bg-navy-800 text-white flex items-center justify-center backdrop-blur-sm border border-navy-700 transition shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {hasNext && onNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy-900/80 hover:bg-navy-800 text-white flex items-center justify-center backdrop-blur-sm border border-navy-700 transition shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
