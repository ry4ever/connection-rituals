import React from "react";
import { Heart, Globe, Users } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="font-bold text-2xl text-teal-400 mb-2">LiveYourBest.digital</h3>
              <div className="flex items-center gap-2 text-teal-300 text-sm">
                <Heart className="w-4 h-4" />
                <span>Mind • Body • Soul</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering individuals and couples to cultivate digital wellness and mindful productivity, creating deeper connections in our hyper-connected world.
            </p>
            <p className="text-teal-400 font-semibold">Transform Your Relationship, One Ritual at a Time</p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://liveyourbest.digital" className="text-gray-300 hover:text-teal-400 transition-colors">Main Website</a></li>
              <li><a href="#get-guide" className="text-gray-300 hover:text-teal-400 transition-colors">Download Guide</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-teal-400 transition-colors">Connection Rituals</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">Why It Works</a></li>
              <li><a href="https://liveyourbest.digital/blog" className="text-gray-300 hover:text-teal-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-teal-400" />
                <span>Digital Wellness Community</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal-400" />
                <span>Remote Professionals</span>
              </li>
              <li>Free Resources</li>
              <li>Weekly Articles</li>
              <li>Podcast Episodes</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} LiveYourBest.digital. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://liveyourbest.digital/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a>
            <a href="https://liveyourbest.digital/terms" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Terms of Service</a>
            <a href="https://liveyourbest.digital/contact" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
