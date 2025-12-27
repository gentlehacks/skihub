"use client"
import Header from '@/components/Header'
import { useState } from 'react'
import { learningPaths } from "@/data/resources"
import Resource from '@/components/Resource'

const Home = () => {
  const [filterType, setFilterType] = useState<'all' | 'web' | 'cybersecurity' | 'app' | 'design' | 'data-science'>('all');
  const [search, setSearch] = useState<string>('')

  const filters = [
    { name: "All", type: "all" },
    { name: "Web Development", type: "web" },
    { name: "Cyber Security", type: "cybersecurity" },
    { name: "App Development", type: "app" },
    { name: "Design", type: "design" },
    { name: "Data Science", type: "data-science" },
  ];

  // CREATE THIS MAPPING OBJECT
  const categoryMap = {
    'all': 'all',
    'web': 'Web Development',
    'cybersecurity': 'Cybersecurity',
    'app': 'App Development',
    'design': 'Design',
    'data-science': 'Data Science',
    'marketing': 'Marketing & Business',
    'ai': 'Productivity & AI',
    'career': 'Freelancing & Careers',
    'game': 'Game Development',
    'health': 'Health & Technology',
    'blockchain': 'Blockchain & FinTech',
    'cloud': 'Cloud & Infrastructure',
    'media': 'Media & Content Creation'
  };

  // FIXED FILTER LOGIC
  const filterTypePaths = learningPaths.filter((p) => {
    // 1. Check if path matches selected category
    const matchesCategory = filterType === 'all' || p.category === categoryMap[filterType];
    
    // 2. Check if path matches search term
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                         p.description.toLowerCase().includes(search.toLowerCase()) ||
                         p.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    
    // 3. Return only paths that match BOTH
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full relative flex flex-col items-center">
      <Header search={search} setSearch={setSearch} />
      <div className="w-full flex flex-col mt-25">
        <div className="w-full px-6 md:px-8 flex flex-col">
          <div className="flex flex-col">
            <h1 className="text-gray-700 font-bold text-2xl md:text-3xl mb-3">
              <span className="text-blue-600">Hello!</span> What will you learn
              today?
            </h1>
            <p className="text-gray-500 text-md">
              Browse our curated learning paths in various categories.
            </p>
          </div>
          {/* Filter links */}
          <div className="flex flex-row flex-wrap mt-6">
            {filters.map((link) => (
              <button
                key={link.type}
                className={`px-4 py-2 rounded-full mr-2 mb-2 text-sm cursor-pointer ${
                  filterType === link.type
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() =>
                  setFilterType(
                    link.type as
                      | "all"
                      | "web"
                      | "cybersecurity"
                      | "app"
                      | "design"
                      | "data-science"
                  )
                }
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="mt-4 mb-2">
            <p className="text-gray-600 text-sm">
              Showing {filterTypePaths.length} of {learningPaths.length}{" "}
              learning paths
            </p>
          </div>

          <section className="w-full mt-4 mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterTypePaths.length > 0 ? (
              filterTypePaths.map((resource) => (
                <Resource
                  key={resource.id}
                  id={resource.id}
                  thumbnail={resource.thumbnail}
                  title={resource.title}
                  category={resource.category}
                  tags={resource.tags}
                  resourceCount={resource.resourceCount}
                  creator={resource.creator}
                  difficulty={resource.difficulty}
                />
              ))
            ) : (
              // ADD EMPTY STATE
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  No learning paths found. Try a different search or filter.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
      {/* footer */}
      <div className="w-full absolute bottom-0 left-0 bg-blue-100 flex items-center justify-between px-6 py-6">
        <p className="text-gray-500">
          © {new Date().getFullYear()} SkiHub All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Home