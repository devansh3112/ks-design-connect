
import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
              src="/lovable-uploads/22766972-9857-4fe8-a9c7-9c4d67940397.png" 
              alt="KS Design Logo" 
              className="h-16 md:h-20"
            />
          </div>
          <p className="text-lg text-gray-800 max-w-xl mx-auto mb-8">
            Interior Design Excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          {/* Phone Call */}
          <Card className="overflow-hidden border-none shadow-md bg-white/90">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-ksdesign-dark/10 flex items-center justify-center mb-2">
                <Phone size={20} className="text-ksdesign-dark" />
              </div>
              <h3 className="text-md font-semibold mb-2 text-ksdesign-dark">Call Us</h3>
              <a 
                href="tel:+918735975757" 
                className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-ksdesign-dark text-white font-medium hover:bg-ksdesign-dark/90 transition-colors duration-300"
              >
                +91 87359 75757
              </a>
            </CardContent>
          </Card>
          
          {/* WhatsApp */}
          <Card className="overflow-hidden border-none shadow-md bg-white/90">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-ksdesign-dark/10 flex items-center justify-center mb-2">
                <MessageCircle size={20} className="text-ksdesign-dark" />
              </div>
              <h3 className="text-md font-semibold mb-2 text-ksdesign-dark">WhatsApp</h3>
              <a 
                href="https://wa.me/918735975757" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-ksdesign-dark text-white font-medium hover:bg-ksdesign-dark/90 transition-colors duration-300"
              >
                Chat Now
              </a>
            </CardContent>
          </Card>
          
          {/* Instagram */}
          <Card className="overflow-hidden border-none shadow-md bg-white/90">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-ksdesign-dark/10 flex items-center justify-center mb-2">
                <Instagram size={20} className="text-ksdesign-dark" />
              </div>
              <h3 className="text-md font-semibold mb-2 text-ksdesign-dark">Instagram</h3>
              <a 
                href="https://www.instagram.com/ksdesign_ahmedabad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-ksdesign-dark text-white font-medium hover:bg-ksdesign-dark/90 transition-colors duration-300"
              >
                @ksdesign_ahmedabad
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
