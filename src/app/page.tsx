import Image from "next/image";
import EarningTicker from "@/components/EarningTicker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-12 px-6">
      <div className="w-full max-w-lg mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center text-gray-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Image src="/verified.png" alt="Verified" width={16} height={16} className="mr-1.5" />
            Verified
          </div>

          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mb-6"><span className="text-white text-3xl font-bold">P</span></div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Scroll & Earn Program
          </h1>

          <a href="https://trkfy.org/aff_c?offer_id=2691&aff_id=22375" target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center text-lg hover:opacity-90 transition-opacity mb-3">
              Activate Now
            </button>
          </a>

          <Image
            src="/tutorial.gif"
            alt="Payouts animation"
            width={350} 
            height={60}
            unoptimized={true} // Required for GIFs
            className="my-4"
          />
          <p className="text-gray-500 text-sm">
            Payouts every day to PayPal, CashApp & Bank.
          </p>

          <div className="mt-10 text-center w-full">
            <h2 className="text-xl font-bold text-gray-800">Quick Start Guide</h2>
          </div>

          <div className="mt-6 space-y-6 text-left w-full">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div className="ml-4">
                <h3 className="text-md font-semibold text-gray-900">Get Started & Download App</h3>
                <p className="text-gray-500 text-sm mt-1">Click the button above to begin and install the app immediately.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="ml-4">
                <h3 className="text-md font-semibold text-gray-900">Create Account & Connect</h3>
                <p className="text-gray-500 text-sm mt-1">Register in the app and link your profile securely.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="ml-4">
                <h3 className="text-md font-semibold text-gray-900">Watch Videos & Earn Money</h3>
                <p className="text-gray-500 text-sm mt-1">Start scrolling to generate instant daily payouts!</p>
              </div>
            </div>
          </div>

          <a href="https://trkfy.org/aff_c?offer_id=2691&aff_id=22375" target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center text-lg hover:opacity-90 transition-opacity mt-10">
              Activate Now
            </button>
          </a>

          <EarningTicker />
        </div>
      </div>
    </main>
  );
}
