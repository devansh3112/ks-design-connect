
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ksdesign-dark mb-4">
            About <span className="text-ksdesign-yellow">KS Design</span>
          </h2>
          <div className="w-20 h-1 bg-ksdesign-yellow mx-auto mb-6"></div>
          <p className="text-gray-600">
            We transform spaces into experiences that tell your story
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              KS Design is a premier interior design firm based in Ahmedabad, dedicated to creating 
              spaces that are both beautiful and functional. With our keen eye for detail and commitment 
              to excellence, we transform ordinary spaces into extraordinary environments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our approach combines creative vision with practical solutions, ensuring that each project 
              reflects the unique personality and needs of our clients. From residential to commercial spaces, 
              we bring your vision to life with precision and passion.
            </p>
            <div className="pt-4">
              <h3 className="font-semibold text-lg text-ksdesign-dark">Our Services</h3>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ksdesign-yellow rounded-full mr-2"></span>
                  <span className="text-gray-700">Residential Design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ksdesign-yellow rounded-full mr-2"></span>
                  <span className="text-gray-700">Commercial Spaces</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ksdesign-yellow rounded-full mr-2"></span>
                  <span className="text-gray-700">Space Planning</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ksdesign-yellow rounded-full mr-2"></span>
                  <span className="text-gray-700">Custom Furniture</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ksdesign-yellow rounded-full mr-2"></span>
                  <span className="text-gray-700">Renovation</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ksdesign-yellow rounded-full mr-2"></span>
                  <span className="text-gray-700">Consultation</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-ksdesign-yellow/10 rounded-lg p-8 relative z-10">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=800" 
                  alt="Interior Design" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-ksdesign-yellow/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
