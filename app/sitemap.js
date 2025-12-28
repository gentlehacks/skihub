// app/sitemap.js
import { learningPaths, additionalPaths } from "@/data/resources";

const baseUrl = "https://skihub.vercel.app"; // Change to your domain

export default async function sitemap() {
  const allPaths = [...learningPaths, ...additionalPaths];
  const today = new Date();

  // 1. Static Pages (Highest Priority)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/paths`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // 2. Learning Path Detail Pages
  const pathPages = allPaths.map((path) => {
    // Calculate priority based on popularity/demand
    let priority = 0.8;
    let changeFreq = "weekly";

    // Popular paths get higher priority
    const popularPaths = [
      "fullstack-web-dev",
      "cybersecurity-fundamentals",
      "digital-marketing-growth",
    ];
    if (popularPaths.includes(path.id)) {
      priority = 0.9;
      changeFreq = "daily";
    }

    return {
      url: `${baseUrl}/paths/${path.id}`,
      lastModified: today,
      changeFrequency: changeFreq,
      priority: priority,
    };
  });

  // 3. Category Pages (Optional but great for SEO)
  const categories = [...new Set(allPaths.map((p) => p.category))];
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/category/${category.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: today,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...pathPages, ...categoryPages];
}
