
import React from 'react';
import { Instagram, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ksdesign-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/22766972-9857-4fe8-a9c7-9c4d67940397.png" 
                alt="KS Design Logo" 
                className="h-12 mb-4"
              />
              <p className="text-gray-300">
                Creating beautiful spaces that inspire and elevate your lifestyle.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ksdesign_ahmedabad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ksdesign-yellow hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="tel:+918735975757" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ksdesign-yellow hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
              <a 
                href="https://wa.me/918735975757" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ksdesign-yellow hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-ksdesign-yellow transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-ksdesign-yellow transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-ksdesign-yellow transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-ksdesign-yellow transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300">
                <Phone size={16} className="mr-3 text-ksdesign-yellow" />
                +91 87359 75757
              </p>
              <p className="flex items-center text-gray-300">
                <Instagram size={16} className="mr-3 text-ksdesign-yellow" />
                @ksdesign_ahmedabad
              </p>
              <p className="flex items-center text-gray-300">
                <MessageSquare size={16} className="mr-3 text-ksdesign-yellow" />
                Chat on WhatsApp
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} KS Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
