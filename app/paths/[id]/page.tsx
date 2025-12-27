// app/paths/[id]/page.js - CORRECT VERSION
import { learningPaths } from "@/data/resources";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

// Generate static paths (optional but good for performance)
export async function generateStaticParams() {
  return learningPaths.map((path) => ({
    id: path.id,
  }));
}

// Page component - NOTE THE 'async' keyword
export default async function PathDetailPage({ params }: {params: {id: string}}) {
  // Await the params (they're a Promise in App Router)
  const { id } = await params;

  const path = learningPaths.find((p) => p.id === id);

  if (!path) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-300">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/paths"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <FaArrowLeft />
            Back to all paths
          </Link>
        </div>
      </header>

      {/* Path Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Thumbnail */}
          <div className="relative h-64 md:h-80">
            <img
              src={path.thumbnail}
              alt={path.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                {path.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2">
                {path.title}
              </h1>
              <p className="text-gray-200">{path.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">👤</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Curated by</p>
                  <p className="font-semibold">{path.creator}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">📚</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Resources</p>
                  <p className="font-semibold">{path.resourceCount}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">⚡</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Difficulty</p>
                  <p className="font-semibold">{path.difficulty}</p>
                </div>
              </div>
            </div>

            {/* Modules */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Learning Modules
              </h2>

              {path.modules.map((module, moduleIndex) => (
                <div
                  key={moduleIndex}
                  className="border rounded-xl overflow-hidden"
                >
                  <div className="bg-gray-50 px-6 py-4 border-b">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {module.name}
                    </h3>
                  </div>

                  <div className="divide-y">
                    {module.resources.map((resource) => (
                      <div key={resource.id} className="p-6 hover:bg-gray-50">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className={`px-2 py-1 text-xs font-semibold rounded ${
                                  resource.type === "video"
                                    ? "bg-red-100 text-red-800"
                                    : resource.type === "article"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-purple-100 text-purple-800"
                                }`}
                              >
                                {resource.type.toUpperCase()}
                              </span>
                              <span className="text-gray-500 text-sm">
                                {resource.duration}
                              </span>
                            </div>

                            <h4 className="text-lg font-semibold text-gray-800 mb-1">
                              {resource.title}
                            </h4>

                            <p className="text-gray-600 mb-2">
                              {resource.description}
                            </p>

                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-gray-500">Source:</span>
                              <span className="font-medium">
                                {resource.source}
                              </span>
                            </div>
                          </div>

                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 whitespace-nowrap"
                          >
                            Open Link
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
