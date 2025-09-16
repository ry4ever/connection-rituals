import React, { useEffect, useState } from "react";
import { CheckCircle, Download, ArrowRight, Heart } from "lucide-react";

const Success = () => {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    // Get session ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const sessionIdParam = urlParams.get('session_id');
    setSessionId(sessionIdParam);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your purchase. Your Connection Rituals guide is ready for download.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What's Next?
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">Check your email for the download link</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">Start with 2-3 rituals that resonate with you</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">Practice consistently for best results</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a 
              href="/connection_rituals_guide.pdf"
              download="Connection_Rituals_Guide.pdf"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-lg group w-full"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Your Guide Now
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="https://liveyourbest.digital"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-all duration-300 w-full"
            >
              Visit LiveYourBest.digital
            </a>
          </div>

          {sessionId && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Order ID: {sessionId.substring(0, 20)}...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Success;

