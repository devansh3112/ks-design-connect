import React from 'react';
import { Phone, MessageSquare, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, #f6f3ee 0%, #f6f3ee 100%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/assets/Screenshot_2025-03-08_011347-removebg-preview.png" 
              alt="KS Design Logo" 
              className="h-16 md:h-20"
            />
          </div>
          <p className="text-lg text-gray-800 max-w-xl mx-auto mb-8">
            Samkit Shah
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          {/* Phone Call */}
          <a 
            href="tel:+918735975757" 
            className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
              <Phone size={20} className="text-yellow-500" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500">Call us</div>
              <div className="font-medium">+91 87359 75757</div>
            </div>
          </a>
          
          {/* WhatsApp */}
          <a 
            href="https://wa.me/918735975757" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
              <MessageSquare size={20} className="text-yellow-500" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500">WhatsApp</div>
              <div className="font-medium">Chat with us</div>
            </div>
          </a>
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/ksdesign_ahmedabad/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
              <Instagram size={20} className="text-yellow-500" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500">Instagram</div>
              <div className="font-medium">@ksdesign_ahmedabad</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
