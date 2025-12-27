import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowRight, FaRegCheckCircle } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <div className="py-20 bg-blue-50 w-full flex flex-col items-center">
      <div className="container mx-auto text-center max-w-[35rem] justify-center px-6">
        <div className="w-full flex justify-center mb-8">
          <Image 
            src="/pic.svg"
            alt="Hero section banner"
            width={200}
            height={200}
            className='w-[30%] md:w-[35%]'
          />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4">
          Master in Demand Skills. for free.
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-400 mb-8">
          Browse curated learning path from the best free Nigerian friendly
          tutorials. No account required to start learning
        </p>
        <div className="flex flex-row items-center justify-center gap-4 mt-12">
          <Link
            href="/paths"
            className="no-underline"
          >
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-2xl hover:bg-blue-600 transition duration-300">
            Browse path
            <FaArrowRight className="inline-block ml-2" />
          </button>
          </Link>
          <div className="px-4 py-3 flex flex-row items-center text-gray-400">
            <FaRegCheckCircle className="inline-block text-blue-400 mr-2" />
            <p>No sign up needed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
