import React, { useState, useEffect } from "react";
import { ShoppingCart, ArrowRight, Heart, Check, Star, CreditCard, Mail, Shield } from "lucide-react";
import { trackPurchaseAttempt, trackPaymentRedirect, trackError, trackFormInteraction, trackEmailCollection, trackSectionView } from "../utils/gtm";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // SendOwl payment page URL
  const SENDOWL_PAYMENT_URL = "https://sowl.co/p/nR3qc";

  // Track section view when component mounts
  useEffect(() => {
    trackSectionView('payment_section');
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value && e.target.value.includes('@')) {
      trackEmailCollection(e.target.value, 'payment_form');
    }
  };

  const handleEmailFocus = () => {
    trackFormInteraction('payment_form', 'email_focus');
  };

  const handlePurchase = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter your email address");
      trackError('validation_error', 'Email required', 'payment_form');
      return;
    }

    if (!email.includes('@')) {
      setError("Please enter a valid email address");
      trackError('validation_error', 'Invalid email format', 'payment_form');
      return;
    }

    // Track purchase attempt
    trackPurchaseAttempt(email, 'Connection Rituals', 29);

    setIsLoading(true);
    setError("");

    try {
      // Create URL with email parameter for SendOwl
      const paymentUrl = new URL(SENDOWL_PAYMENT_URL);
      paymentUrl.searchParams.append('email', email);
      
      // Track redirect to SendOwl
      trackPaymentRedirect('SendOwl', 'Connection Rituals', 29);
      
      // Small delay for better UX and to ensure tracking fires
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Redirect to SendOwl payment page
      window.location.href = paymentUrl.toString();
      
    } catch (error) {
      console.error('Payment redirect error:', error);
      
      // Track error
      trackError('payment_error', error.message, 'sendowl_redirect');
      
      setError('Unable to redirect to payment. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <section id="get-guide" className="bg-gradient-to-br from-teal-600 to-teal-800 py-16 md:py-20">
      <div className="container px-6 lg:px-8 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-teal-200" />
            <span className="text-teal-200 font-medium">Transform Your Relationship Today</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get Connection Rituals
          </h2>
          
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Start reconnecting with your partner today. Get instant access to "Connection Rituals" and discover 50+ micro-rituals that take 5 minutes or less.
          </p>

          {/* Pricing Card */}
          <div className="bg-white rounded-2xl p-8 mb-8 max-w-md mx-auto shadow-2xl">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">Trusted by thousands of couples</p>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-gray-900 mb-2">$7.99</div>
              <p className="text-gray-600">One-time purchase • Instant access</p>
            </div>

            <div className="space-y-3 mb-6 text-left">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">50+ carefully crafted rituals</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Organized by time of day</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Science-based approach</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">28-page comprehensive guide</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Instant PDF download</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">30-day money-back guarantee</span>
              </div>
            </div>

            {/* Email Input Form */}
            <form onSubmit={handlePurchase} className="space-y-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Email address (for delivery)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={handleEmailFocus}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                  {error}
                </div>
              )}

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Redirecting to checkout...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now - $29
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Secure payment powered by SendOwl • SSL encrypted</span>
            </div>

            {/* SendOwl Trust Badge */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-400">
                Powered by SendOwl • Instant digital delivery
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mb-8">
            <p className="text-teal-200 text-sm mb-4">Accepted payment methods:</p>
            <div className="flex justify-center items-center gap-4 text-teal-100">
              <div className="bg-white/10 px-3 py-1 rounded text-xs">Visa</div>
              <div className="bg-white/10 px-3 py-1 rounded text-xs">Mastercard</div>
              <div className="bg-white/10 px-3 py-1 rounded text-xs">American Express</div>
              <div className="bg-white/10 px-3 py-1 rounded text-xs">PayPal</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center text-teal-100 max-w-3xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-white mb-2">50+</div>
              <p className="text-sm">Connection Rituals</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">5 min</div>
              <p className="text-sm">Or Less Per Ritual</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">30-day</div>
              <p className="text-sm">Money-Back Guarantee</p>
            </div>
          </div>
          
          <div className="mt-8 text-teal-200 text-sm">
            <p>Join thousands of couples who have transformed their relationships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

