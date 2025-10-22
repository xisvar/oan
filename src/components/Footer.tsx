import React from "react";
import { Twitter, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Copyright and links */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm mb-1">
              © 2025 OAN. All rights reserved.
            </p>
            <div className="flex gap-3 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Right side - Social media */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 text-sm mb-2">
              Join Our Community & get the latest updates
            </p>
            <div className="flex gap-4 justify-center md:justify-end items-center">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Linkedin className="h-6 w-6" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Mail className="h-6 w-6" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <FileText className="h-6 w-6" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
