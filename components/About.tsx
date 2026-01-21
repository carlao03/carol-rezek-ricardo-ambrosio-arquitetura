import React from 'react';
import { SectionTitle } from './SectionTitle';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500 z-0"></div>
            <img 
              src="https://picsum.photos/800/1000?random=1" 
              alt="Carol Rezek & Ricardo Ambrósio" 
              className="w-full h-[500px] object-cover relative z-10 shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <SectionTitle title="Sobre Nós" subtitle="Os Arquitetos" centered={false} />
            
            <p className="text-gray-600 leading-8 mb-6 text-lg font-light">
              Somos um estúdio de arquitetura focado em criar experiências únicas. Com mais de 15 anos de mercado, 
              nossa assinatura é a fusão entre o minimalismo moderno e o conforto atemporal.
            </p>
            <p className="text-gray-600 leading-8 mb-8 text-lg font-light">
              Carol Rezek traz a sensibilidade dos detalhes e interiores, enquanto Ricardo Ambrósio lidera a concepção 
              volumétrica e estrutural. Juntos, transformamos visões abstratas em realidade concreta.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-4xl font-serif text-brand-black block mb-2">+150</span>
                <span className="text-sm uppercase tracking-widest text-gray-500">Projetos Entregues</span>
              </div>
              <div>
                <span className="text-4xl font-serif text-brand-black block mb-2">15</span>
                <span className="text-sm uppercase tracking-widest text-gray-500">Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};