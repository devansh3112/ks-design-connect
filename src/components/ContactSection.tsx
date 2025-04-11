
import React from 'react';
import { Phone, Instagram, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ksdesign-dark mb-4">
            Get in <span className="text-ksdesign-yellow">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-ksdesign-yellow mx-auto mb-6"></div>
          <p className="text-gray-600">
            Connect with us through our social channels or give us a call
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone Call */}
            <a 
              href="tel:+918735975757" 
              className="social-button group"
              aria-label="Call us"
            >
              <div className="w-10 h-10 rounded-full bg-ksdesign-yellow/10 flex items-center justify-center group-hover:bg-ksdesign-yellow/20 transition-colors">
                <Phone size={20} className="text-ksdesign-yellow" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Call us</span>
                <span className="font-medium">+91 87359 75757</span>
              </div>
            </a>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/918735975757" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button group"
              aria-label="WhatsApp"
            >
              <div className="w-10 h-10 rounded-full bg-ksdesign-yellow/10 flex items-center justify-center group-hover:bg-ksdesign-yellow/20 transition-colors">
                <MessageSquare size={20} className="text-ksdesign-yellow" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">WhatsApp</span>
                <span className="font-medium">Chat with us</span>
              </div>
            </a>
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/ksdesign_ahmedabad/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button group"
              aria-label="Instagram"
            >
              <div className="w-10 h-10 rounded-full bg-ksdesign-yellow/10 flex items-center justify-center group-hover:bg-ksdesign-yellow/20 transition-colors">
                <Instagram size={20} className="text-ksdesign-yellow" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Instagram</span>
                <span className="font-medium">@ksdesign_ahmedabad</span>
              </div>
            </a>
          </div>
          
          <div className="mt-16">
            <div className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ksdesign-yellow to-ksdesign-gray/50"></div>
              
              <h3 className="text-xl font-semibold text-ksdesign-dark mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ksdesign-yellow/50 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ksdesign-yellow/50 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ksdesign-yellow/50 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="text-center sm:text-left">
                  <button
                    type="submit"
                    className="bg-ksdesign-yellow hover:bg-ksdesign-yellow/90 text-white rounded-lg px-8 py-3 font-medium transition-all duration-300 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
