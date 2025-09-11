import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content = description;
      document.head.appendChild(desc);
    }
  }, [title, description]);

  return null;
};

export default SEO;
