
import React from 'react';
import { Film } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <Film className="w-8 h-8 text-blue-400 mr-3" />
          <h3 className="text-2xl font-bold">ISLAM CREATIVE HUB</h3>
        </div>
        
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Building bridges between faith and creativity, empowering Muslim voices in the global entertainment industry.
        </p>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © 2024 Islame Creative Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
