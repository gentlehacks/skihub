// components/JsonLd.js
export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SkiHub",
    description: "Free tech skills learning platform for Nigerian learners",
    url: "https://skihub.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://skihub.vercel.app/paths?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "SkiHub",
      logo: {
        "@type": "ImageObject",
        url: "https://skihub.vercel.app/logo.png",
      },
    },
    inLanguage: "en-NG",
    countryOfOrigin: "NG",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
