/**
 * Image Fallback Utility
 * Provides verified fallback images for components and data items
 * so broken images NEVER appear on user screens.
 */

export const FALLBACK_IMAGES = {
  repair: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80',
  phone: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
  accessory: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=800&q=80',
  store: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  circuit: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackType: keyof typeof FALLBACK_IMAGES = 'repair'
) => {
  const target = e.currentTarget;
  target.onerror = null;
  target.src = FALLBACK_IMAGES[fallbackType];
};
