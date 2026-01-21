import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Architecture Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-brand-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <span className="block text-gold-500 tracking-[0.3em] text-sm uppercase mb-6 font-semibold animate-fade-in-up">
          Carol Rezek & Ricardo Ambrósio
        </span>
        <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight animate-fade-in-up delay-100">
          Transformando <br />
          <span className="italic">Espaços em Arte</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-200 mb-10 text-lg font-light leading-relaxed animate-fade-in-up delay-200">
          Arquitetura contemporânea que une funcionalidade, estética e a essência de quem habita.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in-up delay-300">
          {/* Passed href directly to Button to use the correct <a> tag rendering */}
          <Button variant="white" href="#portfolio">
            Ver Projetos
          </Button>
          
          <Button variant="outline" href="#contact" className="text-white border-white hover:bg-white hover:text-brand-black">
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};