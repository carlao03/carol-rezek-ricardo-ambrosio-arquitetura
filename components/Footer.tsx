import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-brand-black font-serif font-bold text-lg">
          CR <span className="text-gold-500">&</span> RA
        </div>

        <div className="text-gray-500 text-sm font-light">
          © {new Date().getFullYear()} Carol Rezek & Ricardo Ambrósio. Todos os direitos reservados.
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
        </div>

      </div>
    </footer>
  );
};