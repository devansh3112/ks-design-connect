
import React from 'react';
import { Phone, Instagram, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, #e6b980 0%, #eacda3 100%)",
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-ksdesign-yellow/20 via-transparent to-ksdesign-dark/20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-ksdesign-dark mb-6">
            <span className="text-ksdesign-yellow">KS</span> Design
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-xl mx-auto">
            Interior Design Excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Call */}
          <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-ksdesign-yellow/10 flex items-center justify-center mb-6">
                <Phone size={28} className="text-ksdesign-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-ksdesign-dark">Call Us</h3>
              <p className="text-gray-600 mb-5 text-center">Reach out directly to discuss your project needs</p>
              <a 
                href="tel:+918735975757" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ksdesign-yellow text-white font-medium hover:bg-ksdesign-yellow/90 transition-colors duration-300"
              >
                +91 87359 75757
              </a>
            </CardContent>
          </Card>
          
          {/* WhatsApp */}
          <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur transform md:translate-y-4">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-ksdesign-yellow/10 flex items-center justify-center mb-6">
                <MessageSquare size={28} className="text-ksdesign-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-ksdesign-dark">WhatsApp</h3>
              <p className="text-gray-600 mb-5 text-center">Send us a message anytime for quick responses</p>
              <a 
                href="https://wa.me/918735975757" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ksdesign-yellow text-white font-medium hover:bg-ksdesign-yellow/90 transition-colors duration-300"
              >
                Chat Now
              </a>
            </CardContent>
          </Card>
          
          {/* Instagram */}
          <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-ksdesign-yellow/10 flex items-center justify-center mb-6">
                <Instagram size={28} className="text-ksdesign-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-ksdesign-dark">Instagram</h3>
              <p className="text-gray-600 mb-5 text-center">Follow our latest designs and inspirations</p>
              <a 
                href="https://www.instagram.com/ksdesign_ahmedabad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ksdesign-yellow text-white font-medium hover:bg-ksdesign-yellow/90 transition-colors duration-300"
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
