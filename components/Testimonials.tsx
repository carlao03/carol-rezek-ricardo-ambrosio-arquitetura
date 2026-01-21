import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mariana S.",
    role: "Residência em Alphaville",
    content: "A sensibilidade da Carol para os interiores transformou nossa casa em um refúgio. O Ricardo garantiu que a estrutura fosse imponente, mas leve. O resultado superou todas as expectativas.",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Grupo Vértice",
    role: "Sede Corporativa",
    content: "Precisávamos de um escritório que transmitisse inovação. O projeto entregue foi além da estética: melhorou a produtividade da equipe através de um layout inteligente e funcional.",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Dr. André L.",
    role: "Clínica Médica",
    content: "Profissionalismo impecável do início ao fim. O acompanhamento da obra foi rigoroso e o design final trouxe a sofisticação que meus pacientes merecem.",
    image: "https://picsum.photos/100/100?random=12"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white border-t border-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="O Que Dizem Nossos Clientes" subtitle="Depoimentos" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <div key={item.id} className="relative p-8 bg-gray-50 rounded-sm hover:shadow-lg transition-shadow duration-300">
              <Quote className="absolute top-6 left-6 text-gold-200 w-12 h-12 -z-0" />
              
              <div className="relative z-10 pt-6">
                <p className="text-gray-600 font-light italic mb-8 leading-relaxed">
                  "{item.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-500">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif text-brand-black font-bold">{item.name}</h4>
                    <span className="text-xs text-gold-600 uppercase tracking-wider">{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};