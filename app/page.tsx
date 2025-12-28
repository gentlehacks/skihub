import HeroSection from '@/components/HeroSection'
import JsonLd from "@/components/JsonLd";
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { FaRocket } from 'react-icons/fa6'
import { RiUserCommunityLine } from 'react-icons/ri'

const Onboarding = () => {
  return (
    <>
      <JsonLd />
      <div className="w-full flex flex-col items-center bg-blue-50">
        <HeroSection />
        <div className="w-full px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {/* 01 */}
          <div className="bg-blue-500/10 p-5 shadow-md rounded-xl w-full">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <FaRocket className="text-blue-600" />
            </div>
            <h3 className="capitalize font-semibold text-xl text-gray-700 mb-3">
              Structure your learning
            </h3>
            <p className="text-md text-gray-500">
              Stop jumping between random tutorials. Follow a clear step by step
              roadmap designed for your success.
            </p>
          </div>
          {/* 02 */}
          <div className="bg-blue-500/10 p-5 shadow-md rounded-xl w-full">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <RiUserCommunityLine className="text-blue-600" />
            </div>
            <h3 className="capitalize font-semibold text-xl text-gray-700 mb-3">
              Community Veted
            </h3>
            <p className="text-md text-gray-500">
              Every resource is reviewed to ensure it&apos;s high quality, up to
              date, and relevant to Nigerian tech market.
            </p>
          </div>
          {/* 02 */}
          <div className="bg-blue-500/10 p-5 shadow-md rounded-xl w-full">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <BsFillLightningChargeFill className="text-blue-600" />
            </div>
            <h3 className="capitalize font-semibold text-xl text-gray-700 mb-3">
              Zero friction
            </h3>
            <p className="text-md text-gray-500">
              No paywalls, no login walls. Just pure knowledge accessible
              immidiately from any device
            </p>
          </div>
        </div>
        {/* Footer */}
        <div className="w-full bg-blue-50 py-6 flex flex-col items-center mt-10">
          <p className="text-gray-400 mb-2">
            © {new Date().getFullYear()} Skihub. All rights reserved.
          </p>
          <p className="text-gray-400">Made with ❤️ in Nigeria</p>
        </div>
      </div>
    </>
  );
}

export default Onboarding
