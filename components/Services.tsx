import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Home, Building2, Layout, PenTool } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  { 
    id: 1, 
    title: 'Projetos Residenciais', 
    description: 'Casas de alto padrão desenhadas para refletir a personalidade e o estilo de vida dos moradores.', 
    icon: 'home' 
  },
  { 
    id: 2, 
    title: 'Projetos Comerciais', 
    description: 'Espaços corporativos e comerciais que aliam funcionalidade, ergonomia e identidade de marca.', 
    icon: 'building' 
  },
  { 
    id: 3, 
    title: 'Design de Interiores', 
    description: 'Curadoria de mobiliário, texturas e iluminação para criar atmosferas acolhedoras e sofisticadas.', 
    icon: 'layout' 
  },
  { 
    id: 4, 
    title: 'Consultoria', 
    description: 'Orientação técnica e estética para reformas e renovações, garantindo viabilidade e beleza.', 
    icon: 'pen' 
  },
];

const IconMap = {
  home: Home,
  building: Building2,
  layout: Layout,
  pen: PenTool
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Nossos Serviços" subtitle="O que fazemos" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <div key={service.id} className="p-8 border border-gray-100 bg-white hover:border-gold-500 hover:shadow-lg transition-all duration-300 group rounded-sm">
                <div className="w-12 h-12 bg-gray-50 text-brand-black flex items-center justify-center rounded-full mb-6 group-hover:bg-brand-black group-hover:text-gold-500 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-serif text-brand-black mb-4 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm font-light">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};