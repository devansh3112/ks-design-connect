
import React from 'react';
import { Phone, Instagram, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, #eacda3 0%, #f6f3ee 100%)",
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-ksdesign-dark/10 via-transparent to-ksdesign-yellow/10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/22766972-9857-4fe8-a9c7-9c4d67940397.png" 
              alt="KS Design Logo" 
              className="h-16 md:h-20"
            />
          </div>
          <p className="text-lg text-gray-800 max-w-xl mx-auto">
            Interior Design Excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          {/* Phone Call */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/90 backdrop-blur">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-ksdesign-dark/10 flex items-center justify-center mb-4">
                <Phone size={24} className="text-ksdesign-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-ksdesign-dark">Call Us</h3>
              <a 
                href="tel:+918735975757" 
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-ksdesign-dark text-white font-medium hover:bg-ksdesign-dark/90 transition-colors duration-300"
              >
                +91 87359 75757
              </a>
            </CardContent>
          </Card>
          
          {/* WhatsApp */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/90 backdrop-blur transform md:translate-y-0">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-ksdesign-dark/10 flex items-center justify-center mb-4">
                <MessageSquare size={24} className="text-ksdesign-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-ksdesign-dark">WhatsApp</h3>
              <a 
                href="https://wa.me/918735975757" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-ksdesign-dark text-white font-medium hover:bg-ksdesign-dark/90 transition-colors duration-300"
              >
                Chat Now
              </a>
            </CardContent>
          </Card>
          
          {/* Instagram */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/90 backdrop-blur">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-ksdesign-dark/10 flex items-center justify-center mb-4">
                <Instagram size={24} className="text-ksdesign-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-ksdesign-dark">Instagram</h3>
              <a 
                href="https://www.instagram.com/ksdesign_ahmedabad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-ksdesign-dark text-white font-medium hover:bg-ksdesign-dark/90 transition-colors duration-300"
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
