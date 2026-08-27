import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Aslam Mobiles | Mobile Sales & Service Center (Pattukkottai, Senthalai, Kattumavadi)',
  description = 'Aslam Mobiles provides professional mobile phone repairs, display & glass replacement, smartphone sales, genuine accessories, and air/bus ticket booking in Senthalai, Pattukkottai, Kattumavadi, and Peravurani on ECR Road.',
  keywords = 'aslam mobile, aslam mobiles, aslam, mobile service pattukkottai, mobile service senthalai, mobile service kattumavadi, senthalaivayal mobile service, mobile sales and service senthalai, mobile service center pattukkottai, display replacement pattukkottai, glass replacement senthalai',
  canonicalPath,
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // 4. OpenGraph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // 5. Canonical URL
    const baseUrl = 'https://aslam-mobiles.vercel.app';
    const currentPath = canonicalPath || location.pathname;
    const fullCanonicalUrl = `${baseUrl}${currentPath === '/' ? '' : currentPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);
  }, [title, description, keywords, canonicalPath, location.pathname]);

  return null;
};
