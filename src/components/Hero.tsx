
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative bg-gray-50 pt-16"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-ksdesign-yellow/5"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-ksdesign-yellow/5"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-ksdesign-dark mb-6">
            Transform Your Space with 
            <span className="text-ksdesign-yellow"> KS Design</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Creating exceptional interior spaces that reflect your style and personality.
            Based in Ahmedabad, delivering design excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a 
              href="#contact" 
              className="bg-ksdesign-yellow hover:bg-ksdesign-yellow/90 text-white rounded-lg px-8 py-3 font-medium transition-all duration-300 hover:shadow-lg"
            >
              Get in Touch
            </a>
            
            <a 
              href="#about" 
              className="px-8 py-3 rounded-lg border border-ksdesign-gray text-ksdesign-gray hover:bg-ksdesign-gray hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-ksdesign-dark hover:text-ksdesign-yellow transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
