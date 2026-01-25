import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({ 
  title, 
  description, 
  canonicalUrl,
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/gtGoGfp5TFdeN5Cd8MngjemUqJU2/social-images/social-1757547517521-logo.png",
  structuredData
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    updateMeta("description", description);
    
    // Update Open Graph tags
    updateMeta("og:title", title, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:image", ogImage, "property");
    
    // Update Twitter tags
    updateMeta("twitter:title", title, "property");
    updateMeta("twitter:description", description, "property");
    
    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", canonicalUrl);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", canonicalUrl);
        document.head.appendChild(canonical);
      }
    }
    
    // Add page-specific structured data
    if (structuredData) {
      // Remove any existing page-specific structured data
      const existingScript = document.getElementById("page-structured-data");
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement("script");
      script.id = "page-structured-data";
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalUrl, ogImage, structuredData]);

  return null;
};

function updateMeta(name: string, content: string, attr: string = "name") {
  let meta = document.querySelector(`meta[${attr}="${name}"]`);
  if (meta) {
    meta.setAttribute("content", content);
  } else {
    meta = document.createElement("meta");
    meta.setAttribute(attr, name);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
  }
}

export default SEO;
