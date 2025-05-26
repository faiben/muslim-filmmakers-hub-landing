
import React from 'react';
import { Film, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-600 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-amber-500 rotate-12"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 border-2 border-blue-600 -rotate-12"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="flex justify-center items-center mb-6">
          <Film className="w-12 h-12 text-blue-600 mr-4" />
          <Users className="w-12 h-12 text-amber-500" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
            Islame Creative Hub
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Empowering Muslim filmmakers worldwide through premier education and a dedicated platform 
          that honors Islamic values while engaging global audiences
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center text-blue-700 font-medium">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
            Coming Soon
          </div>
          <div className="text-gray-500">•</div>
          <div className="text-gray-600">Two Revolutionary Projects</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
